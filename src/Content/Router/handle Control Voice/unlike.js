import cssLiked from '../liked.module.scss';



export function setUnLike(valueLike) {
    let taglike = document.querySelector(`.${cssLiked.ProDucts_control_likeflautLike}`).querySelector('span')
    return taglike.innerHTML = valueLike
   
}