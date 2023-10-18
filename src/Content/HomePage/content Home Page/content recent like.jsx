import { Link } from "react-router-dom";
import { memo, useEffect } from "react";
import { useState } from "react";
import { checkUser } from "../../../Header/findUser";
import cssRecentLike from "./Recent Like.module.scss"
import clsx from "clsx"
function ContentRecentLike({ children }) {
    const itemsAccount = 'http://127.0.0.1:8000/account/?format=json'
    let [users, setUsers] = useState([])
    let items;
    useEffect(() => {
        if (!!checkUser()) {
            fetch(itemsAccount)
                .then((response) => response.json())
                .then((response) => {
                    const findUser = response.find(user => user.username == checkUser().username)
                    if (findUser.username == checkUser().username &&
                        findUser.password == checkUser().password &&
                        findUser.email == checkUser().email) {
                        setUsers(JSON.parse(findUser.liked))
                    }
                })
        } else {
            setUsers(false)
        }
    }, []);
    if (!!users) {
        items = users.map((like) => {
            return children.find((items) => {

                return items.id == like

            })

        })
    }
   
    return <div className={clsx(cssRecentLike.formTrending)}>
        <div className={clsx(cssRecentLike.formTrending__box_title)}>
            <h2 className={clsx(cssRecentLike.formTrending_title)}>Recent Like
                <i style={{ color: "#fff" }} className={clsx(cssRecentLike.formTrending_icon, "fa-solid fa-eye")} ></i></h2>
        </div>
        <>

            {!!checkUser() && users.length >= 1 ?


                <div className={clsx(cssRecentLike.formTrending__box_items)}>
                    {items.map((item, index) => {

                        return <div key={index} className={clsx(cssRecentLike.formTrending_items)} >
                            <Link to={`/song ${item?.title}`}>

                                <div className={clsx(cssRecentLike.formTrending__box_img)}>
                                    <img src={item?.img} alt="" />
                                </div>
                                <div className={clsx(cssRecentLike.formTrending__box_name_song)}>
                                    <p className={clsx(cssRecentLike.formTrending__name_song)}>Name Song:</p>
                                    <p className={clsx(cssRecentLike.formTrending__name_title_song)}>{item?.title}</p>
                                </div>
                                <div className={clsx(cssRecentLike.formTrending__box_name_singer)}>

                                    <p className={clsx(cssRecentLike.formTrending__name_singer)}>Name Singer:</p>
                                    <p className={clsx(cssRecentLike.formTrending__name_title_singer)}>{item?.nameSinger}</p>
                                </div>

                            </Link>
                        </div>
                    }).slice(0, 4)}

                </div>
                :
                <div className={clsx(cssRecentLike.not_found)}>
                    <h2>
                        Not Found
                    </h2>
                </div>


            }
        </>



    </div >
}



export default ContentRecentLike