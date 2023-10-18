import cssOtherItems from "../render random product.module.scss";
import cssProduct from "../Product.module.scss";

import { durationSongs } from "./Duration Songs"
export function playSong() {
    const boxVoices = document.querySelector(`.${cssProduct.ProDucts__box_voices_slider}`)
    const audio = boxVoices.querySelector(`audio`)
    let input = boxVoices.querySelector('input')
    const img = document.querySelector(`.${cssProduct.ProDucts__img_disk}`).querySelector('img')
    const buttonPlay = document.querySelector(`.${cssProduct.ProDucts_control_play}`)
    const buttonPause = document.querySelector(`.${cssProduct.ProDucts_control_pouse}`)
    let loopSongs = document.querySelector(`.${cssProduct.ProDucts_control_repeat}`)
    audio.addEventListener("timeupdate", () => {
        input.value = (audio.currentTime / audio.duration) * 100



    })

    if (!img.matches(`.${cssProduct.turnDisk}`)) {
        audio.play()
        img.classList.remove(`${cssProduct.pauseDisk}`)
        img.classList.add(`${cssProduct.turnDisk}`)
        buttonPlay.style.display = "none"
        buttonPause.style.display = "block"
        durationSongs()
    } else {
        audio.play()
        img.classList.remove(`${cssProduct.pauseDisk}`)
        img.classList.add(`${cssProduct.turnDisk}`)
        buttonPlay.style.display = "none"
        buttonPause.style.display = "block"
        durationSongs()
    }
    if (Math.floor((audio.duration / 60)) + Math.floor((audio.duration % 60)) ==
        Math.floor((audio.currentTime / 60)) + Math.floor((audio.currentTime % 60))) {
        audio.pause()
        img.classList.remove(`${cssProduct.pauseDisk}`)
        img.classList.add(`${cssProduct.turnDisk}`)
        buttonPlay.style.display = "none"
        buttonPause.style.display = "block"
        durationSongs()
    }
    if (!loopSongs.matches('' + cssProduct.loopSongs)) {
        audio.addEventListener("ended", () => {
            const tagItems = document.querySelector(`.${cssOtherItems.linkItems}`)
            window.location = `${tagItems.href}`;
        })
    }
}