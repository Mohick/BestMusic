
import cssPage from "../Pages ProDucts.module.scss"
import { playSong } from "./play"
export function fastForward() {
    const boxVoices = document.querySelector(`.${cssPage.ProDucts__box_voices_slider}`)
    const audio = boxVoices.querySelector(`audio`)
    let input = boxVoices.querySelector('input')

    var time = audio.duration * (input.value / 100)
    audio.currentTime = time;
    playSong()
}