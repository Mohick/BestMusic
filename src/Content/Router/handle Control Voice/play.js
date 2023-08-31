import cssPage from "../Pages ProDucts.module.scss"
import { durationSongs } from "./Duration Songs"
export function playSong() {
    const boxVoices = document.querySelector(`.${cssPage.ProDucts__box_voices_slider}`)
    const audio = boxVoices.querySelector(`audio`)
    const img = document.querySelector(`.${cssPage.ProDucts__img_disk}`).querySelector('img')
    const buttonPlay = document.querySelector(`.${cssPage.ProDucts_control_play}`)
    const buttonPause = document.querySelector(`.${cssPage.ProDucts_control_pouse}`)


    if (!img.matches(`.${cssPage.turnDisk}`)) {
        audio.play()
        img.classList.remove(`${cssPage.pauseDisk}`)
        img.classList.add(`${cssPage.turnDisk}`)
        buttonPlay.style.display = "none"
        buttonPause.style.display = "block"
        durationSongs()
    } else {
        audio.play()
        img.classList.remove(`${cssPage.pauseDisk}`)
        img.classList.add(`${cssPage.turnDisk}`)
        buttonPlay.style.display = "none"
        buttonPause.style.display = "block"
        durationSongs()
    }
}