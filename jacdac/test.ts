forever(() => {
    modules.makerbitLCD.setLine(0, "time: " + control.millis())
    pause(100)
})