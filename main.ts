input.onButtonPressed(Button.A, function () {
    timer = randint(10, 20)
    basic.showIcon(IconNames.Target)
    while (timer > 0) {
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(1000)
        timer += -1
        basic.showIcon(IconNames.Square)
        basic.pause(1000)
        timer += -1
    }
    basic.showIcon(IconNames.Chessboard)
    for (let index = 0; index < 10; index++) {
        music.playTone(698, music.beat(BeatFraction.Quarter))
        basic.pause(200)
    }
})
let timer = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
