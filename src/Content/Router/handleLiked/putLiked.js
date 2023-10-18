import { json } from "react-router-dom"
import cssLiked from '../liked.module.scss';


import axios from "axios"
export function handlePutLIke(indexPage, page, value, like) {
    const tagParents = page.parentElement
    // Box Liked defaults 
    let likedDefault = tagParents.querySelector(`.${cssLiked.ProDucts_control_likeflautLike}`)
    // Box Liked 
    let liked = tagParents.querySelector(`.${cssLiked.ProDucts_control_like}`)

    const config = {
        headers: {
            "Content-Type": "application/json"
        },
        timeout: 0
    }
    const url = `http://127.0.0.1:8000/upDateDiscover/${indexPage}`

    value.like = like
    
    if (likedDefault.matches("." + cssLiked.showLIked)) {
        
        axios.patch(url, value, config)
            .catch(error => {
                // console.Error("putLiked.js");

            });
    } else if (liked.matches("." + cssLiked.showLIked)) {
        

        axios.patch(url, value, config)
            .catch(error => {
                // console.Error("putLiked.js");
            });
    }

} 