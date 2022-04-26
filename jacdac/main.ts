//% deprecated
namespace makerbit {

}

namespace modules {
    /**
     * makerbit LCD screen
     */
    //% fixedInstance whenUsed block="makerbit LCD"
    export const makerbitLCD = new CharacterScreenClient("makerbit LCD?dev=self&rows=2&columns=16")
}

namespace servers {
    class CharacterScreenServer extends jacdac.Server {
        textDirection = jacdac.CharacterScreenTextDirection.LeftToRight
        message: string = ""

        constructor() {
            super(jacdac.SRV_CHARACTER_SCREEN, {
                variant: jacdac.CharacterScreenVariant.LCD,
            })
        }

        handlePacket(pkt: jacdac.JDPacket): void {
            this.textDirection = this.handleRegValue(
                pkt,
                jacdac.CharacterScreenReg.TextDirection,
                jacdac.CharacterScreenRegPack.TextDirection,
                this.textDirection
            )
            this.handleRegFormat(pkt,
                jacdac.CharacterScreenReg.Columns,
                jacdac.CharacterScreenRegPack.Columns,
                [16]) // NUMBER_OF_CHAR_PER_LINE
            this.handleRegFormat(pkt,
                jacdac.CharacterScreenReg.Rows,
                jacdac.CharacterScreenRegPack.Rows,
                [2]) // NUMBER_OF_CHAR_PER_LINE

            const oldMessage = this.message
            this.message = this.handleRegValue(
                pkt,
                jacdac.CharacterScreenReg.Message,
                jacdac.CharacterScreenRegPack.Message,
                this.message
            )
            if (this.message != oldMessage) this.syncMessage()
        }

        private syncMessage() {
            if (!this.message) makerbit.clearLcd1602()
            else
                makerbit.showStringOnLcd1602(this.message, 0, this.message.length)
        }
    }
    function start() {
        jacdac.startSelfServers(() => [
            new CharacterScreenServer()
        ])
    }
    start()
}