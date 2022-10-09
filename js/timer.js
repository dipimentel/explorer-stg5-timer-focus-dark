export function Timer({
    elements,
    sounds,
}) {

    let timerTimeout;
    let minutes = elements.timerMinutes.textContent
    let timerIsOn = false

    function updateDisplay(newMinutes, seconds) {
        elements.timerMinutes.textContent = String(newMinutes).padStart(2, "0")
        elements.timerSeconds.textContent = String(seconds).padStart(2, "0")
    }
    
    function countdown () {
        
        timerIsOn = true
        timerTimeout = setTimeout( function() {

            let minutes = Number(elements.timerMinutes.textContent)
            let seconds = Number(elements.timerSeconds.textContent)
            let isFinish = minutes <= 0 && seconds <= 0

            if ( isFinish ) {
                sounds.finishTimerAlert()
                reset()
                return
            }

            if ( seconds <= 0 ) {
                seconds = 60
                --minutes
            } 
            updateDisplay(minutes, seconds -1)

            countdown()

        }, 1000);
    }

    function reset() {
        clearTimeout(timerTimeout)
        updateDisplay(minutes, 0)
        toggleActiveControls()
        timerIsOn = false
    }

    function timerIsOff() {
        return timerIsOn === false
    }

    function updateMinutes(newMinutes) {
        minutes = newMinutes
    }

    function toggleActiveControls() {
        elements.buttonPlay.classList.toggle("inactive")
        elements.buttonIncrease.classList.toggle("inactive")
        elements.buttonDecrease.classList.toggle("inactive")
    }

    return {
        countdown,
        updateDisplay,
        updateMinutes,
        reset,
        timerIsOff,
        toggleActiveControls,
    }
}