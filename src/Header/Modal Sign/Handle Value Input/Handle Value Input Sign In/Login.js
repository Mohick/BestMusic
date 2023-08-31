
import cssSignIn from "../../Modal SignIn.module.scss"
import Header from "../../../Header";
import { closeModalSignIn } from "../../show modal sign in";
export function logIn() {

    const formUserName = document.querySelector(`.${cssSignIn.modal__sign_box_useName}`)
    const inputUserName = formUserName.querySelector(`input`)
    const AlertUserName = formUserName.querySelector(`.${cssSignIn.modal__sign_box_Alert}`).querySelector(`span`)
    // /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Input Password
    const formPassWord = document.querySelector(`.${cssSignIn.modal__sign_box_password}`)
    const inputPassWord = formPassWord.querySelector(`input`)


    let regexCheckEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const api = "http://localhost:3000/Account"
    fetch(api)
        .then(res => res.json())
        .then(res => {
            const findUserName = res.find(userName => {
                return userName.username == inputUserName.value.trim()
            })
            const findEmail = res.find(email => {
                return email.email == inputUserName.value.trim()
            })

            const checkEmailPassWord =
                !!findEmail ? findEmail.password == inputPassWord.value.trim() : undefined
            const checkAccountlPassWord =
                !!findUserName ? findUserName.password == inputPassWord.value.trim() : undefined

            return {
                findUserName,
                findEmail,
                checkEmailPassWord,
                checkAccountlPassWord
            }
        })
        .then(res => {
            if (res.findUserName && res.checkAccountlPassWord) {
                closeModalSignIn();
                const account = {
                    username: res.findUserName.username,
                    email: res.findUserName.email,
                    password: res.findUserName.password,
                };
                var accountString = JSON.stringify(account);
                var date = new Date();
                date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
                var expires = "expires=" + date.toUTCString();
                document.cookie = "Account=" + accountString + ";" + expires;
                location.reload()

            } else if (res.findEmail && res.checkEmailPassWord) {
                const account = {
                    username: res.findEmail.username,
                    email: res.findEmail.email,
                    password: res.findEmail.password,
                };

                closeModalSignIn();
                var accountString = JSON.stringify(account);
                var date = new Date();
                date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
                var expires = "expires=" + date.toUTCString();
                document.cookie = "Account=" + accountString + ";" + expires;
                location.reload()
            }
            else {
                AlertUserName.style.color = "red"
                inputPassWord.style.border = ".1rem solid red"
                inputUserName.style.border = ".1rem solid red"
                AlertUserName.innerHTML = "wrong account or password !"
            }
        })
}