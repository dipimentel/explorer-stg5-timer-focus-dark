import { elements } from "./elements.js"
import { Controls } from "./controls.js"
import { Timer } from "./timer.js"
import { Sounds } from "./sounds.js"
import { Events } from "./events.js"

const sounds = Sounds(elements)

const timer = Timer({
    elements,
    sounds,
})

const controls = Controls({
    elements,
    timer,
})

Events({
    elements,
    controls,
    sounds,
})
