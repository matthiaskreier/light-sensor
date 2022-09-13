serial.writeLine("We are ready to go!")

radio.setGroup(17)

let brightness = 0
let message = "0"

basic.forever(function () {
    // if (input.isGesture(Gesture.TiltLeft)) {
    //     basic.showArrow(ArrowNames.East)
    // }
    // if (input.isGesture(Gesture.TiltRight)) {
    //     basic.showArrow(ArrowNames.West)
    // }
    // serial.writeNumber(5)
    brightness = input.lightLevel()
    serial.writeLine(brightness.toString())
    brightness = Math.round(brightness/26)
    message = String.fromCharCode(brightness + 48)
    // serial.writeLine(message)
    radio.sendString(message)
    basic.pause(1000)
})
