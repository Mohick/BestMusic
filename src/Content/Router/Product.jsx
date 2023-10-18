import { memo } from "react";
import clsx from "clsx";
import cssProduct from "./Product.module.scss";
import ProductRandom from "./render random Product";
import imgDisk from "../../assets/Disk/disk.png"
// import { checkUser } from "../../Header/findUser";

import { playSong } from "./handle Control Voice/play";
import { pauseSong } from "./handle Control Voice/Pause";
import { fastForward } from "./handle Control Voice/Fast forward";
import { nextStep } from "./handle Control Voice/NextStep";
import { volume } from "./handle Control Voice/volumn";
import Like from "./Like";
function Product({ children }) {
    
    if(decodeURIComponent(location.pathname).slice(6)) {
        window.scrollTo({top: 0, behavior:"smooth"})
    }
    return (
        <div className={clsx(cssProduct.ProDucts__container)}>
            <div className={clsx(cssProduct.ProDucts__container_content)} id="gridSystems">
                <div className={clsx(cssProduct.ProDucts__container_products)}>
                    <div className={clsx(cssProduct.ProDucts__box_products)} >
                        <div className={clsx(cssProduct.ProDucts__header)}>
                            <div className={clsx(cssProduct.ProDucts__header_title)}>
                                <h2>{children.page.title}</h2>
                            </div>
                            <div className={clsx(cssProduct.ProDucts__header_nameSignger)}>
                                <p>{children.page.nameSinger}</p>
                            </div>
                        </div>
                        <div className={clsx(cssProduct.ProDucts__box_img_disk)}>
                            <div className={clsx(cssProduct.ProDucts__img_disk)}>
                                <img src={imgDisk} alt=" DISK" />
                            </div>
                        </div>
                        <div className={clsx(cssProduct.ProDucts__box_control)}>
                            <div className={clsx(cssProduct.ProDucts__box_voices)}>

                                <div className={clsx(cssProduct.ProDucts__box_voices_times)} >
                                    <div className={clsx(cssProduct.ProDucts__box_voices_currentTimes)}>
                                        00:00
                                    </div>
                                    <div className={clsx(cssProduct.ProDucts__box_voices_duration)}>
                                        00:00
                                    </div>
                                </div>
                                <div className={clsx(cssProduct.ProDucts__box_voices_slider)}>
                                    <input type="range" min="0" max="100" step={"0.01"} defaultValue="0"
                                        onChange={fastForward}
                                        onMouseUp={() => playSong()}
                                    />
                                    <audio controls>
                                        <source src={children.page.voice} />
                                    </audio>
                                </div>
                            </div>
                            <div className={clsx(cssProduct.ProDucts__voice_control)}>
                                <div className={clsx(cssProduct.ProDucts_control_repeat)} onClick={(e) => loopAudio(e.target)} title="Repeat Music">

                                    <i className="fa-solid fa-arrow-rotate-left"></i>
                                </div>
                                <div className={clsx(cssProduct.ProDucts_control_volume)}>
                                    <div className={clsx(cssProduct.ProDucts_control_volume_max,
                                        cssProduct.modeSpeaker
                                    )}>
                                        <i className="fa-solid fa-volume-high"></i>
                                    </div>
                                    <div className={clsx(cssProduct.ProDucts_control_volume_medium)}>
                                        <i className="fa-solid fa-volume-low"></i></div>
                                    <div className={clsx(cssProduct.ProDucts_control_volume_mute)}>
                                        <i className="fa-solid fa-volume-xmark"></i>
                                    </div>
                                    <input type="range" min={0} max={1} step={0.1}
                                        onChange={(e) => volume(e.target)}
                                        defaultValue={1} />

                                </div>
                                <div className={clsx(cssProduct.ProDucts_control_play_pouse)}>
                                    <div className={clsx(cssProduct.ProDucts_control_play)} onClick={playSong}>
                                        <i className="fa-solid fa-play"></i>
                                    </div>
                                    <div className={clsx(cssProduct.ProDucts_control_pouse)} onClick={pauseSong}>
                                        <i className="fa-solid fa-pause"></i>
                                    </div>
                                </div>
                                <div className={clsx(cssProduct.ProDucts_control_nextStep)} onClick={nextStep}>
                                    <i className="fa-solid fa-forward-step"></i>

                                </div>
                                <Like>
                                    {children.page}
                                </Like>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={clsx(cssProduct.ProDucts__box_other)} >

                    <ProductRandom >
                        {{ children: children.pages, indexPage: children.page.id }}
                    </ProductRandom>
                </div>
            </div>
        </div >
    )
}

export default memo(Product)