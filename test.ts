/**
 * LCD tests
 */

makerbit.connectLcd(39);
makerbit.showStringOnLcd("Hello world", 0, 15);
makerbit.showNumberOnLcd(42, 16, 2);
makerbit.clearLcd();
makerbit.setLcdBacklight(LcdBacklight.On);
const pos: number = makerbit.position(LcdPosition.P0);
const isLcdConnected: boolean = makerbit.isLcdConnected();
