import cssPages from "../Pages ProDucts.module.scss"


export function setLike(valueLike) {
    let taglike = document.querySelector(`.${cssPages.ProDucts_control_like}`).querySelector('span')
    return taglike.innerHTML = valueLike
   
}