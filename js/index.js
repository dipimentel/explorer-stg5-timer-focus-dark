import { elements } from "./elements.js"
import { Controls } from "./controls.js"
import { Timer } from "./timer.js"
import { Sounds } from "./sounds.js"
import { Events } from "./events.js"

const timer = Timer({
    elements,
})

const controls = Controls({
    elements,
    timer,
})

const sounds = Sounds(elements)

Events({
    elements,
    controls,
    sounds,
})
