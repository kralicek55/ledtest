input.onSound(DetectedSound.Loud, function () {
	
})
basic.showIcon(IconNames.Chessboard)
let dolniPasek = neopixel.create(DigitalPin.P0, 71, NeoPixelMode.RGB)
let horniPasek = neopixel.create(DigitalPin.P1, 71, NeoPixelMode.RGB)
horniPasek.showRainbow(1, 360)
dolniPasek.showColor(neopixel.colors(NeoPixelColors.Orange))
