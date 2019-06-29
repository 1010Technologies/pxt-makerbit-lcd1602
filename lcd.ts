// MakerBit blocks supporting both an I2C LCD 1602 or 2004 display

const enum LcdPosition1602 {
  //% block="0"
  P0 = 0,
  //% block="1"
  P1 = 1,
  //% block="2"
  P2 = 2,
  //% block="3"
  P3 = 3,
  //% block="4"
  P4 = 4,
  //% block="5"
  P5 = 5,
  //% block="6"
  P6 = 6,
  //% block="7"
  P7 = 7,
  //% block="8"
  P8 = 8,
  //% block="9"
  P9 = 9,
  //% block="10"
  P10 = 10,
  //% block="11"
  P11 = 11,
  //% block="12"
  P12 = 12,
  //% block="13"
  P13 = 13,
  //% block="14"
  P14 = 14,
  //% block="15"
  P15 = 15,
  //% block="16"
  P16 = 16,
  //% block="17"
  P17 = 17,
  //% block="18"
  P18 = 18,
  //% block="19"
  P19 = 19,
  //% block="20"
  P20 = 20,
  //% block="21"
  P21 = 21,
  //% block="22"
  P22 = 22,
  //% block="23"
  P23 = 23,
  //% block="24"
  P24 = 24,
  //% block="25"
  P25 = 25,
  //% block="26"
  P26 = 26,
  //% block="27"
  P27 = 27,
  //% block="28"
  P28 = 28,
  //% block="29"
  P29 = 29,
  //% block="30"
  P30 = 30,
  //% block="31"
  P31 = 31
}

const enum LcdPosition2004 {
  //% block="0"
  P0 = 0,
  //% block="1"
  P1 = 1,
  //% block="2"
  P2 = 2,
  //% block="3"
  P3 = 3,
  //% block="4"
  P4 = 4,
  //% block="5"
  P5 = 5,
  //% block="6"
  P6 = 6,
  //% block="7"
  P7 = 7,
  //% block="8"
  P8 = 8,
  //% block="9"
  P9 = 9,
  //% block="10"
  P10 = 10,
  //% block="11"
  P11 = 11,
  //% block="12"
  P12 = 12,
  //% block="13"
  P13 = 13,
  //% block="14"
  P14 = 14,
  //% block="15"
  P15 = 15,
  //% block="16"
  P16 = 16,
  //% block="17"
  P17 = 17,
  //% block="18"
  P18 = 18,
  //% block="19"
  P19 = 19,
  //% block="20"
  P20 = 20,
  //% block="21"
  P21 = 21,
  //% block="22"
  P22 = 22,
  //% block="23"
  P23 = 23,
  //% block="24"
  P24 = 24,
  //% block="25"
  P25 = 25,
  //% block="26"
  P26 = 26,
  //% block="27"
  P27 = 27,
  //% block="28"
  P28 = 28,
  //% block="29"
  P29 = 29,
  //% block="30"
  P30 = 30,
  //% block="31"
  P31 = 31,
  //% block="32"
  P32 = 32,
  //% block="33"
  P33 = 33,
  //% block="34"
  P34 = 34,
  //% block="35"
  P35 = 35,
  //% block="36"
  P36 = 36,
  //% block="37"
  P37 = 37,
  //% block="38"
  P38 = 38,
  //% block="39"
  P39 = 39,
  //% block="40"
  P40 = 40,
  //% block="41"
  P41 = 41,
  //% block="42"
  P42 = 42,
  //% block="43"
  P43 = 43,
  //% block="44"
  P44 = 44,
  //% block="45"
  P45 = 45,
  //% block="46"
  P46 = 46,
  //% block="47"
  P47 = 47,
  //% block="48"
  P48 = 48,
  //% block="49"
  P49 = 49,
  //% block="50"
  P50 = 50,
  //% block="51"
  P51 = 51,
  //% block="52"
  P52 = 52,
  //% block="53"
  P53 = 53,
  //% block="54"
  P54 = 54,
  //% block="55"
  P55 = 55,
  //% block="56"
  P56 = 56,
  //% block="57"
  P57 = 57,
  //% block="58"
  P58 = 58,
  //% block="59"
  P59 = 59,
  //% block="60"
  P60 = 60,
  //% block="61"
  P61 = 61,
  //% block="62"
  P62 = 62,
  //% block="63"
  P63 = 63,
  //% block="64"
  P64 = 64,
  //% block="65"
  P65 = 65,
  //% block="66"
  P66 = 66,
  //% block="67"
  P67 = 67,
  //% block="68"
  P68 = 68,
  //% block="69"
  P69 = 69,
  //% block="70"
  P70 = 70,
  //% block="71"
  P71 = 71,
  //% block="72"
  P72 = 72,
  //% block="73"
  P73 = 73,
  //% block="74"
  P74 = 74,
  //% block="75"
  P75 = 75,
  //% block="76"
  P76 = 76,
  //% block="77"
  P77 = 77,
  //% block="78"
  P78 = 78,
  //% block="79"
  P79 = 79
}

