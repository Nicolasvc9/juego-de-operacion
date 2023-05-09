input.onButtonPressed(Button.A, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showString("YA!")
    Start33 = 1
})
let Start33 = 0
Start33 = 0
basic.forever(function () {
    if (Start33 == 1) {
        if (input.pinIsPressed(TouchPin.P0)) {
            music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
            basic.showIcon(IconNames.Skull)
            basic.pause(100)
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
        }
    }
})
