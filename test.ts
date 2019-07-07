/**
 * LCD tests
 */

makerbit.connectLcd(39);
makerbit.showStringOnLcd1602("Hello world", 0, 15);
makerbit.showStringOnLcd1602("Hello world", 0, 15, TextOption.AlignRight);
makerbit.showStringOnLcd2004("Hello world", 0, 19);
makerbit.showStringOnLcd2004("9", 0, 19, TextOption.PadWithZeros);
makerbit.clearLcd1602();
makerbit.clearLcd2004();
makerbit.setLcdBacklight(LcdBacklight.On);
const pos1602: number = makerbit.position1602(LcdPosition1602.P0);
const pos2004: number = makerbit.position2004(LcdPosition2004.P79);
const isLcdConnected: boolean = makerbit.isLcdConnected();
