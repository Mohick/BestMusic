import cssPages from "../Pages ProDucts.module.scss"

export function setUnLike(valueLike) {
    let taglike = document.querySelector(`.${cssPages.ProDucts_control_likeflautLike}`).querySelector('span')
    return taglike.innerHTML = valueLike
   
}