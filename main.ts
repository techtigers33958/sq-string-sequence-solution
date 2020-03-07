/**
 * Reset string
 */
/**
 * Show string for debugging purposes
 */
/**
 * Function to set and show string based on the character
 */
/**
 * Set radio group and reset the string
 */
/**
 * Transmit the saved string when the user presses "A"
 */
// Basic Movements to send different characters.
//
//
// screen up -> "A"
//
//
// tilt left -> "B"
//
//
// screen down -> "C"
//
//
// tilt right -> "D"
function setChar (char: string) {
    string = "" + string + char
    basic.showString(char)
}
input.onGesture(Gesture.TiltRight, function () {
    setChar("D")
})
input.onGesture(Gesture.TiltLeft, function () {
    setChar("B")
})
input.onGesture(Gesture.ScreenUp, function () {
    setChar("A")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString(string)
})
// Reset
input.onButtonPressed(Button.B, function () {
    string = ""
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.ScreenDown, function () {
    setChar("C")
})
input.onButtonPressed(Button.A, function () {
    radio.sendString(string)
})
let string = ""
radio.setGroup(30)
string = ""
basic.showIcon(IconNames.Heart)
