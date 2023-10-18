import cssLiked from '../liked.module.scss';


export function setLike(valueLike) {
    let taglike = document.querySelector(`.${cssLiked.ProDucts_control_like}`).querySelector('span')
    return taglike.innerHTML = valueLike
   
}