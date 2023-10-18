import { useState, useEffect, memo } from "react"
import { checkUser } from "../../Header/findUser"
import NotFound from "../Not Found/Not Found"
import clsx from "clsx"
import cssSetting from "./Setting.module.scss"
import { logOut } from "./Log Out/Log Out"
import ChangesetPassword from "./Changes PassWord/Model ChangesPassWord"
import { showModalChangePassWord } from "./Changes PassWord/show modal change Password "
import { delAccount } from "./Del Account/Del Account"
import ModalDel from "./Del Account/Modal Del Account"
import { showModalDelAccount } from "./Del Account/show modal del account "
function Setting() {

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
    return <>
        {
            !!user ?
                <>

                    <div className={clsx(cssSetting.PageSetting)}>
                        <div className={clsx(cssSetting.PageSetting__container)} id="gridSystems">
                            <div className={clsx(cssSetting.PageSetting__box_title)}>
                                <h2>Setting</h2>
                            </div>
                            <div className={clsx(cssSetting.PageSetting__box_content)}>
                                <ul className={clsx(cssSetting.PageSetting__box_parent_items)}>
                                    <li className={clsx(cssSetting.PageSetting__box_items)}>
                                        <div className={clsx(cssSetting.PageSetting__items_title)}>Changes password :</div>
                                        <div className={clsx(cssSetting.PageSetting__items_button)} onClick={showModalChangePassWord}>
                                            <button>Changes</button>
                                        </div>
                                        <div>
                                            <ChangesetPassword />
                                        </div>
                                    </li>
                                    <li className={clsx(cssSetting.PageSetting__box_items)}>
                                        <div className={clsx(cssSetting.PageSetting__items_title)}>Delete Account : </div>
                                        <div className={clsx(cssSetting.PageSetting__items_button)} onClick={showModalDelAccount}>
                                            <button>Delete</button>
                                        </div>
                                        <div>
                                            <ModalDel/>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className={clsx(cssSetting.PageSetting__box_footer)} onClick={logOut}>
                                log out
                            </div>
                        </div>
                    </div>
                </> :
                <>
                    <NotFound />
                </>
        }
    </>
}


export default memo(Setting)