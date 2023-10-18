import cssTopTrending from "./Top Trending.module.scss"
import clsx from "clsx"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
export default function TopTrending() {
    const getAPI = 'http://127.0.0.1:8000/discover/?format=json'
    let [apis, setAPI] = useState([])
    useEffect(() => {
        var check = true
        if (check) {

            fetch(getAPI)
                .then((response) => {
                    return response.json()
                })
                .then((response) => {
                    return setAPI(response)
                })
        }
        return () => check = false
    }, [])

    return (
        <div className={clsx(cssTopTrending.formTrending)}>
            <div className={clsx(cssTopTrending.formTrending__box_title)}>
                <h2 className={clsx(cssTopTrending.formTrending_title)}>Top 8 Trending
                    <i className={clsx(cssTopTrending.formTrending_icon, "fa-solid fa-fire")} ></i></h2>
            </div>
            <div className={clsx(cssTopTrending.formTrending__box_items)}>
                {apis.map((api, index) => {
                    return <div key={index} className={clsx(cssTopTrending.formTrending_items)} >
                        <Link to={`/song ${api.title}`}>

                            <div className={clsx(cssTopTrending.formTrending__box_img)}>
                                <img src={api.img} alt="" />
                            </div>
                            <div className={clsx(cssTopTrending.formTrending__box_name_song)}>
                                <p className={clsx(cssTopTrending.formTrending__name_song)}>Name Song:</p>
                                <p className={clsx(cssTopTrending.formTrending__name_title_song)}>{api.title}</p>
                            </div>
                            <div className={clsx(cssTopTrending.formTrending__box_name_singer)}>

                                <p className={clsx(cssTopTrending.formTrending__name_singer)}>Name Singer:</p>
                                <p className={clsx(cssTopTrending.formTrending__name_title_singer)}>{api.nameSinger}</p>
                            </div>

                        </Link>
                    </div>
                })}

            </div>


        </div>
    )
}