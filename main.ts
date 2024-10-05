function zapniPredvolene () {
    mod = 1
    horniPasek.showRainbow(1, 360)
    dolniPasek.showRainbow(1, 360)
    basic.showIcon(IconNames.Happy)
}
makerbit.onIrDatagram(function () {
    kodOvladace = convertToText(makerbit.irDatagram())
    if (kodOvladace == "0x00FFA25D") {
        zapniPredvolene()
    } else if (kodOvladace == "0x00FF629D") {
        sekundaDolniPasek = 0
        sekundaHorniPasek = 0
        mod = 2
        basic.showIcon(IconNames.Ghost)
    }
})
let sekundaHorniPasek = 0
let sekundaDolniPasek = 0
let kodOvladace = ""
let mod = 0
let dolniPasek: neopixel.Strip = null
let horniPasek: neopixel.Strip = null
basic.showIcon(IconNames.Happy)
horniPasek = neopixel.create(DigitalPin.P1, 71, NeoPixelMode.RGB)
horniPasek.setBrightness(255)
let horniLevaPulka = horniPasek.range(0, 35)
let horniPravaPulka = horniPasek.range(35, 36)
dolniPasek = neopixel.create(DigitalPin.P0, 71, NeoPixelMode.RGB)
dolniPasek.setBrightness(255)
let dolniLevaTretina = dolniPasek.range(0, 24)
let dolniStredniTretina = dolniPasek.range(24, 24)
let dolniPravaTretina = dolniPasek.range(48, 23)
makerbit.connectIrReceiver(DigitalPin.P2, IrProtocol.NEC)
zapniPredvolene()
basic.forever(function () {
    if (mod == 2) {
        if (sekundaHorniPasek % 4 == 0) {
            horniLevaPulka.showColor(neopixel.colors(NeoPixelColors.Black))
            horniPravaPulka.showColor(neopixel.colors(NeoPixelColors.Black))
        } else if (sekundaHorniPasek % 4 == 1) {
            horniLevaPulka.showColor(neopixel.colors(NeoPixelColors.Red))
            horniPravaPulka.showColor(neopixel.colors(NeoPixelColors.Black))
        } else if (sekundaHorniPasek % 4 == 2) {
            horniLevaPulka.showColor(neopixel.colors(NeoPixelColors.Red))
            horniPravaPulka.showColor(neopixel.colors(NeoPixelColors.Blue))
        } else {
            horniLevaPulka.showColor(neopixel.colors(NeoPixelColors.Black))
            horniPravaPulka.showColor(neopixel.colors(NeoPixelColors.Blue))
        }
        basic.pause(1000)
        sekundaHorniPasek += 1
        if (sekundaHorniPasek > 4) {
            sekundaHorniPasek = 1
        }
    }
})
basic.forever(function () {
    if (mod == 2) {
        if (sekundaDolniPasek % 6 == 0) {
            dolniLevaTretina.showColor(neopixel.colors(NeoPixelColors.Black))
            dolniStredniTretina.showColor(neopixel.colors(NeoPixelColors.Black))
            dolniPravaTretina.showColor(neopixel.colors(NeoPixelColors.Black))
        } else if (sekundaDolniPasek % 6 == 1) {
            dolniLevaTretina.showColor(neopixel.colors(NeoPixelColors.Red))
            dolniStredniTretina.showColor(neopixel.colors(NeoPixelColors.Black))
            dolniPravaTretina.showColor(neopixel.colors(NeoPixelColors.Black))
        } else if (sekundaDolniPasek % 6 == 2) {
            dolniLevaTretina.showColor(neopixel.colors(NeoPixelColors.Red))
            dolniStredniTretina.showColor(neopixel.colors(NeoPixelColors.Blue))
            dolniPravaTretina.showColor(neopixel.colors(NeoPixelColors.Black))
        } else if (sekundaDolniPasek % 6 == 3) {
            dolniLevaTretina.showColor(neopixel.colors(NeoPixelColors.Red))
            dolniStredniTretina.showColor(neopixel.colors(NeoPixelColors.Blue))
            dolniPravaTretina.showColor(neopixel.colors(NeoPixelColors.White))
        } else if (sekundaDolniPasek % 6 == 4) {
            dolniLevaTretina.showColor(neopixel.colors(NeoPixelColors.Black))
            dolniStredniTretina.showColor(neopixel.colors(NeoPixelColors.Blue))
            dolniPravaTretina.showColor(neopixel.colors(NeoPixelColors.White))
        } else if (sekundaDolniPasek % 6 == 5) {
            dolniLevaTretina.showColor(neopixel.colors(NeoPixelColors.Black))
            dolniStredniTretina.showColor(neopixel.colors(NeoPixelColors.Black))
            dolniPravaTretina.showColor(neopixel.colors(NeoPixelColors.White))
        } else {
            dolniLevaTretina.showColor(neopixel.colors(NeoPixelColors.Black))
            dolniStredniTretina.showColor(neopixel.colors(NeoPixelColors.Black))
            dolniPravaTretina.showColor(neopixel.colors(NeoPixelColors.White))
        }
        basic.pause(1000)
        sekundaDolniPasek += 1
        if (sekundaDolniPasek > 6) {
            sekundaDolniPasek = 1
        }
    }
})
