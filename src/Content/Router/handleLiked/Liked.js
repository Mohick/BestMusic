import { json } from "react-router-dom"
import cssLiked from '../liked.module.scss';


import axios from "axios"
export function handleLiked(indexPage, value, user) {
    const tagParents = value.parentElement

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

    const url = `http://127.0.0.1:8000/account/${user.id}`
    if (likedDefault.matches("." + cssLiked.showLIked)) {
        liked.classList.add(cssLiked.showLIked)
        likedDefault.classList.remove(cssLiked.showLIked)

        if (typeof user.liked == "string") {

            user.liked = user.liked.slice(1, -1).trim().split().map(conf_Str => Number(conf_Str))

            user.liked.push(indexPage)

            user.liked = JSON.stringify(user.liked)
            axios.put(url, user, config)
                .catch(error => {
                    // console.Error("Liked");

                });

        } else if (typeof user.liked == "object") {
            user.liked.push(indexPage)
            user.liked = JSON.stringify(user.liked)
            axios.put(url, user, config)
                .catch(error => {
                    // console.Error("Liked");

                });
        }





    } else if (liked.matches("." + cssLiked.showLIked)) {

        liked.classList.remove(cssLiked.showLIked)
        likedDefault.classList.add(cssLiked.showLIked)
        let index;


        if (typeof user.liked == "string") {

            user.liked = user.liked.slice(1, -1).trim().split().map(conf_Str => {
                if (conf_Str) {
                    return Number(conf_Str)
                }
            })
            for (let newIndex = 0; newIndex < user.liked.length; newIndex++) {
                if (user.liked[newIndex] == indexPage) {
                    index = newIndex
                    break
                }

            }
            user.liked.splice(index, index + 1)


            user.liked = JSON.stringify(user.liked)
            axios.put(url, user, config)
                .catch(error => {
                    // console.Error("Liked");

                });
        } else if (typeof user.liked == "object") {
            for (let newIndex = 0; newIndex < user.liked.length; newIndex++) {
                if (user.liked[newIndex] == indexPage) {
                    index = newIndex
                    break
                }

            }
            user.liked.splice(index, index + 1)


            user.liked = JSON.stringify(user.liked)
            axios.put(url, user, config)
                .catch(error => {
                    // console.Error("Liked");

                });
        }

        axios.put(url, user, config)
            .catch(error => {
                // console.Error("Liked");

            });
    }

} 