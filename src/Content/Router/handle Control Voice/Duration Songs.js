import cssPage from "../Pages ProDucts.module.scss"

export function durationSongs() {

    const boxVoices = document.querySelector(`.${cssPage.ProDucts__box_voices_slider}`)
    const audio = boxVoices.querySelector(`audio`)

    let currentTimeVoice = document.querySelector(`.${cssPage.ProDucts__box_voices_currentTimes}`)
    let durationVoice = document.querySelector(`.${cssPage.ProDucts__box_voices_duration}`)
    let minutesVoice = Math.floor((audio.duration / 60))
    let secondsVoice = Math.floor((audio.duration % 60))
    if (durationVoice) {
        let delfaut = "0"
        if (String(minutesVoice).length >= 2) {
            durationVoice.innerHTML = minutesVoice + ":" + secondsVoice
        } else {
            durationVoice.innerHTML = delfaut + minutesVoice + ":" + secondsVoice
        }
    }
    audio.addEventListener("timeupdate", () => {
        let minutesVoice = Math.floor((audio.currentTime / 60))
        let secondsVoice = Math.floor((audio.currentTime % 60))
        
        if (minutesVoice < 10) minutesVoice = "0" + minutesVoice;
        if (secondsVoice < 10) secondsVoice = "0" + secondsVoice;
        var time = minutesVoice + ":" + secondsVoice;

        currentTimeVoice.innerHTML = time;
    })
}