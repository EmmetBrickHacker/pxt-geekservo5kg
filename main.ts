input.onButtonPressed(Button.A, function () {
    GeekServo5kg.setGeekServo5kAngle(GeekServo5kg.PortList.P1, test_value)
})
input.onButtonPressed(Button.AB, function () {
    GeekServo5kg.setGeekServo5kAngle(GeekServo5kg.PortList.P1, 0)
    GeekServo5kg.setWuKongGeekServo5kAngle(GeekServo5kg.ServoList.S0, 0)
    GeekServo5kg.setGeekServo5kSpeed(GeekServo5kg.PortList.P1, 0)
})
input.onButtonPressed(Button.B, function () {
    GeekServo5kg.setGeekServo5kSpeed(GeekServo5kg.PortList.P1, test_value)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    GeekServo5kg.setWuKongGeekServo5kAngle(GeekServo5kg.ServoList.S0, test_value)
})
let test_value = 0
test_value = 90
