// MakerBit blocks supporting both an I2C LCD 1602 or 2004 display

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

const enum LcdPosition2004 {
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
  Pos32 = 32,
  //% block="33"
  Pos33 = 33,
  //% block="34"
  Pos34 = 34,
  //% block="35"
  Pos35 = 35,
  //% block="36"
  Pos36 = 36,
  //% block="37"
  Pos37 = 37,
  //% block="38"
  Pos38 = 38,
  //% block="39"
  Pos39 = 39,
  //% block="40"
  Pos40 = 40,
  //% block="41"
  Pos41 = 41,
  //% block="42"
  Pos42 = 42,
  //% block="43"
  Pos43 = 43,
  //% block="44"
  Pos44 = 44,
  //% block="45"
  Pos45 = 45,
  //% block="46"
  Pos46 = 46,
  //% block="47"
  Pos47 = 47,
  //% block="48"
  Pos48 = 48,
  //% block="49"
  Pos49 = 49,
  //% block="50"
  Pos50 = 50,
  //% block="51"
  Pos51 = 51,
  //% block="52"
  Pos52 = 52,
  //% block="53"
  Pos53 = 53,
  //% block="54"
  Pos54 = 54,
  //% block="55"
  Pos55 = 55,
  //% block="56"
  Pos56 = 56,
  //% block="57"
  Pos57 = 57,
  //% block="58"
  Pos58 = 58,
  //% block="59"
  Pos59 = 59,
  //% block="60"
  Pos60 = 60,
  //% block="61"
  Pos61 = 61,
  //% block="62"
  Pos62 = 62,
  //% block="63"
  Pos63 = 63,
  //% block="64"
  Pos64 = 64,
  //% block="65"
  Pos65 = 65,
  //% block="66"
  Pos66 = 66,
  //% block="67"
  Pos67 = 67,
  //% block="68"
  Pos68 = 68,
  //% block="69"
  Pos69 = 69,
  //% block="70"
  Pos70 = 70,
  //% block="71"
  Pos71 = 71,
  //% block="72"
  Pos72 = 72,
  //% block="73"
  Pos73 = 73,
  //% block="74"
  Pos74 = 74,
  //% block="75"
  Pos75 = 75,
  //% block="76"
  Pos76 = 76,
  //% block="77"
  Pos77 = 77,
  //% block="78"
  Pos78 = 78,
  //% block="79"
  Pos79 = 79,
  //% block="80"
  Pos80 = 80
}

const enum LcdBacklight {
  //% block="off"
  Off = 0,
  //% block="on"
  On = 8
}

const enum TextAlignment {
  //% block="left-aligned"
  Left,
  //% block="right-aligned"
  Right,
  //% block="center-aligned"
  Center,
}

