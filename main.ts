function servo (angle: number) {
    pulse = Math.round(Math.map(angle, 0, 360, 500, 2500))
    pins.servoSetPulse(AnalogPin.P1, pulse)
}
input.onButtonPressed(Button.A, function () {
    basic.showNumber(test_value)
})
input.onButtonPressed(Button.AB, function () {
    GeekServo5kg.setWuKongGeekServo5kSpeed(GeekServo5kg.ServoList.S0, 100)
    test_value = -110
    while (test_value < 100) {
        test_value += 10
        GeekServo5kg.setWuKongGeekServo5kSpeed(GeekServo5kg.ServoList.S0, test_value)
        basic.pause(200)
    }
    GeekServo5kg.setWuKongGeekServo5kAngle(GeekServo5kg.ServoList.S0, 0)
    GeekServo5kg.setGeekServo5kAngle(GeekServo5kg.PortList.P1, 0)
})
function continuum_servo (speed: number) {
    pulse = Math.round(Math.map(speed, -100, 100, 3000, 5000))
    pins.servoSetPulse(AnalogPin.P1, pulse)
}
input.onButtonPressed(Button.B, function () {
    test_value += 10
    basic.showNumber(test_value)
    GeekServo5kg.testWuKong(GeekServo5kg.ServoList.S0, test_value)
})
let pulse = 0
let test_value = 0
basic.showIcon(IconNames.Heart)
GeekServo5kg.setGeekServo5kAngle(GeekServo5kg.PortList.P1, 0)
test_value = 240
basic.forever(function () {
	
})
