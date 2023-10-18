
import { memo, useEffect, useState } from 'react';
import cssLiked from './liked.module.scss';
import clsx from 'clsx';
import { showModalSignIn } from "../../Header/Modal Sign/show modal sign in";
import { handleLiked } from "./handleLiked/Liked";
import { handlePutLIke } from "./handleLiked/putLiked.js";
import { setLike } from "./handle Control Voice/Like";
import { setUnLike } from "./handle Control Voice/unlike";
import { checkUser } from '../../Header/findUser';
function Liked({ children }) {
    let [user, setUser] = useState([])
    let [like, setLikes] = useState([])

    useEffect(() => {
        let check = true
        if (check) {
            fetch("http://127.0.0.1:8000/account/?format=json")
                .then((response) => response.json())
                .then((response) => {

                    if (checkUser()) {
                        const findUser = response.find(user => user.username == checkUser().username)
                        if (findUser.username == checkUser().username &&
                            findUser.password == checkUser().password &&
                            findUser.email == checkUser().email) {
                            findUser.liked = JSON.parse(findUser.liked)
                            setUser({ user: findUser, liked: findUser.liked })
                        }
                    }
                })
            fetch("http://127.0.0.1:8000/upDateDiscover/?format=json")
                .then((response) => response.json())
                .then((response) => {

                    let showliked = response.find(title => title.title == children.title)
                    setLikes({ like: showliked.like, title: showliked.title, id: showliked.id })
                })
        }
        return () => check = false

    }, [])
    const liked = [].concat(user.liked)
    let check = liked.find(value => value == children.id)
    
    return (
        <div className={clsx(cssLiked.ProDucts_control_likes)}>
            <div className={clsx(cssLiked.ProDucts_control_likes)}>

                {user ?
                    <>
                        {check && like ?
                            <>
                                <div className={clsx(cssLiked.ProDucts_control_like, cssLiked.showLIked)} onClick={(e) => {
                                    setUnLike(like.like - 1),
                                        handleLiked(like.id, e.target, user.user),
                                        handlePutLIke(like.id, e.target, like, like.like - 1)
                                }} >
                                    <i className="fa-solid fa-heart"></i>
                                    <span>{like.like}</span>
                                </div>
                                <div className={clsx(cssLiked.ProDucts_control_likeflautLike)} onClick={(e) => {
                                    setLike(like.like + 1),
                                        handleLiked(like.id, e.target, user.user),
                                        handlePutLIke(like.id, e.target, like, like.like + 1)
                                }} >
                                    <i className="fa-regular fa-heart"></i>
                                    <span>{like.like}</span>
                                </div>
                            </> :
                            <>
                                <div className={clsx(cssLiked.ProDucts_control_like,)} onClick={(e) => {
                                    setUnLike(like.like - 1),
                                        handleLiked(like.id, e.target, user.user),
                                        handlePutLIke(like.id, e.target, like, like.like - 1)

                                }} >
                                    <i className="fa-solid fa-heart"></i>
                                    <span>{like.like}</span>
                                </div>
                                <div className={clsx(cssLiked.ProDucts_control_likeflautLike, cssLiked.showLIked)} onClick={(e) => {
                                    setLike(like.like + 1),
                                        handleLiked(like.id, e.target, user.user)
                                        ,
                                        handlePutLIke(like.id, e.target, like, like.like + 1)
                                }} >
                                    <i className="fa-regular fa-heart"></i>
                                    <span>{like.like}</span>
                                </div>
                            </>
                        }
                    </> :
                    <div className={clsx(cssLiked.ProDucts_control_likeflautLike, cssLiked.showLIked)} onClick={showModalSignIn}>
                        <i className="fa-regular fa-heart"> </i>
                        <span>{showliked.like}</span>
                    </div>
                }
            </div>
        </div>
    )
}


export default memo(Liked)