import cssPage from "../Pages ProDucts.module.scss"
export function pauseSong() {
    const boxVoices = document.querySelector(`.${cssPage.ProDucts__box_voices_slider}`)
    const audio = boxVoices.querySelector(`audio`)
    const img = document.querySelector(`.${cssPage.ProDucts__img_disk}`).querySelector('img')
    const buttonPlay = document.querySelector(`.${cssPage.ProDucts_control_play}`)
    const buttonPause = document.querySelector(`.${cssPage.ProDucts_control_pouse}`)

    if (img.matches(`.${cssPage.turnDisk}`)) {
        audio.pause()
        img.classList.add(`${cssPage.pauseDisk}`)
         
        buttonPlay.style.display = "block"
        buttonPause.style.display = "none"
    }
}