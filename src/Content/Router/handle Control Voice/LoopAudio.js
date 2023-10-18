import cssProduct from "../Product.module.scss";

import { playSong } from "./play"

export function loopAudio(e) {

    const audio = document.querySelector(`audio`)
    if (!audio.loop) {
        audio.loop = true
        e.classList.add(`${cssProduct.loopSongs}`)
        playSong()

    } else {
        audio.loop = false
        e.classList.remove(`${cssProduct.loopSongs}`)
        playSong()

    }
}