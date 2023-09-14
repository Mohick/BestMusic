import { memo, useEffect, useState } from "react";
import cssItems from "./render random product.module.scss"
import clsx from "clsx";
import { Link } from "react-router-dom";
function ProductRandom({ children }) {

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;


        while (0 !== currentIndex) {

    
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

    
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }




    return <>
        {shuffle(children.pages).map((items) => {
            return (
                <div className={clsx(cssItems.container_Items)} key={items.id}>
                    {children.indexPage == items.id ? undefined :
                        <Link  to={`/song ${items.title}`}  onClick={() => { setTimeout(() => { location.reload() },) }}
                            className={cssItems.linkItems}>
                            <div className={clsx(cssItems.box_Items)}  >

                                <div className={clsx(cssItems.Discover__box_img)}>
                                    <img src={items.img} alt="" />
                                </div>
                                <div className={clsx(cssItems.Discover__box_name_song)}>
                                    <p className={clsx(cssItems.Discover__name_song)}>Name Song:</p>
                                    <p className={clsx(cssItems.Discover__name_title_song)}>{items.title}</p>
                                </div>
                                <div className={clsx(cssItems.Discover__box_name_singer)}>

                                    <p className={clsx(cssItems.Discover__name_singer)}>Name Singer:</p>
                                    <p className={clsx(cssItems.Discover__name_title_singer)}>{items.nameSinger}</p>
                                </div>

                            </div>
                        </Link >
                    }
                </div>
            )
        }).slice(0, 8)}

    </>
}

export default memo(ProductRandom)

