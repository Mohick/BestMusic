
import cssPages from "../Pages ProDucts.module.scss"

export function volume(input) {
    let audio = document.querySelector(`audio`)
    let iconMaxVolume = document.querySelector(`.${cssPages.ProDucts_control_volume_max}`)
    let iconMediumVolume = document.querySelector(`.${cssPages.ProDucts_control_volume_medium}`)

    let iconMuteVolume = document.querySelector(`.${cssPages.ProDucts_control_volume_mute}`)


    audio.volume = input.value
    if (input.value >= 0.8) {
        iconMaxVolume.classList.add(cssPages.modeSpeaker)
        iconMediumVolume.classList.remove(cssPages.modeSpeaker)
        iconMuteVolume.classList.remove(cssPages.modeSpeaker)
    } else if (input.value <= 0.7 && input.value >= 0.1) {
        iconMaxVolume.classList.remove(cssPages.modeSpeaker)
        iconMediumVolume.classList.add(cssPages.modeSpeaker)
        iconMuteVolume.classList.remove(cssPages.modeSpeaker)
    } else if (input.value == 0) {
        iconMaxVolume.classList.remove(cssPages.modeSpeaker)
        iconMediumVolume.classList.remove(cssPages.modeSpeaker)
        iconMuteVolume.classList.add(cssPages.modeSpeaker)
    }
}