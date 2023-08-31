import { json } from "react-router-dom"
import cssPage from "../Pages ProDucts.module.scss"
import axios from "axios"
export function handleLiked(indexPage, value, user) {
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
    const url = ` http://localhost:3000/Account/${user.id}`
    if (likedDefault.matches("." + cssPage.showLIked)) {
        liked.classList.add(cssPage.showLIked)
        likedDefault.classList.remove(cssPage.showLIked)
        user.liked.push(indexPage)
        axios.put(url, user, config)
            .catch(error => {
                console.Error("Liked");

            });
    } else if (liked.matches("." + cssPage.showLIked)) {
        liked.classList.remove(cssPage.showLIked)
        likedDefault.classList.add(cssPage.showLIked)
        const index = user.liked.indexOf(indexPage)
        user.liked.splice(index, index + 1)
        axios.put(url, user, config)
            .catch(error => {
                console.Error("Liked");

            });
    }

} 