
import cssProduct from "../Product.module.scss";

import { playSong } from "./play"
export function fastForward() {
    const boxVoices = document.querySelector(`.${cssProduct.ProDucts__box_voices_slider}`)
    const audio = boxVoices.querySelector(`audio`)
    let input = boxVoices.querySelector('input')
    var time = audio.duration * (input.value / 100)
    audio.currentTime = time
    audio.addEventListener("timeupdate", () => {
        input.value = (time / audio.duration) * 100
    })


}