// serial.writeLine("We are ready to go!")

radio.setGroup(17)

let brightness = 0
let message = "0"

basic.forever(function () {
    for(let i = 0; i < 4; i++) {
        brightness = input.lightLevel()
        message = String.fromCharCode(Math.round(brightness / 26) + 48)

        serial.writeLine(brightness.toString() + ", " + message)
        basic.pause(250)
    }
    radio.sendString(message)
})
