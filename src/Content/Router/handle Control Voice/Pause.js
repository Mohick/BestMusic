import cssProduct from "../Product.module.scss";

export function pauseSong() {
    const boxVoices = document.querySelector(`.${cssProduct.ProDucts__box_voices_slider}`)
    const audio = boxVoices.querySelector(`audio`)
    const img = document.querySelector(`.${cssProduct.ProDucts__img_disk}`).querySelector('img')
    const buttonPlay = document.querySelector(`.${cssProduct.ProDucts_control_play}`)
    const buttonPause = document.querySelector(`.${cssProduct.ProDucts_control_pouse}`)

    if (img.matches(`.${cssProduct.turnDisk}`)) {
        audio.pause()
        img.classList.add(`${cssProduct.pauseDisk}`)
         
        buttonPlay.style.display = "block"
        buttonPause.style.display = "none"
    }
}