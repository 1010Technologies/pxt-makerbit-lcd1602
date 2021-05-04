/**
 * LCD tests
 */

makerbit.showStringOnLcd1602("Hello world", 1, 16);
makerbit.showStringOnLcd1602("Hello world", 1, 16, TextOption.AlignLeft);
makerbit.showStringOnLcd1602("Hello world", 1, 16, TextOption.AlignCenter);
makerbit.showStringOnLcd1602("Hello world", 1, 16, TextOption.AlignRight);
makerbit.clearLcd1602();
const pos1602: number = makerbit.position1602(LcdPosition1602.Pos1);
