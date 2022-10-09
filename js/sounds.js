export function Sounds(elements) {

    const bgSoundFlorest = new Audio("./sounds/floresta.mp3")
    const bgSoundRain = new Audio("./sounds/chuva.mp3")
    const bgSoundCoffeeShop = new Audio("./sounds/cafeteria.mp3")
    const bgSoundFireplace = new Audio("./sounds/lareira.mp3")
    const alertTimer = new Audio("./sounds/alert-timer.mp3")

    function stopSounds(slider, music) {
        bgSoundFlorest.pause()
        bgSoundFlorest.currentTime = 0
        elements.volFlorest.value = 0
        elements.volFlorest.disabled = true
        bgSoundRain.pause()
        bgSoundRain.currentTime = 0
        elements.volRain.value = 0
        elements.volRain.disabled = true
        bgSoundCoffeeShop.pause()
        bgSoundCoffeeShop.currentTime = 0
        elements.volCoffeeShop.value = 0
        elements.volCoffeeShop.disabled = true
        bgSoundFireplace.pause()
        bgSoundFireplace.currentTime = 0
        elements.volFireplace.value = 0
        elements.volFireplace.disabled = true
    }

    function setVolumeAndPlay(slider, music, newVol) {
        slider.value = newVol
        music.volume = newVol / 100
        slider.disabled = false
        music.play()
        music.loop = true
    }

    function finishTimerAlert() {
        alertTimer.play()
    }

    return {
        bgSoundFlorest,
        bgSoundRain,
        bgSoundCoffeeShop,
        bgSoundFireplace,
        stopSounds,
        setVolumeAndPlay,
        finishTimerAlert,
    }
}