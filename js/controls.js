export function Controls({
    elements,
    timer,
}) {


    function increaseMinutes() {
        if ( timer.timerIsOff() ) {

            let minutes = Number(elements.timerMinutes.textContent)
            if (minutes <= 85 ) {
                minutes += 5
                timer.updateDisplay(minutes, 0)
                timer.updateMinutes(minutes)
            }

        }
    }

    function decreaseMinutes() {
        if ( timer.timerIsOff() ) {

            let minutes = Number(elements.timerMinutes.textContent)
            if (minutes >= 10) {
                minutes -= 5
                timer.updateDisplay(minutes, 0)
                timer.updateMinutes(minutes)
            }

        }
    }

    function play() {
        if ( timer.timerIsOff() ) {
            timer.countdown()
            timer.toggleActiveControls()
        }
    }

    function stop() {
        if ( !timer.timerIsOff() ) {
            timer.reset()
        }

    }

    function unselectButtonsSounds() {
        elements.buttonSoundFlorest.classList.remove("selected")
        elements.buttonSoundRain.classList.remove("selected")
        elements.buttonSoundCoffeeShop.classList.remove("selected")
        elements.buttonSoundFireplace.classList.remove("selected")
    }

    function alternateColorMode() {
        elements.buttonLightMode.classList.toggle("inactive")
        elements.buttonDarkMode.classList.toggle("inactive")
        document.body.classList.toggle("dark")
    }


    return {
        increaseMinutes,
        decreaseMinutes,
        play,
        stop,
        unselectButtonsSounds,
        alternateColorMode,
    }
}