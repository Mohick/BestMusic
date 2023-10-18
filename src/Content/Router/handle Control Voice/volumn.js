
import cssProduct from "../Product.module.scss";


export function volume(input) {
    let audio = document.querySelector(`audio`)
    let iconMaxVolume = document.querySelector(`.${cssProduct.ProDucts_control_volume_max}`)
    let iconMediumVolume = document.querySelector(`.${cssProduct.ProDucts_control_volume_medium}`)

    let iconMuteVolume = document.querySelector(`.${cssProduct.ProDucts_control_volume_mute}`)


    audio.volume = input.value
    if (input.value >= 0.8) {
        iconMaxVolume.classList.add(cssProduct.modeSpeaker)
        iconMediumVolume.classList.remove(cssProduct.modeSpeaker)
        iconMuteVolume.classList.remove(cssProduct.modeSpeaker)
    } else if (input.value <= 0.7 && input.value >= 0.1) {
        iconMaxVolume.classList.remove(cssProduct.modeSpeaker)
        iconMediumVolume.classList.add(cssProduct.modeSpeaker)
        iconMuteVolume.classList.remove(cssProduct.modeSpeaker)
    } else if (input.value == 0) {
        iconMaxVolume.classList.remove(cssProduct.modeSpeaker)
        iconMediumVolume.classList.remove(cssProduct.modeSpeaker)
        iconMuteVolume.classList.add(cssProduct.modeSpeaker)
    }
}