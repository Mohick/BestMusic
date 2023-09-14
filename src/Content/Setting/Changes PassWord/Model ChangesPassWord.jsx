
import clsx from "clsx"
import cssChangesPassword from "./changes PassWord.module.scss"
import { changesPassword } from "./Changes PassWord"
import { closeModalChangesPassword } from "./Close Modal Change Password"
function ChangesetPassword() {
    return (
        <div className={clsx(cssChangesPassword.modal__changesPassWord)} onClick={closeModalChangesPassword}>
            <div className={clsx(cssChangesPassword.modal__changesPassWord_container)} onClick={e => e.stopPropagation()}>
                <div className={clsx(cssChangesPassword.modal__changesPassWord_box_title)}>
                    <h2>changes PassWord</h2>
                </div>
                <div className={clsx(cssChangesPassword.modal__changesPassWord_container_form)}>
                    <div className={clsx(cssChangesPassword.modal__changesPassWord_box_useName)}>
                        <label >Current password</label>
                        <input type="password" name="password"

                            placeholder='Current password' autoComplete='off' />
                        <div className={clsx(cssChangesPassword.modal__changesPassWord_box_Alert)}>
                            <span>
                            </span>
                        </div>
                    </div>
                    <div className={clsx(cssChangesPassword.modal__changesPassWord_box_password)}>
                        <label >New Password</label>
                        <input autoComplete='off' type="password" placeholder='New Password'


                        />
                        <div className={clsx(cssChangesPassword.modal__changesPassWord_box_Alert)}>
                            <span>
                            </span>
                        </div>
                    </div>
                    <div className={clsx(cssChangesPassword.modal__changesPassWord_box_re_ente_new_password)}>
                        <label >Re-Enter New Password</label>
                        <input autoComplete='off' type="password" placeholder='Re-Enter New Password'
                        />
                        <div className={clsx(cssChangesPassword.modal__changesPassWord_box_Alert)}>
                            <span>
                            </span>
                        </div>
                    </div>
                    <div className={clsx(cssChangesPassword.modal__changesPassWord_box_sign)} onClick={changesPassword}>
                        <div className={clsx(cssChangesPassword.modal__login)} >
                            Changes
                        </div>
                    </div>
                </div>
                <div className={clsx(cssChangesPassword.modal__changesPassWord_container_close)} onClick={closeModalChangesPassword}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
            </div>
        </div>
    )

}

export default ChangesetPassword