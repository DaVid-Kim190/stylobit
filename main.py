def playSound(num: number):
    if vactivatedState == 1:
        for index in range(11):
            music.ring_tone(num + index)
            basic.pause(1)
        for index2 in range(11):
            music.ring_tone(num - index2)
            basic.pause(1)
    else:
        music.ring_tone(num)
vactivatedState = 0
led.enable(False)
music.set_built_in_speaker_enabled(True)
music.set_volume(255)
pins.set_audio_pin(AnalogPin.P0)
pins.set_pull(DigitalPin.P1, PinPullMode.PULL_UP)
pins.set_pull(DigitalPin.P2, PinPullMode.PULL_UP)
pins.set_pull(DigitalPin.P3, PinPullMode.PULL_UP)
pins.set_pull(DigitalPin.P4, PinPullMode.PULL_UP)
pins.set_pull(DigitalPin.P5, PinPullMode.PULL_UP)
pins.set_pull(DigitalPin.P6, PinPullMode.PULL_UP)
pins.set_pull(DigitalPin.P7, PinPullMode.PULL_UP)
pins.set_pull(DigitalPin.P8, PinPullMode.PULL_UP)
pins.set_pull(DigitalPin.P11, PinPullMode.PULL_UP)
pins.set_pull(DigitalPin.P12, PinPullMode.PULL_UP)
pins.set_pull(DigitalPin.P13, PinPullMode.PULL_UP)
pins.set_pull(DigitalPin.P14, PinPullMode.PULL_UP)
vbuttonPushCounter = 1
vbuttonState = 1
vlastButtonState = 1
octaveMultiplier = 1

def on_forever():
    if pins.digital_read_pin(DigitalPin.P1) == 0:
        playSound(262 * octaveMultiplier)
    elif pins.digital_read_pin(DigitalPin.P2) == 0:
        playSound(277 * octaveMultiplier)
    elif pins.digital_read_pin(DigitalPin.P3) == 0:
        playSound(294 * octaveMultiplier)
    elif pins.digital_read_pin(DigitalPin.P4) == 0:
        playSound(330 * octaveMultiplier)
    elif pins.digital_read_pin(DigitalPin.P5) == 0:
        playSound(349 * octaveMultiplier)
    elif pins.digital_read_pin(DigitalPin.P6) == 0:
        playSound(392 * octaveMultiplier)
    elif pins.digital_read_pin(DigitalPin.P7) == 0:
        playSound(440 * octaveMultiplier)
    elif pins.digital_read_pin(DigitalPin.P8) == 0:
        playSound(494 * octaveMultiplier)
    else:
        music.ring_tone(0)
basic.forever(on_forever)

def on_forever2():
    global vbuttonState, vbuttonPushCounter, vactivatedState, vlastButtonState
    vbuttonState = pins.digital_read_pin(DigitalPin.P11)
    if vbuttonState != vlastButtonState:
        if vbuttonState == 0:
            vbuttonPushCounter += 1
        basic.pause(100)
        if vbuttonPushCounter / Math.floor(vbuttonPushCounter / 2) == 2:
            vactivatedState = 1
        else:
            vactivatedState = 0
    vlastButtonState = vbuttonState
basic.forever(on_forever2)

def on_forever3():
    global octaveMultiplier
    if pins.digital_read_pin(DigitalPin.P12) == 0:
        octaveMultiplier = 0.5
    elif pins.digital_read_pin(DigitalPin.P13) == 0:
        octaveMultiplier = 1
    elif pins.digital_read_pin(DigitalPin.P14) == 0:
        octaveMultiplier = 2
    else:
        octaveMultiplier = octaveMultiplier
basic.forever(on_forever3)
