import cssHeader from "../header.module.scss"
import { Link } from "react-router-dom"
import clsx from "clsx"
import { useState, useEffect } from "react"
import cssModalMobi from "./Modal Mobi.module.scss"
import { showModalSignIn } from "../Modal Sign/show modal sign in"
import { showModalSignUp } from "../Modal Sign/show modal sign up"
import { checkUser } from "../findUser"
import { handleModal } from "./handle Modal"
export default function ModalMenuMobi() {

    let [user, setUser] = useState()
    useEffect(() => {
        let check = true
        if (check) {
            if (!!checkUser()) {
                fetch("http://127.0.0.1:8000/account/?format=json")
                    .then((response) => response.json())
                    .then((response) => {
                        const findUser = response.find(user => user.username == checkUser().username)
                        if (findUser.username == checkUser().username &&
                            findUser.password == checkUser().password &&
                            findUser.email == checkUser().email) {
                            setUser(checkUser())
                        }
                    })
            } else {
                setUser(false)
            }
        }
        return () => check == false
    }, [])



    return (
        <div className={clsx(cssModalMobi.modal__mobi)} onClick={(e) => e.stopPropagation()}>
            <div className={clsx(cssModalMobi.modal__mobi_container_content)} id="gridSystems">

                <ul className={clsx(cssModalMobi.modal__mobi_items)}>
                    <li onClick={() => handleModal(true)}>
                        <Link to={'/'}>
                            Home
                        </Link>
                    </li>
                    <li onClick={() => handleModal(true)}>
                        <Link to={"/Discover"}>
                            Discover
                        </Link>
                    </li>
                    {!!user ?
                        <li onClick={() => handleModal(true)}>
                            <Link to={"/Setting"}>
                                Setting
                            </Link>
                        </li> :
                        undefined
                    }
                </ul>

                <div className={clsx(cssModalMobi.modal__mobi_login)}>
                    {
                        !!user ?
                            <>
                                <div className={clsx(cssModalMobi.modal__Sign_user)}>
                                    <i className="fa-solid fa-user"></i>
                                    {user.username}
                                </div>
                            </>

                            :
                            <ul>
                                <li onClick={showModalSignIn}>
                                    Sign In
                                </li>
                                <li onClick={showModalSignUp}>
                                    Sign Up
                                </li>
                            </ul>
                    }
                </div>
            </div>
        </div >
    )
}