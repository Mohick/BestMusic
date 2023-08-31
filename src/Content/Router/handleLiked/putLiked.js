import { json } from "react-router-dom"
import cssPage from "../Pages ProDucts.module.scss"
import axios from "axios"
export function handlePutLIke(indexPage, value, page, like) {
    const tagParents = value.parentElement
    // Box Liked defaults 
    let likedDefault = tagParents.querySelector(`.${cssPage.ProDucts_control_likeflautLike}`)
    // Box Liked 
    let liked = tagParents.querySelector(`.${cssPage.ProDucts_control_like}`)

    const config = {
        headers: {
            "Content-Type": "application/json"
        },
        timeout: 0
    }
    const url = `http://localhost:3000/Discover/${indexPage}`
    page.like = like
    if (likedDefault.matches("." + cssPage.showLIked)) {
        axios.put(url, page, config)
            .catch(error => {
                console.Error("putLiked.js");

            });
    } else if (liked.matches("." + cssPage.showLIked)) {
        axios.put(url, page, config)
            .catch(error => {
                console.Error("putLiked.js");
            });
    }

} 