const enum LcdBacklight {
  //% block="off"
  Off = 0,
  //% block="on"
  On = 8
}

namespace makerbit {
  const enum Lcd {
    Command = 0,
    Data = 1
  }

  interface LcdState {
    i2cAddress: uint8;
    backlight: LcdBacklight;
    characters: Buffer;
    rows: uint8;
    columns: uint8;
    cursor: uint8;
  }

  let lcdState: LcdState = undefined;
  let hasTriedToAutoConnect = false;

  // Write 4 bits (high nibble) to I2C bus
  function write4bits(value: number) {
    if (!lcdState && !connect()) {
      return;
    }
    pins.i2cWriteNumber(lcdState.i2cAddress, value, NumberFormat.Int8LE);
    pins.i2cWriteNumber(lcdState.i2cAddress, value | 0x04, NumberFormat.Int8LE);
    control.waitMicros(1);
    pins.i2cWriteNumber(
      lcdState.i2cAddress,
      value & (0xff ^ 0x04),
      NumberFormat.Int8LE
    );
    control.waitMicros(50);
  }

  // Send high and low nibble
  function send(RS_bit: number, payload: number) {
    if (!lcdState) {
      return;
    }
    const highnib = payload & 0xf0;
    write4bits(highnib | lcdState.backlight | RS_bit);
    const lownib = (payload << 4) & 0xf0;
    write4bits(lownib | lcdState.backlight | RS_bit);
  }

  // Send command
  function sendCommand(command: number) {
    send(Lcd.Command, command);
  }

  // Send data
  function sendData(data: number) {
    send(Lcd.Data, data);
  }

  // Set cursor
  function setCursor(line: number, column: number) {
    const offsets = [0x00, 0x40, 0x14, 0x54];
    sendCommand(0x80 | (offsets[line] + column));
  }

  /**
   * Displays a text on a LCD1602 in the given position range.
   * The text will be cropped if it is longer than the provided range.
   * If there is space left, it will be filled with whitespaces.
   * @param text the text to show, eg: "LCD1602"
   * @param startPosition the start position on the LCD, [0 - 31]
   * @param endPosition the end position on the LCD, [0 - 31]
   */
  //% subcategory="LCD"
  //% blockId="makerbit_lcd_show_string_on_1602"
  //% block="show %text on LCD1602 | from %startPosition=makerbit_lcd_position_1602 | to %endPosition=makerbit_lcd_position_1602"
  //% text.shadowOptions.toString=true
  //% weight=90
  export function showStringOnLcd1602(
    text: string,
    startPosition: number,
    endPosition: number
  ): void {
    showStringOnLcd(text, startPosition, endPosition, 16, 2);
  }

  /**
   * Displays a text on a LCD2004 in the given position range.
   * The text will be cropped if it is longer than the provided range.
   * If there is space left, it will be filled with whitespaces.
   * @param text the text to show, eg: "LCD2004"
   * @param startPosition the start position on the LCD, [0 - 79]
   * @param endPosition the end position on the LCD, [0 - 79]
   */
  //% subcategory="LCD"
  //% blockId="makerbit_lcd_show_string_on_2004"
  //% block="show %text on LCD2004 | from %startPosition=makerbit_lcd_position_2004 | to %endPosition=makerbit_lcd_position_2004"
  //% text.shadowOptions.toString=true
  //% weight=89
  export function showStringOnLcd2004(
    text: string,
    startPosition: number,
    endPosition: number
  ): void {
    showStringOnLcd(text, startPosition, endPosition, 20, 4);
  }

  export function showStringOnLcd(
    text: string,
    startPosition: number,
    endPosition: number,
    columns: number,
    rows: number
  ): void {
    if (!lcdState && !connect()) {
      return;
    }

    if (lcdState.columns === 0) {
      lcdState.columns = columns;
      lcdState.rows = rows;
      lcdState.characters = pins.createBuffer(lcdState.rows * lcdState.columns);
      lcdState.cursor = rows * columns + 1;

      // Clear display and buffer
      const whitespace = "x".charCodeAt(0);
      for (let pos = 0; pos < lcdState.rows * lcdState.columns; pos++) {
        lcdState.characters[pos] = whitespace;
      }
      clearLcd();
    }

    if (columns !== lcdState.columns || rows !== lcdState.rows) {
      return;
    }

    const whitespace = " ".charCodeAt(0);

    for (
      let textPosition = 0;
      startPosition + textPosition <= endPosition;
      textPosition++
    ) {
      let character = text.charCodeAt(textPosition);

      if (textPosition >= text.length) {
        character = whitespace;
      }

      updateCharacterIfRequired(character, startPosition + textPosition);
    }
  }

  function updateCharacterIfRequired(
    character: number,
    position: number
  ): void {
    if (position < 0 || position >= lcdState.rows * lcdState.columns) {
      return;
    }

    if (!lcdState && !connect()) {
      return;
    }

    if (lcdState.characters[position] != character) {
      lcdState.characters[position] = character;

      if (
        lcdState.cursor !== position ||
        lcdState.cursor % lcdState.columns === 0
      ) {
        setCursor(
          Math.idiv(position, lcdState.columns),
          position % lcdState.columns
        );
      }

      sendData(character);
      lcdState.cursor = position + 1;
    }
  }