const enum TextOption {
  //% block="align left"
  AlignLeft,
  //% block="align right"
  AlignRight,
  //% block="align center"
  AlignCenter,
  //% block="pad with zeros"
  PadWithZeros
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
    lineNeedsUpdate: uint8;
    refreshIntervalId: number;
  }

  let lcdState: LcdState = undefined;

  function connect(): boolean {
    if (0 != pins.i2cReadNumber(39, NumberFormat.Int8LE, false)) {
      // PCF8574
      connectLcd(39);
    } else if (0 != pins.i2cReadNumber(63, NumberFormat.Int8LE, false)) {
      // PCF8574A
      connectLcd(63);
    }
    return !!lcdState;
  }

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

  function updateCharacterBuffer(
    text: string,
    offset: number,
    length: number,
    columns: number,
    rows: number,
    alignment: TextAlignment,
    pad: string
  ): void {
    if (!lcdState && !connect()) {
      return;
    }

    if (!lcdState.refreshIntervalId) {
      lcdState.refreshIntervalId = control.setInterval(refreshDisplay, 500, control.IntervalMode.Timeout)
    }

    if (lcdState.columns === 0) {
      lcdState.columns = columns;
      lcdState.rows = rows;
      lcdState.characters = pins.createBuffer(lcdState.rows * lcdState.columns);

      // Clear display and buffer
      const whitespace = "x".charCodeAt(0);
      for (let pos = 0; pos < lcdState.rows * lcdState.columns; pos++) {
        lcdState.characters[pos] = whitespace;
      }
      updateCharacterBuffer(
        "",
        0,
        lcdState.columns * lcdState.rows,
        lcdState.columns,
        lcdState.rows,
        TextAlignment.Left,
        " "
      );
    }

    if (columns !== lcdState.columns || rows !== lcdState.rows) {
      return;
    }

    const fillCharacter =
      pad.length > 0 ? pad.charCodeAt(0) : " ".charCodeAt(0);

    let endPosition = offset + length;
    if (endPosition > lcdState.columns * lcdState.rows) {
      endPosition = lcdState.columns * lcdState.rows;
    }
    let lcdPos = offset;

    // Add padding at the beginning
    let paddingEnd = offset;

    if (alignment === TextAlignment.Right) {
      paddingEnd = endPosition - text.length;
    }
    else if (alignment === TextAlignment.Center) {
      paddingEnd = offset + Math.idiv(endPosition - offset - text.length,2);
    }
    
    while (lcdPos < paddingEnd) {
      if (lcdState.characters[lcdPos] != fillCharacter) {
        lcdState.characters[lcdPos] = fillCharacter;
        lcdState.lineNeedsUpdate |= (1 << Math.idiv(lcdPos, lcdState.columns))
      }
      lcdPos++;
    }


    // Copy the text
    let textPosition = 0;
    while (lcdPos < endPosition && textPosition < text.length) {

      if (lcdState.characters[lcdPos] != text.charCodeAt(textPosition)) {
        lcdState.characters[lcdPos] = text.charCodeAt(textPosition);
        lcdState.lineNeedsUpdate |= (1 << Math.idiv(lcdPos, lcdState.columns))
      }
      lcdPos++;
      textPosition++;
    }

    // Add padding at the end
    while (lcdPos < endPosition) {
      if (lcdState.characters[lcdPos] != fillCharacter) {
        lcdState.characters[lcdPos] = fillCharacter;
        lcdState.lineNeedsUpdate |= (1 << Math.idiv(lcdPos, lcdState.columns))
      }
      lcdPos++;
    }
  }

  function sendLine(line: number): void {
    setCursor(line, 0);

    for (let position = lcdState.columns * line; position < lcdState.columns * (line + 1); position++) {
      sendData(lcdState.characters[position]);
    }
  }

  function refreshDisplay() {
    if (!lcdState) {
      return;
    }
    lcdState.refreshIntervalId = undefined

    for (let i = 0; i < lcdState.rows; i++) {
      if (lcdState.lineNeedsUpdate & 1 << i) {
        lcdState.lineNeedsUpdate &= ~(1 << i)
        sendLine(i)
      }
    }
  }

  function toAlignment(option?: TextOption): TextAlignment {
    if (
      option === TextOption.AlignRight ||
      option === TextOption.PadWithZeros
    ) {
      return TextAlignment.Right;
    } else if (option === TextOption.AlignLeft) {
      return TextAlignment.Left;
    } else {
      return TextAlignment.Center;
    }
  }

  function toPad(option?: TextOption): string {
    if (option === TextOption.PadWithZeros) {
      return "0";
    } else {
      return " ";
    }
  }

  /**
   * Displays a text on a LCD1602 in the given position range.
   * The text will be cropped if it is longer than the provided length.
   * If there is space left, it will be filled with pad characters.
   * @param text the text to show, eg: "MakerBit"
   * @param startPosition the start position on the LCD, [1 - 32]
   * @param length the maximum space used on the LCD, eg: 16
   * @param option configures padding and alignment, eg: TextOption.Left
   */
  //% subcategory="LCD1602"
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
      startPosition-1,
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
  //% subcategory="LCD1602"
  //% blockId="makerbit_lcd_clear_1602" block="LCD1602 clear display"
  //% weight=89
  export function clearLcd1602(): void {
    showStringOnLcd1602("", 1, 32);
  }

  /**
   * Displays a text on a LCD2004 in the given position range.
   * The text will be cropped if it is longer than the provided length.
   * If there is space left, it will be filled with pad characters.
   * @param text the text to show, eg: "MakerBit"
   * @param startPosition the start position on the LCD, [1 - 80]
   * @param length the maximum space used on the LCD, eg: 20
   * @param option configures padding and alignment, eg: TextOption.Left
   */
  //% subcategory="LCD2004"
  //% blockId="makerbit_lcd_show_string_on_2004"
  //% block="LCD2004 show %text | at position %startPosition=makerbit_lcd_position_2004 with length %length || and %option"
  //% text.shadowOptions.toString=true
  //% length.min=1 length.max=80 length.fieldOptions.precision=1
  //% expandableArgumentMode="toggle"
  //% inlineInputMode="inline"
  //% weight=80
  export function showStringOnLcd2004(
    text: string,
    startPosition: number,
    length: number,
    option?: TextOption
  ): void {
    updateCharacterBuffer(
      text,
      startPosition-1,
      length,
      20,
      4,
      toAlignment(option),
      toPad(option)
    );
  }

  /**
   * Clears the LCD2004 completely.
   */
  //% subcategory="LCD2004"
  //% blockId="makerbit_lcd_clear_2004" block="LCD2004 clear display"
  //% weight=79
  export function clearLcd2004(): void {
    showStringOnLcd2004("", 1, 80);
  }

  /**
   * Turns a LCD position into a number.
   * @param pos the LCD position, eg: LcdPosition1602.Pos1
   */
  //% subcategory="LCD1602"
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
   * @param pos the LCD position, eg: LcdPosition2004.Pos1
   */
  //% subcategory="LCD2004"
  //% blockId=makerbit_lcd_position_2004
  //% block="%pos"
  //% pos.fieldEditor="gridpicker"
  //% pos.fieldOptions.columns=20
  //% blockHidden=true
  export function position2004(pos: LcdPosition2004): number {
    return pos;
  }

  /**
   * Enables or disables the backlight of the LCD.
   * @param backlight new state of backlight, eg: LcdBacklight.Off
   */
  //% subcategory="LCD1602"
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
  //% subcategory="LCD1602"
  //% blockId="makerbit_lcd_set_address" block="connect LCD at I2C address %i2cAddress"
  //% i2cAddress.min=0 i2cAddress.max=127
  //% weight=70
  export function connectLcd(i2cAddress: number): void {

    if (lcdState && lcdState.i2cAddress == i2cAddress) {
      return;
    }

    if (0 === pins.i2cReadNumber(i2cAddress, NumberFormat.Int8LE, false)) {
      return;
    }

    if (lcdState && lcdState.refreshIntervalId) {
      control.clearInterval(lcdState.refreshIntervalId, control.IntervalMode.Timeout)
      lcdState.refreshIntervalId = undefined
    }

    lcdState = {
      i2cAddress: i2cAddress,
      backlight: LcdBacklight.On,
      columns: 0,
      rows: 0,
      characters: undefined,
      lineNeedsUpdate: 0,
      refreshIntervalId: undefined,
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
    const LCD_2LINE = 0x08; // >= 2 lines
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
  //% subcategory="LCD1602"
  //% blockId="makerbit_lcd_is_connected" block="LCD is connected"
  //% weight=69
  export function isLcdConnected(): boolean {
    return !!lcdState || connect();
  }
}
