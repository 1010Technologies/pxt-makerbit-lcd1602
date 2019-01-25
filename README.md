# MakerBit LCD1602

[![Build Status](https://travis-ci.org/1010Technologies/pxt-makerbit-mp3.svg?branch=master)](https://travis-ci.org/1010Technologies/pxt-makerbit-mp3)

MakeCode extension for I2C LCD 1602 displays.

## MakerBit Board

The MakerBit connects to the BBC micro:bit to provide easy connections to a wide variety of sensors, actuators and other components, for example a LCD display.

http://makerbit.com/

| ![MakerBit](https://github.com/1010Technologies/pxt-makerbit/raw/master/MakerBit.png "MakerBit") | ![MakerBit+R](https://github.com/1010Technologies/pxt-makerbit/raw/master/MakerBit+R.png "MakerBit+R") |
| :----------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------: |
|                                            _MakerBit_                                            |                                   _MakerBit+R with motor controller_                                   |

## LCD

Use an I2C LCD 1602 to display numbers and text.

### LCD Example

```blocks
makerbit.connectLcd(39)
makerbit.setLcdBacklight(LcdBacklight.Off)
makerbit.showStringOnLcd("MakerBit", 0)
makerbit.showNumberOnLcd(42, 16)
basic.pause(2000)
makerbit.clearLcd()
```

## License

Licensed under the MIT License (MIT). See LICENSE file for more details.

## Supported targets

- for PXT/microbit
- for PXT/calliope
