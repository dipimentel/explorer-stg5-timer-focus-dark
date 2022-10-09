export function Events({
    elements,
    controls,
    sounds,
}) {

    // Controls
    elements.buttonPlay.addEventListener("click", function() {
        controls.play()
    })
    
    elements.buttonStop.addEventListener("click", function() {
        controls.stop()
    })
    
    elements.buttonIncrease.addEventListener("click", function() {
        controls.increaseMinutes()
    })
    
    elements.buttonDecrease.addEventListener("click", function() {
        controls.decreaseMinutes()
    })

    // Sounds
    elements.buttonSoundFlorest.addEventListener("click", function() {
        let isPlaying = elements.buttonSoundFlorest.classList.contains("selected")
        if ( isPlaying ) {
            sounds.stopSounds()
            controls.unselectButtonsSounds()
        } else {
            sounds.stopSounds()
            controls.unselectButtonsSounds()
            sounds.setVolumeAndPlay(elements.volFlorest, sounds.bgSoundFlorest, 50)
            elements.buttonSoundFlorest.classList.add("selected")
        }
    })

    elements.buttonSoundRain.addEventListener("click", function() {
        let isPlaying = elements.buttonSoundRain.classList.contains("selected")
        if ( isPlaying ) {
            sounds.stopSounds()
            controls.unselectButtonsSounds()
        } else {
            sounds.stopSounds()
            controls.unselectButtonsSounds()
            sounds.setVolumeAndPlay(elements.volRain, sounds.bgSoundRain, 50)
            elements.buttonSoundRain.classList.add("selected")
        }
    })

    elements.buttonSoundCoffeeShop.addEventListener("click", function() {
        let isPlaying = elements.buttonSoundCoffeeShop.classList.contains("selected")
        if ( isPlaying ) {
            sounds.stopSounds()
            controls.unselectButtonsSounds()
        } else {
            sounds.stopSounds()
            controls.unselectButtonsSounds()
            sounds.setVolumeAndPlay(elements.volCoffeeShop, sounds.bgSoundCoffeeShop, 50)
            elements.buttonSoundCoffeeShop.classList.add("selected")
        }
    })

    elements.buttonSoundFireplace.addEventListener("click", function() {
        let isPlaying = elements.buttonSoundFireplace.classList.contains("selected")
        if ( isPlaying ) {
            sounds.stopSounds()
            controls.unselectButtonsSounds()
        } else {
            sounds.stopSounds()
            controls.unselectButtonsSounds()
            sounds.setVolumeAndPlay(elements.volFireplace, sounds.bgSoundFireplace, 50)
            elements.buttonSoundFireplace.classList.add("selected")
        }
    })

    // Volume Sounds
    elements.volFlorest.addEventListener("input", (e) => {
        sounds.bgSoundFlorest.volume = e.currentTarget.value / 100
    })

    elements.volRain.addEventListener("input", (e) => {
        sounds.bgSoundRain.volume = e.currentTarget.value / 100
    })

    elements.volCoffeeShop.addEventListener("input", (e) => {
        sounds.bgSoundCoffeeShop.volume = e.currentTarget.value / 100
    })

    elements.volFireplace.addEventListener("input", (e) => {
        sounds.bgSoundFireplace.volume = e.currentTarget.value / 100
    })

    // Light-Dark Mode
    elements.buttonLightMode.addEventListener("click", () => {
        controls.alternateColorMode()
    })

    elements.buttonDarkMode.addEventListener("click", () => {
        controls.alternateColorMode()
    })
}

