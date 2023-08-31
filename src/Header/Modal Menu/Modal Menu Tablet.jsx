import cssHeader from "../header.module.scss"
import { Link } from "react-router-dom"
import clsx from "clsx"
import cssModalTablet from "./Modal Tablet.module.scss"
import { handleModal } from "./handle Modal"
export default function ModalMenuTablet() {

    return (
        <div  style={{top:""}} className={clsx(cssModalTablet.modal__tablet)} onClick={e=>e.stopPropagation()}>
            <ul className={clsx(cssModalTablet.modal__tablet_items)} id="gridSystems">
                <li onClick={handleModal}>
                    <Link to={'/'}>
                        Home
                    </Link>
                </li>
                <li onClick={handleModal}>
                    <Link to={"/Discover"}>
                        Discover
                    </Link>
                </li>
            </ul>
        </div >
    )
}