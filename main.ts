function playSound(num: number) {
    if (vactivatedState == 1) {
        for (let index = 0; index < 11; index++) {
            music.ringTone(num + index)
            basic.pause(1)
        }
        for (let index2 = 0; index2 < 11; index2++) {
            music.ringTone(num - index2)
            basic.pause(1)
        }
    } else {
        music.ringTone(num)
    }
    
}

let vactivatedState = 0
led.enable(false)
music.setBuiltInSpeakerEnabled(true)
music.setVolume(255)
pins.setAudioPin(AnalogPin.P0)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
pins.setPull(DigitalPin.P3, PinPullMode.PullUp)
pins.setPull(DigitalPin.P4, PinPullMode.PullUp)
pins.setPull(DigitalPin.P5, PinPullMode.PullUp)
pins.setPull(DigitalPin.P6, PinPullMode.PullUp)
pins.setPull(DigitalPin.P7, PinPullMode.PullUp)
pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
pins.setPull(DigitalPin.P11, PinPullMode.PullUp)
pins.setPull(DigitalPin.P12, PinPullMode.PullUp)
pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
pins.setPull(DigitalPin.P14, PinPullMode.PullUp)
let vbuttonPushCounter = 1
let vbuttonState = 1
let vlastButtonState = 1
let octaveMultiplier = 1
basic.forever(function on_forever() {
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        playSound(262 * octaveMultiplier)
    } else if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        playSound(277 * octaveMultiplier)
    } else if (pins.digitalReadPin(DigitalPin.P3) == 0) {
        playSound(294 * octaveMultiplier)
    } else if (pins.digitalReadPin(DigitalPin.P4) == 0) {
        playSound(330 * octaveMultiplier)
    } else if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        playSound(349 * octaveMultiplier)
    } else if (pins.digitalReadPin(DigitalPin.P6) == 0) {
        playSound(392 * octaveMultiplier)
    } else if (pins.digitalReadPin(DigitalPin.P7) == 0) {
        playSound(440 * octaveMultiplier)
    } else if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        playSound(494 * octaveMultiplier)
    } else {
        music.ringTone(0)
    }
    
})
basic.forever(function on_forever2() {
    
    vbuttonState = pins.digitalReadPin(DigitalPin.P11)
    if (vbuttonState != vlastButtonState) {
        if (vbuttonState == 0) {
            vbuttonPushCounter += 1
        }
        
        basic.pause(100)
        if (vbuttonPushCounter / Math.floor(vbuttonPushCounter / 2) == 2) {
            vactivatedState = 1
        } else {
            vactivatedState = 0
        }
        
    }
    
    vlastButtonState = vbuttonState
})
basic.forever(function on_forever3() {
    
    if (pins.digitalReadPin(DigitalPin.P12) == 0) {
        octaveMultiplier = 0.5
    } else if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        octaveMultiplier = 1
    } else if (pins.digitalReadPin(DigitalPin.P14) == 0) {
        octaveMultiplier = 2
    } else {
        octaveMultiplier = octaveMultiplier
    }
    
})
