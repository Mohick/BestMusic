import React from "react";
import { Routes, Route, RouterProvider } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Discover from "../Discover Page/Discover Page";
import { useState, useEffect } from "react";
import cssPages from "./Pages ProDucts.module.scss"
import clsx from "clsx";
import ProductRandom from "./render random Product";
import imgDisk from "../../assets/Disk/disk.png"
import { checkUser } from "../../Header/findUser";
import { showModalSignIn } from "../../Header/Modal Sign/show modal sign in";
import { handleLiked } from "./handleLiked/Liked";
import { handlePutLIke } from "./handleLiked/putLiked.js";
import { playSong } from "./handle Control Voice/play";
import { pauseSong } from "./handle Control Voice/Pause";
import { fastForward } from "./handle Control Voice/Fast forward";
import { setLike } from "./handle Control Voice/Like";
import { nextStep } from "./handle Control Voice/NextStep";
import { setUnLike } from "./handle Control Voice/unlike";
import { volume } from "./handle Control Voice/volumn";
import { loopAudio } from "./handle Control Voice/LoopAudio";

const LazyEnglishSongs= React.lazy(()=>import ("../Discover Page/Songs America"))
const LazyDiscover = React.lazy(() => import("../Discover Page/Discover Page"))
const LazyVNSongs = React.lazy(() => import("../Discover Page/Songs Viet Nam"))
const LazySetting = React.lazy(() => import("../Setting/Setting"))


