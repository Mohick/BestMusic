import cssModalSignUp from './Modal SignUp.module.scss'
import clsx from 'clsx'
import { closeModalSignUp } from './show modal sign up'
import { handleOnblurUseName }
    from './Handle Value Input/Handle value Input Sign Up/handle value input Use Name'
import { handleOnblurEmail } from './Handle Value Input/Handle value Input Sign Up/handle value Email'
import { handleOnblurpassword } from './Handle Value Input/Handle value Input Sign Up/handle value password'
import { handleOnblurRe_enterPassword } from './Handle Value Input/Handle value Input Sign Up/handle value re-enter password '
import { handleOnForcus } from './Handle Value Input/Handle value Input Sign Up/handle onforcus'
import { submitSignUp } from './Handle Value Input/Handle value Input Sign Up/Submit'
export default function SignUp() {

    return (
        <div className={clsx(cssModalSignUp.modal__sign)} onClick={closeModalSignUp}>
            <div className={clsx(cssModalSignUp.modal__sign_container)} onClick={e => e.stopPropagation()}>
                <div className={clsx(cssModalSignUp.modal__sign_box_title)}>
                    <h2>Sign Up</h2>
                </div>
                <div className={clsx(cssModalSignUp.modal__sign_container_form)}>
                    <div className={clsx(cssModalSignUp.modal__sign_box_useName)}>
                        <label >Use Name</label>
                        <input onBlur={e => handleOnblurUseName(e.target)}
                            onFocus={(e) => handleOnForcus(e)}
                            type="text" placeholder='Use name' autoComplete='false' />
                        <div className={clsx(cssModalSignUp.modal__sign_box_Alert)}>
                            <span>
                            </span>
                        </div>
                    </div>
                    <div className={clsx(cssModalSignUp.modal__sign_box_email)}>
                        <label >Email</label>
                        <input onBlur={(e) => handleOnblurEmail(e.target)}
                            onFocus={(e) => handleOnForcus(e)}
                            type="email" autoComplete='false' placeholder='Email' />
                        <div className={clsx(cssModalSignUp.modal__sign_box_Alert)}>
                            <span>
                            </span>
                        </div>
                    </div>
                    <div className={clsx(cssModalSignUp.modal__sign_box_password)}>
                        <label >Password</label>
                        <input type="password" onBlur={(e) => handleOnblurpassword(e.target)}
                            onFocus={(e) => handleOnForcus(e)}
                            placeholder='Password' />
                        <div className={clsx(cssModalSignUp.modal__sign_box_Alert)}>
                            <span>
                            </span>
                        </div>
                    </div>
                    <div className={clsx(cssModalSignUp.modal__sign_box_re_enter_pasword)}>
                        <label htmlFor="">Re-enter password</label>
                        <input type="password"
                            onBlur={(e) => handleOnblurRe_enterPassword(e.target)}
                            placeholder='Re-enter password' />
                        <div className={clsx(cssModalSignUp.modal__sign_box_Alert)}>
                            <span>
                            </span>
                        </div>
                    </div>
                    <div className={clsx(cssModalSignUp.modal__sign_box_sign)}>
                        <div className={clsx(cssModalSignUp.modal__login)} onClick={(e) => submitSignUp(e)}>
                            Sign Up
                        </div>
                    </div>
                </div>
                <div className={clsx(cssModalSignUp.modal__sign_container_close)} onClick={closeModalSignUp}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
            </div>
        </div>
    )
}