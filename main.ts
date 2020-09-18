let voltageP0 = 0
basic.forever(function () {
    voltageP0 = pins.analogReadPin(AnalogPin.P0)
    led.plotBarGraph(
    voltageP0,
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(voltageP0)
    }
})
