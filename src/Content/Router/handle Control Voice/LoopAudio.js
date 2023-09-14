import cssPages from "../Pages ProDucts.module.scss"
import { playSong } from "./play"

export function loopAudio(e) {

    const audio = document.querySelector(`audio`)
    if (!audio.loop) {
        audio.loop = true
        e.classList.add(`${cssPages.loopSongs}`)
        playSong()

    } else {
        audio.loop = false
        e.classList.remove(`${cssPages.loopSongs}`)
        playSong()

    }
}