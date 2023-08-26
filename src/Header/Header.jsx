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
export default function Header(prop, user) {
   console.log(typeof document.cookie);
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
                    <input type="search" name="" id="" placeholder="Find Name Song" className={clsx(cssHeader.header__inputSearch)} />
                    <input type="submit" value="Search" className={clsx(cssHeader.header__inputSubmit)} />
                </div>
                <div className={clsx(cssHeader.header__Sign)}>
                    <ul>
                        <li onClick={showModalSignUp}>
                            sign Up
                        </li>
                        <li onClick={showModalSignIn}>
                            sign in
                        </li>
                    </ul>
                </div>
            </div>
            <div className={clsx(cssHeader.header__box_mobile_tablet)} id="gridSystems">
                <menu className={clsx(cssHeader.header__box_menu)} onClick={e => handleModal(e)}>
                    <div className={clsx(cssHeader.header__menu_bar)}>
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
                <div className={clsx(cssHeader.header__box_search)}>
                    <input type="search" placeholder="Find Name Song" name="" id="" />
                    <input type="submit" value="Search" />
                </div>
                <div className={clsx(cssHeader.header__box_sign)}>

                    {true ? <ul className={clsx(cssHeader.header__parent_sign)}>
                        <li className={clsx(cssHeader.header__parent_sign_up)} onClick={showModalSignUp}>
                            sign Up
                        </li>
                        <li className={clsx(cssHeader.header__parent_sign_in)} onClick={showModalSignIn}>
                            sign in
                        </li>
                    </ul>
                        :
                        <div>
                            {console.log(2)}
                            <div>
                                <div>
                                    {user.name}
                                </div>
                                <div>
                                    <i className="fa-solid fa-gear"></i>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div >
            <SignUp />
            <SignIn />
        </header >
    )
}