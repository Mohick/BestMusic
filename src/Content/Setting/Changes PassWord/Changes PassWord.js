import axios from "axios"
import { checkUser } from "../../../Header/findUser"
import cssChangesPassword from "./changes PassWord.module.scss"

export function changesPassword() {
    let boxCurrentPassword = document.querySelector(`.${cssChangesPassword.modal__changesPassWord_box_useName}`)
    let inputCurrentPassword = boxCurrentPassword.querySelector("input")
    let boxCurrentAlert = boxCurrentPassword.querySelector(`.${cssChangesPassword.modal__changesPassWord_box_Alert}`).
        querySelector('span')
    // 
    let newPassword = document.querySelector(`.${cssChangesPassword.modal__changesPassWord_box_password}`)
    let inputNewPassword = newPassword.querySelector("input")
    let boxNewAlert = newPassword.querySelector(`.${cssChangesPassword.modal__changesPassWord_box_Alert}`).
        querySelector('span')
    let boxRe_enterPassword = document.querySelector(`.${cssChangesPassword.modal__changesPassWord_box_re_ente_new_password}`)
    let inputRe_EnterPassword = boxRe_enterPassword.querySelector("input")

    fetch("http://localhost:3000/Account")
        .then((response) => response.json())
        .then((response) => {
            const findUser = response.find(user => user.username == checkUser().username)
            if (findUser.username == checkUser().username &&
    findUser.password == checkUser().password &&
                findUser.email == checkUser().email) {
                return findUser
            }
        })
        .then((response) => {
            if (response.password == inputCurrentPassword.value.trim()) {
                boxCurrentAlert.innerHTML = ""
                inputCurrentPassword.style.border = '.1REM solid green'
            } else {
                boxCurrentAlert.innerHTML = "Wrong password, please try again"
                inputCurrentPassword.style.border = '.1REM solid red'
                boxCurrentAlert.style.color = "red"
            }
            if (inputNewPassword.value.trim().length >= 6) {
                boxNewAlert.innerHTML = ""
                inputNewPassword.style.border = '.1REM solid green'
            } else {
                boxNewAlert.innerHTML = " new Passwords greater than 6 charater"
                inputNewPassword.style.border = '.1REM solid red'
                boxNewAlert.style.color = "red"
            }
            if (inputRe_EnterPassword.value.trim() == inputNewPassword.value.trim() && inputRe_EnterPassword.value.trim().length >= 6) {
                boxNewAlert.innerHTML = ""
                inputRe_EnterPassword.style.border = '.1REM solid green'
            } else {
                boxNewAlert.innerHTML = " Wrong New password, please try again"
                inputRe_EnterPassword.style.border = '.1REM solid red'
                boxNewAlert.style.color = "red"
            }
            if (inputNewPassword.value.trim() == inputRe_EnterPassword.value.trim() && inputRe_EnterPassword.value.trim().length >= 6 &&
                response.password == inputCurrentPassword.value.trim()) {
                response.password = inputNewPassword.value.trim()
                const url = `http://localhost:3000/Account/${response.id}`
                const config = {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    timeout: 0
                }
                const account = {
                    username: response.username,
                    email: response.email,
                    password: response.password,
                };

                var accountString = JSON.stringify(account);
                var date = new Date();
                date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
                var expires = "expires=" + date.toUTCString();
                document.cookie = "Account=" + accountString + ";" + expires;
                location.href ='/';
                axios.put(url, response, config)
            }
        });



}