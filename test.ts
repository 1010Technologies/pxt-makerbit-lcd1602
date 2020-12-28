/**
 * LCD tests
 */

makerbit.connectLcd(39);
makerbit.showStringOnLcd1602("Hello world", 1, 16);
makerbit.showStringOnLcd1602("Hello world", 1, 16, TextOption.AlignLeft);
makerbit.showStringOnLcd1602("Hello world", 1, 16, TextOption.AlignCenter);
makerbit.showStringOnLcd1602("Hello world", 1, 16, TextOption.AlignRight);
makerbit.showStringOnLcd2004("Hello world", 1, 20);
makerbit.showStringOnLcd2004("9", 1, 20, TextOption.PadWithZeros);
makerbit.clearLcd1602();
makerbit.clearLcd2004();
makerbit.setLcdBacklight(LcdBacklight.On);
const pos1602: number = makerbit.position1602(LcdPosition1602.Pos1);
const pos2004: number = makerbit.position2004(LcdPosition2004.Pos80);
const isLcdConnected: boolean = makerbit.isLcdConnected();
