import clsx from 'clsx'
import cssDiscover from './Discover.module.scss'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export default function Discover() {

    const getAPI = 'http://localhost:3000/Discover'
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
    let [pushItems, setPushItems] = useState(3)
    return (
        <div className={clsx(cssDiscover.Discover__container_content)}>
            <div id="gridSystems" className={clsx(cssDiscover.Discover__box_content)}>
                <div className={clsx(cssDiscover.Discover__box_title)}>
                    <h2>Discover</h2>
                </div>
                <div className={clsx(cssDiscover.Discover__content)}>
                    <div className={clsx(cssDiscover.Discover__content_bar)}>
                        <ul className={clsx(cssDiscover.Discover__bar_list)}>
                            <li>Select Music language</li>
                            <li className={clsx(cssDiscover.Discover__bar_items_1)} onClick={()=>setPushItems(pushItems + 3)}>all songs</li>
                            <li className={clsx(cssDiscover.Discover__bar_items_2)}>English songs</li>
                            <li className={clsx(cssDiscover.Discover__bar_items_3)}>VietNam songs</li>
                        </ul>
                    </div>
                    <div className={clsx(cssDiscover.Discover__content_items)}>
                        {apis.map((api, index) => {
                            return <div key={index} className={clsx(cssDiscover.Discover_items)} >
                                <Link to={`/song ${api.title}`}>

                                    <div className={clsx(cssDiscover.Discover__box_img)}>
                                        <img src={api.img} alt="" />
                                    </div>
                                    <div className={clsx(cssDiscover.Discover__box_name_song)}>
                                        <p className={clsx(cssDiscover.Discover__name_song)}>Name Song:</p>
                                        <p className={clsx(cssDiscover.Discover__name_title_song)}>{api.title}</p>
                                    </div>
                                    <div className={clsx(cssDiscover.Discover__box_name_singer)}>

                                        <p className={clsx(cssDiscover.Discover__name_singer)}>Name Singer:</p>
                                        <p className={clsx(cssDiscover.Discover__name_title_singer)}>{api.nameSinger}</p>
                                    </div>

                                </Link>
                            </div>
                        }).slice(0, pushItems)}
                    </div>
                </div>
            </div>
        </div>

    )
}