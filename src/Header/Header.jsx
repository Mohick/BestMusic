import { Link } from "react-router-dom"
import clsx from "clsx"
import cssHeader from "./header.module.scss"
export default function Header() {
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
                    <input type="search" name="" id=""  className={clsx(cssHeader.header__inputSearch)}/>
                    <input type="submit" value="Search" className={clsx(cssHeader.header__inputSubmit)} />
                    
                </div>
                <div className={clsx(cssHeader.header__Sign)}>
                    <ul>
                        <li>
                            sign Up
                        </li>
                        <li>
                            sign in
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}