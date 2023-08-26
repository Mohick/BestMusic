import cssHeader from "../header.module.scss"
import { Link } from "react-router-dom"
import clsx from "clsx"
import cssModalTablet from "./Modal Tablet.module.scss"
export default function ModalMenuTablet(items = "69px") {


    


    return (
        <div  style={{top:""}} className={clsx(cssModalTablet.modal__tablet)}>
            <ul className={clsx(cssModalTablet.modal__tablet_items)} id="gridSystems">
                <li>
                    <Link to={'/'}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to={"/Discover"}>
                        Discover
                    </Link>
                </li>
            </ul>
        </div >
    )
}