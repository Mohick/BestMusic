import { Link } from "react-router-dom"
import clsx from "clsx"
import cssHeader from "./header.module.scss"
import { handleModal } from "./Modal Menu/handle Modal"
import ModalMenuTablet from "./Modal Menu/Modal Menu Tablet"
import ModalMenuMobi from "./Modal Menu/Modal Menu Mobi"
import SignUp from "./Modal Sign/Modal Sign Up"
import SignIn from "./Modal Sign/Modal Sign In"
import { showModalSignIn } from "./Modal Sign/show modal sign in"
import { showModalSignUp } from "./Modal Sign/show modal sign up"
import { useEffect, useState } from "react"
import { handleSearch, handleForcusSearch, handleBlurSearch,handleBlurSearchReponsive,handleForcusSearchReponsive } from "./handle Search"
import { checkUser } from "./findUser"
export default function Header() {
    let [user, setUser] = useState()
    useEffect(() => {
        let check = true
        if (!!checkUser()) {
            fetch("http://localhost:3000/Account")
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

    }, [])

    return (
        <header className={clsx(cssHeader.header)}>
            <div className={clsx(cssHeader.header__box)} id="gridSystems">
                <div className={clsx(cssHeader.header__logo)}>
                    <Link to={"/"}>
                        <h1><i>Best Music</i></h1>
                    </Link>
                </div>
                <div className={clsx(cssHeader.header__nav)}>
                    <ul>
                        <li>
                            <Link to={"/"}>
                                home
                            </Link>
                        </li>
                        <li>
                            <Link to={"/Discover"}>
                                discover
                            </Link>
                        </li>

                    </ul>
                </div>
                <div className={clsx(cssHeader.header__search)}>
                    <input type="search" name=""
                        onChange={(e) => {
                            handleSearch(e.target)
                        }}
                        autoComplete="false"
                        onFocus={e => handleForcusSearch(e.target)}
                        onBlur={e => handleBlurSearch(e.target)}
                        id="" placeholder="Find Name Song" className={clsx(cssHeader.header__inputSearch)} />
                    <input type="submit" value="Search" className={clsx(cssHeader.header__inputSubmit)} />
                    <div className={clsx(cssHeader.header__form_dropDown)}  >
                        <ul>

                        </ul>
                    </div>
                </div>
                <div className={clsx(cssHeader.header__Sign)}>
                    {!!user ?
                        <div className={clsx(cssHeader.header__Sign__container_user)}>

                            <Link to={"/Setting"}>
                                <div className={clsx(cssHeader.header__Sign__box_user)} >
                                    <div className={clsx(cssHeader.header__Sign_user)}>
                                        {user.username}
                                    </div>
                                    <div className={clsx(cssHeader.header__Sign_font_user)}>
                                        <i className="fa-solid fa-user"></i>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        :
                        <ul className={clsx(cssHeader.header__parent_sign)}>
                            <li className={clsx(cssHeader.header__parent_sign_up)} onClick={showModalSignUp}>
                                sign Up
                            </li>
                            <li className={clsx(cssHeader.header__parent_sign_in)} onClick={showModalSignIn}>
                                sign in
                            </li>
                        </ul>
                    }
                </div>
            </div>
            <div className={clsx(cssHeader.header__box_mobile_tablet)} id="gridSystems">
                <menu className={clsx(cssHeader.header__box_menu)} >
                    <div className={clsx(cssHeader.header__menu_bar)} onClick={e => handleModal(e)}>
                        <div className={clsx(cssHeader.header__menu_bar1)}></div>
                        <div className={clsx(cssHeader.header__menu_bar2)}></div>
                        <div className={clsx(cssHeader.header__menu_bar3)}></div>
                    </div>
                    <div className={clsx(cssHeader.header__box_modal)}>
                        <div className={clsx(cssHeader.header__modal_tablet)}>
                            <ModalMenuTablet />
                        </div>
                        <div>
                            <ModalMenuMobi />
                        </div>
                    </div>
                </menu>
                <div className={clsx(cssHeader.header__search)}>
                    <input type="search" name=""
                        onChange={(e) => {
                            handleSearch(e.target)
                        }}
                        autoComplete="false"
                        onFocus={e => handleForcusSearchReponsive(e.target)}
                        onBlur={e => handleBlurSearchReponsive(e.target)}
                        id="" placeholder="Find Name Song" className={clsx(cssHeader.header__inputSearch)} />
                    <input type="submit" value="Search" className={clsx(cssHeader.header__inputSubmit)} />
                    <div className={clsx(cssHeader.header__form_dropDown_reposive)}  >
                        <ul>

                        </ul>
                    </div>
                </div>
                <div className={clsx(cssHeader.header__box_sign)}>

                    {!!user ?
                        <div className={clsx(cssHeader.header__Sign__container_user)}>
                            <Link to={"/Setting"}>
                                <div className={clsx(cssHeader.header__Sign__box_user)} >
                                    <div className={clsx(cssHeader.header__Sign_user)}>
                                        {user.username}
                                    </div>
                                    <div className={clsx(cssHeader.header__Sign_font_user)}>
                                        <i className="fa-solid fa-user"></i>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        :
                        <ul className={clsx(cssHeader.header__parent_sign)}>
                            <li className={clsx(cssHeader.header__parent_sign_up)} onClick={showModalSignUp}>
                                sign Up
                            </li>
                            <li className={clsx(cssHeader.header__parent_sign_in)} onClick={showModalSignIn}>
                                sign in
                            </li>
                        </ul>
                    }
                </div>
            </div >
            <SignUp />
            <SignIn />
        </header >
    )
}