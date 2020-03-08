function setChar (char: string) {
    string = "" + string + char
    basic.showString(char)
}
input.onGesture(Gesture.TiltRight, function () {
    setChar("B")
})
input.onGesture(Gesture.TiltLeft, function () {
    setChar("C")
})
input.onGesture(Gesture.ScreenUp, function () {
    setChar("A")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString(string)
})
// Reset
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    string = ""
})
input.onGesture(Gesture.ScreenDown, function () {
    setChar("D")
})
input.onButtonPressed(Button.A, function () {
    radio.sendString(string)
})
let string = ""
radio.setGroup(30)
string = ""
basic.showIcon(IconNames.Heart)
