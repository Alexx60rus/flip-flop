function color () {
    robotbit.rgb().showColor(neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
}
function foot () {
    x = 180
    robotbit.GeekServo2KG(robotbit.Servos.S1, 180)
    robotbit.GeekServo2KG(robotbit.Servos.S2, 180)
    robotbit.GeekServo2KG(robotbit.Servos.S3, 180)
    robotbit.GeekServo2KG(robotbit.Servos.S4, 180)
}
let x = 0
foot()
basic.forever(function () {
    while (x <= 260) {
        robotbit.GeekServo2KG(robotbit.Servos.S2, x)
        robotbit.GeekServo2KG(robotbit.Servos.S3, 340)
        x += 8
        basic.pause(20)
    }
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    robotbit.GeekServo2KG(robotbit.Servos.S3, 180)
    basic.pause(400)
    foot()
    while (x >= 90) {
        robotbit.GeekServo2KG(robotbit.Servos.S2, 20)
        robotbit.GeekServo2KG(robotbit.Servos.S3, x)
        x += -8
        basic.pause(20)
    }
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    robotbit.GeekServo2KG(robotbit.Servos.S2, 180)
    basic.pause(400)
    foot()
})
