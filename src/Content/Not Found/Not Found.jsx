import { memo } from "react";
import clsx from "clsx";
import cssNotFound from "./Not Found.module.scss"
import { handleNotFound } from "./Handle Not Pound";
function NotFound() {
    setTimeout(() => {  
        handleNotFound()
    }, 30);
    return <div className={clsx(cssNotFound.notPound__container)}>\\\\\
        <div className={clsx(cssNotFound.notPound__box)} id="gridSystems">
            <div className={clsx(cssNotFound.notPound__Header)}>
                404 NOT FOUND !
            </div>
            <div className={clsx(cssNotFound.notPound__Content)}>
                <h3 className={clsx(cssNotFound.notPound__Content__title)}>
                    I
                </h3>
                <div className={clsx(cssNotFound.notPound__container__description)}>
                    <span className={clsx(cssNotFound.notPound__Content__description)}>

                    </span>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
}



export default memo(NotFound)