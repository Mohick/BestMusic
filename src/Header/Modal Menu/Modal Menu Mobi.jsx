import cssHeader from "../header.module.scss"
import { Link } from "react-router-dom"
import clsx from "clsx"
import cssModalMobi from "./Modal Mobi.module.scss"
import { showModalSignIn } from "../Modal Sign/show modal sign in"
import { showModalSignUp } from "../Modal Sign/show modal sign up"

export default function ModalMenuMobi(items = "69px") {





    return (
        <div style={{ top: "" }} className={clsx(cssModalMobi.modal__mobi)}>
            <ul className={clsx(cssModalMobi.modal__mobi_items)} id="gridSystems">
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
                <li>
                    <Link to={"/Setting"}>
                        Setting
                    </Link>
                </li>

                <li onClick={showModalSignIn}>
                    Sign In
                </li>
                <li onClick={showModalSignUp}>
                    sign up
                </li>
            </ul>
        </div >
    )
}