export default function RouterPage() {

   

    let [user, setUser] = useState()
    let [pages, setPages] = useState([])
    useEffect(() => {
        let checkDiscover = true
        if (checkDiscover) {
            fetch("http://localhost:3000/Discover")
                .then((response) => response.json())
                .then((response) => setPages(response))
        }
        if (checkDiscover) {
            if (!!checkUser()) {
                fetch("http://localhost:3000/Account")
                    .then((response) => response.json())
                    .then((response) => {
                        const findUser = response.find(user => user.username == checkUser().username)
                        if (findUser.username == checkUser().username &&
                            findUser.password == checkUser().password &&
                            findUser.email == checkUser().email) {
                            setUser(findUser)
                        }
                    })
            } else {
                setUser(false)
            }
        }
        return () => checkDiscover = false
    }, [])
    let indexPage;
    return <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Discover" element={<React.Suspense fallback="loading..."><LazyDiscover /></React.Suspense>} />
        <Route path="/English Songs" element={<React.Suspense fallback="loading..."><LazyEnglishSongs /></React.Suspense>} />
        <Route path="/Viet Nam Songs" element={<React.Suspense fallback="loading..."><LazyVNSongs /></React.Suspense>} />
        <Route path="/Setting" element={<React.Suspense fallback="loading..."><LazySetting /></React.Suspense>} />
        {pages.map(page => {
            return <Route key={page.id} path={`/song ${page.title}`} element={
                <React.Suspense fallback="loading...">
                    <div className={clsx(cssPages.ProDucts__container)}>
                        <div className={clsx(cssPages.ProDucts__container_content)} id="gridSystems">
                            <div className={clsx(cssPages.ProDucts__container_products)}>
                                <div className={clsx(cssPages.ProDucts__box_products)} >
                                    <div className={clsx(cssPages.ProDucts__header)}>
                                        <div className={clsx(cssPages.ProDucts__header_title)}>
                                            <h2>{page.title}</h2>
                                        </div>
                                        <div className={clsx(cssPages.ProDucts__header_nameSignger)}>
                                            <p>{page.nameSinger}</p>
                                        </div>
                                    </div>
                                    <div className={clsx(cssPages.ProDucts__box_img_disk)}>
                                        <div className={clsx(cssPages.ProDucts__img_disk)}>
                                            <img src={imgDisk} alt=" DISK" />
                                        </div>
                                    </div>
                                    <div className={clsx(cssPages.ProDucts__box_control)}>
                                        <div className={clsx(cssPages.ProDucts__box_voices)}>

                                            <div className={clsx(cssPages.ProDucts__box_voices_times)} >
                                                <div className={clsx(cssPages.ProDucts__box_voices_currentTimes)}>
                                                    00:00
                                                </div>
                                                <div className={clsx(cssPages.ProDucts__box_voices_duration)}>
                                                    00:00
                                                </div>
                                            </div>
                                            <div className={clsx(cssPages.ProDucts__box_voices_slider)}>
                                                <input type="range" min="0" max="100" step={"0.001"} defaultValue="0"
                                                    onChange={fastForward}
                                                    onMouseUp={() => playSong()}
                                                />
                                                <audio controls>
                                                    <source src={page.voice} />
                                                </audio>
                                            </div>
                                        </div>
                                        <div className={clsx(cssPages.ProDucts__voice_control)}>
                                            <div className={clsx(cssPages.ProDucts_control_repeat)} onClick={(e) => loopAudio(e.target)} title="Repeat Music">

                                                <i className="fa-solid fa-arrow-rotate-left"></i>
                                            </div>
                                            <div className={clsx(cssPages.ProDucts_control_volume)}>
                                                <div className={clsx(cssPages.ProDucts_control_volume_max,
                                                    cssPages.modeSpeaker
                                                )}>
                                                    <i className="fa-solid fa-volume-high"></i>
                                                </div>
                                                <div className={clsx(cssPages.ProDucts_control_volume_medium)}>
                                                    <i className="fa-solid fa-volume-low"></i></div>
                                                <div className={clsx(cssPages.ProDucts_control_volume_mute)}>
                                                    <i className="fa-solid fa-volume-xmark"></i>
                                                </div>
                                                <input type="range" min={0} max={1} step={0.1}
                                                    onChange={(e) => volume(e.target)}
                                                    defaultValue={1} />

                                            </div>
                                            <div className={clsx(cssPages.ProDucts_control_play_pouse)}>
                                                <div className={clsx(cssPages.ProDucts_control_play)} onClick={playSong}>
                                                    <i className="fa-solid fa-play"></i>
                                                </div>
                                                <div className={clsx(cssPages.ProDucts_control_pouse)} onClick={pauseSong}>
                                                    <i className="fa-solid fa-pause"></i>
                                                </div>
                                            </div>
                                            <div  className={clsx(cssPages.ProDucts_control_nextStep)} onClick={nextStep}>
                                                <i className="fa-solid fa-forward-step"></i>

                                            </div>
                                            <div className={clsx(cssPages.ProDucts_control_likes)}>
                                                {!!user ?
                                                    <> {user.liked.find(value => value == page.id) ?
                                                        <>
                                                            <div className={clsx(cssPages.ProDucts_control_like, cssPages.showLIked)} onClick={(e) => {
                                                                setUnLike(page.like - 1),
                                                                    handleLiked(page.id, e.target, user),
                                                                    handlePutLIke(page.id, e.target, page, page.like - 1)
                                                            }} >
                                                                <i className="fa-solid fa-heart"></i>
                                                                <span>{page.like}</span>
                                                            </div>
                                                            <div className={clsx(cssPages.ProDucts_control_likeflautLike)} onClick={(e) => {
                                                                setLike(page.like + 1),
                                                                    handleLiked(page.id, e.target, user),
                                                                    handlePutLIke(page.id, e.target, page, page.like + 1)
                                                            }} >
                                                                <i className="fa-regular fa-heart"></i>
                                                                <span>{page.like}</span>
                                                            </div>
                                                        </> :
                                                        <>
                                                            <div className={clsx(cssPages.ProDucts_control_like,)} onClick={(e) => {
                                                                setUnLike(page.like - 1),
                                                                    handleLiked(page.id, e.target, user),
                                                                    handlePutLIke(page.id, e.target, page, page.like - 1)

                                                            }} >
                                                                <i className="fa-solid fa-heart"></i>
                                                                <span>{page.like}</span>
                                                            </div>
                                                            <div className={clsx(cssPages.ProDucts_control_likeflautLike, cssPages.showLIked)} onClick={(e) => {
                                                                setLike(page.like + 1),
                                                                    handleLiked(page.id, e.target, user)
                                                                    ,
                                                                    handlePutLIke(page.id, e.target, page, page.like + 1)
                                                            }} >
                                                                <i className="fa-regular fa-heart"></i>
                                                                <span>{page.like}</span>
                                                            </div>
                                                        </>
                                                    }
                                                    </> :
                                                    <div className={clsx(cssPages.ProDucts_control_likeflautLike, cssPages.showLIked)} onClick={showModalSignIn}>
                                                        <i className="fa-regular fa-heart"> </i>
                                                        <span>{page.like}</span>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={clsx(cssPages.ProDucts__box_other)} >

                                <ProductRandom >
                                    {{ pages: pages, indexPage: page.id }}
                                </ProductRandom>
                            </div>
                        </div>
                    </div >
                </React.Suspense>
            } />

        })}
    </Routes >


}