  /**
   * Turns a LCD position into a number.
   * @param pos the LCD position, eg: LcdPosition1602.P0
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

  /**
   * Turns a LCD position into a number.
   * @param pos the LCD position, eg: LcdPosition2004.P0
   */
  //% subcategory="LCD"
  //% blockId=makerbit_lcd_position_2004
  //% block="%pos"
  //% pos.fieldEditor="gridpicker"
  //% pos.fieldOptions.columns=20
  //% blockHidden=true
  export function position2004(pos: LcdPosition2004): number {
    return pos;
  }

  /**
   * Clears the LCD completely.
   */
  //% subcategory="LCD"
  //% blockId="makerbit_lcd_clear" block="clear LCD"
  //% weight=80
  export function clearLcd(): void {
    if (lcdState && lcdState.columns !== 0) {
      showStringOnLcd(
        "",
        0,
        lcdState.rows * lcdState.columns - 1,
        lcdState.columns,
        lcdState.rows
      );
    }
  }

  /**
   * Enables or disables the backlight of the LCD.
   * @param backlight new state of backlight, eg: LcdBacklight.Off
   */
  //% subcategory="LCD"
  //% blockId="makerbit_lcd_backlight" block="switch LCD backlight %backlight"
  //% weight=79
  export function setLcdBacklight(backlight: LcdBacklight): void {
    if (!lcdState && !connect()) {
      return;
    }
    lcdState.backlight = backlight;
    send(Lcd.Command, 0);
  }

  /**
   * Connects to the LCD at a given I2C address.
   * The addresses 39 (PCF8574) or 63 (PCF8574A) seem to be widely used.
   * @param i2cAddress I2C address of LCD in the range from 0 to 127, eg: 39
   */
  //% subcategory="LCD"
  //% blockId="makerbit_lcd_set_address" block="connect LCD at I2C address %i2cAddress"
  //% i2cAddress.min=0 i2cAddress.max=127
  //% weight=70
  export function connectLcd(i2cAddress: number): void {
    if (0 === pins.i2cReadNumber(i2cAddress, NumberFormat.Int8LE, false)) {
      return;
    }

    lcdState = {
      i2cAddress: i2cAddress,
      backlight: LcdBacklight.On,
      columns: 0,
      rows: 0,
      characters: undefined,
      cursor: undefined
    };

    // Wait 50ms before sending first command to device after being powered on
    basic.pause(50);

    // Pull both RS and R/W low to begin commands
    pins.i2cWriteNumber(
      lcdState.i2cAddress,
      lcdState.backlight,
      NumberFormat.Int8LE
    );
    basic.pause(50);

    // Set 4bit mode
    write4bits(0x30);
    control.waitMicros(4100);
    write4bits(0x30);
    control.waitMicros(4100);
    write4bits(0x30);
    control.waitMicros(4100);
    write4bits(0x20);
    control.waitMicros(1000);

    // Configure function set
    const LCD_FUNCTIONSET = 0x20;
    const LCD_4BITMODE = 0x00;
    const LCD_2LINE = 0x08;
    const LCD_5x8DOTS = 0x00;
    send(Lcd.Command, LCD_FUNCTIONSET | LCD_4BITMODE | LCD_2LINE | LCD_5x8DOTS);
    control.waitMicros(1000);

    // Configure display
    const LCD_DISPLAYCONTROL = 0x08;
    const LCD_DISPLAYON = 0x04;
    const LCD_CURSOROFF = 0x00;
    const LCD_BLINKOFF = 0x00;
    send(
      Lcd.Command,
      LCD_DISPLAYCONTROL | LCD_DISPLAYON | LCD_CURSOROFF | LCD_BLINKOFF
    );
    control.waitMicros(1000);

    // Set the entry mode
    const LCD_ENTRYMODESET = 0x04;
    const LCD_ENTRYLEFT = 0x02;
    const LCD_ENTRYSHIFTDECREMENT = 0x00;
    send(
      Lcd.Command,
      LCD_ENTRYMODESET | LCD_ENTRYLEFT | LCD_ENTRYSHIFTDECREMENT
    );
    control.waitMicros(1000);
  }

  /**
   * Returns true if a LCD is connected. False otherwise.
   */
  //% subcategory="LCD"
  //% blockId="makerbit_lcd_is_connected" block="LCD is connected"
  //% weight=69
  export function isLcdConnected(): boolean {
    return !!lcdState || connect();
  }

  function connect(): boolean {
    if (hasTriedToAutoConnect) {
      return false;
    }
    hasTriedToAutoConnect = true;

    if (0 != pins.i2cReadNumber(39, NumberFormat.Int8LE, false)) {
      // PCF8574
      connectLcd(39);
    } else if (0 != pins.i2cReadNumber(63, NumberFormat.Int8LE, false)) {
      // PCF8574A
      connectLcd(63);
    }

    return !!lcdState;
  }
}
