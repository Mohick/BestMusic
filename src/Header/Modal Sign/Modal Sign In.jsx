import cssModalSignIn from './Modal SignIn.module.scss'
import clsx from 'clsx'
import { logIn } from './Handle Value Input/Handle Value Input Sign In/Login'
import { closeModalSignIn } from './show modal sign in'
import { handleForCusSignIn } from './Handle Value Input/Handle Value Input Sign In/handle onforcus'
export default function SignIn() {

    return (
        <div className={clsx(cssModalSignIn.modal__sign)} onClick={closeModalSignIn}>
            <div className={clsx(cssModalSignIn.modal__sign_container)} onClick={e => e.stopPropagation()}>
                <div className={clsx(cssModalSignIn.modal__sign_box_title)}>
                    <h2>Sign in</h2>
                </div>
                <div className={clsx(cssModalSignIn.modal__sign_container_form)}>
                    <div className={clsx(cssModalSignIn.modal__sign_box_useName)}>
                        <label >Use Name Or Email</label>
                        <input type="text" 
                        onFocus={(e)=>handleForCusSignIn(e)}
                        placeholder='Use Name Or Email' autoComplete='off' />
                        <div className={clsx(cssModalSignIn.modal__sign_box_Alert)}>
                            <span>
                            </span>
                        </div>
                    </div>
                    <div className={clsx(cssModalSignIn.modal__sign_box_password)}>
                        <label >Password</label>
                        <input autoComplete='off'  type="password" placeholder='Password' 
                        onFocus={(e)=>handleForCusSignIn(e)}
                        
                        />
                        <div className={clsx(cssModalSignIn.modal__sign_box_Alert)}>
                            <span>
                            </span>
                        </div>
                    </div>
                    <div className={clsx(cssModalSignIn.modal__sign_box_sign)}>
                        <div className={clsx(cssModalSignIn.modal__login)} onClick={logIn}>
                            Sign In
                        </div>
                    </div>
                </div>
                <div className={clsx(cssModalSignIn.modal__sign_container_close)} onClick={closeModalSignIn}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
            </div>
        </div>
    )
}