// MakerBit blocks supporting an I2C LCD 1602 display

const enum LcdPosition1602 {
  //% block="1"
  Pos1 = 1,
  //% block="2"
  Pos2 = 2,
  //% block="3"
  Pos3 = 3,
  //% block="4"
  Pos4 = 4,
  //% block="5"
  Pos5 = 5,
  //% block="6"
  Pos6 = 6,
  //% block="7"
  Pos7 = 7,
  //% block="8"
  Pos8 = 8,
  //% block="9"
  Pos9 = 9,
  //% block="10"
  Pos10 = 10,
  //% block="11"
  Pos11 = 11,
  //% block="12"
  Pos12 = 12,
  //% block="13"
  Pos13 = 13,
  //% block="14"
  Pos14 = 14,
  //% block="15"
  Pos15 = 15,
  //% block="16"
  Pos16 = 16,
  //% block="17"
  Pos17 = 17,
  //% block="18"
  Pos18 = 18,
  //% block="19"
  Pos19 = 19,
  //% block="20"
  Pos20 = 20,
  //% block="21"
  Pos21 = 21,
  //% block="22"
  Pos22 = 22,
  //% block="23"
  Pos23 = 23,
  //% block="24"
  Pos24 = 24,
  //% block="25"
  Pos25 = 25,
  //% block="26"
  Pos26 = 26,
  //% block="27"
  Pos27 = 27,
  //% block="28"
  Pos28 = 28,
  //% block="29"
  Pos29 = 29,
  //% block="30"
  Pos30 = 30,
  //% block="31"
  Pos31 = 31,
  //% block="32"
  Pos32 = 32
}

const enum LcdChar {
  //% block="1"
  c1 = 0,
  //% block="2"
  c2 = 1,
  //% block="3"
  c3 = 2,
  //% block="4"
  c4 = 3,
  //% block="5"
  c5 = 4,
  //% block="6"
  c6 = 5,
  //% block="7"
  c7 = 6,
  //% block="8"
  c8 = 7
}

//% color=#0fbc11 icon="\u272a" block="MakerBit"
//% category="MakerBit"
namespace makerbit {

  /**
   * Displays a text on a LCD1602 in the given position range.
   * The text will be cropped if it is longer than the provided length.
   * If there is space left, it will be filled with pad characters.
   * @param text the text to show, eg: "MakerBit"
   * @param startPosition the start position on the LCD, [1 - 32]
   * @param length the maximum space used on the LCD, eg: 16
   * @param option configures padding and alignment, eg: TextOption.Left
   */
  //% subcategory="LCD"
  //% blockId="makerbit_lcd_show_string_on_1602"
  //% block="LCD1602 show %text | at position %startPosition=makerbit_lcd_position_1602 with length %length || and %option"
  //% text.shadowOptions.toString=true
  //% length.min=1 length.max=32 length.fieldOptions.precision=1
  //% expandableArgumentMode="toggle"
  //% inlineInputMode="inline"
  //% weight=90
  export function showStringOnLcd1602(
    text: string,
    startPosition: number,
    length: number,
    option?: TextOption
  ): void {
    updateCharacterBuffer(
      text,
      startPosition - 1,
      length,
      16,
      2,
      toAlignment(option),
      toPad(option)
    );
  }

  /**
   * Clears the LCD1602 completely.
   */
  //% subcategory="LCD"
  //% blockId="makerbit_lcd_clear_1602" block="LCD1602 clear display"
  //% weight=89
  export function clearLcd1602(): void {
    showStringOnLcd1602("", 1, 32);
  }

  /**
   * Turns a LCD position into a number.
   * @param pos the LCD position, eg: LcdPosition1602.Pos1
   */
  //% subcategory="LCD"
  //% blockId=makerbit_lcd_position_1602
  //% block="%pos"
  //% pos.fieldEditor="gridpicker"
  //% pos.fieldOptions.columns=16
  //% blockHidden=true
  export function position1602(pos: LcdPosition1602): number {
    return pos;
  }

  // /**
  //  * Create a custom LCD character using a 5x8 pixel matrix.
  //  */
  // //% subcategory="LCD"
  // //% blockId="makerbit_lcd_makecustomchar"
  // //% block="make custom character %char|%im"
  // //% weight=60
  // export function lcdMakeCustomChar(char: LcdChar, im: Image): void {
  //   const customChar = [0, 0, 0, 0, 0, 0, 0, 0];
  //   for(let y = 0; y < 8; y++) {
  //     for(let x = 0; x < 5; x++) {
  //       if (im.pixel(x, y)) {
  //         customChar[y] |= 1 << (4 - x)
  //       }
  //     }
  //   }
  //   const LCD_SETCGRAMADDR = 0x40;
  //   sendCommand(LCD_SETCGRAMADDR | (char << 3));
  //   for (let y = 0; y < 8; y++) {
  //     sendData(customChar[y]);
  //   }
  //   control.waitMicros(1000);
  // }

  // /**
  //  * Create a 5x8 pixel matrix for use as a custom character.
  //  */
  // //% subcategory="LCD"
  // //% blockId="makerbit_lcd_customchar"
  // //% block="pixels"
  // //% imageLiteral=1
  // //% imageLiteralColumns=5
  // //% imageLiteralRows=8
  // //% imageLiteralScale=0.6
  // //% shim=images::createImage
  // //% weight=59
  // export function lcdCustomChar(i: string): Image {
  //     return <Image><any>i;
  // }

  // /**
  //  * Display a custom character at a specified LCD position.
  //  */
  // //% subcategory="LCD"
  // //% blockId="makerbit_lcd_showcustomchar"
  // //% block="show custom character %char at position %position=makerbit_lcd_position_1602"
  // //% weight=58
  // export function lcdShowCustomChar(char: LcdChar, position: number): void {
  //   if (!lcdState) {
  //       return;
  //   }
  //   if (lcdState.columns === 0) {
  //     clearLcd1602();
  //       control.waitMicros(1000);
  //   }
  //   lcdState.characters[position - 1] = char;
  // }

}
