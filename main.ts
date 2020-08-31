let temperatura = 0
basic.showString("Remoto")
radio.setGroup(20)
basic.forever(function () {
    temperatura = input.temperature()
    radio.sendNumber(temperatura)
    basic.showNumber(temperatura)
    basic.pause(1000)
})
