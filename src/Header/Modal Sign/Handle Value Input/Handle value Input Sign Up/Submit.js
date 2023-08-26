import cssSignUp from "../../Modal SignUp.module.scss";
import { handleOnblurUseName } from "./handle value input Use Name";
import { handleOnblurEmail } from "./handle value Email";
import { handleOnblurpassword } from "./handle value password";
import { handleOnblurRe_enterPassword } from "./handle value re-enter password ";
import axios from "axios";
export function submitSignUp(e) {
    // form username
    const username = document.querySelector(`.${cssSignUp.modal__sign_box_useName}`)
    const inputUsername = username.querySelector('input')
    // form email
    const email = document.querySelector(`.${cssSignUp.modal__sign_box_email}`);
    const inputEmail = email.querySelector('input')
    // form password
    const password = document.querySelector(`.${cssSignUp.modal__sign_box_password}`);
    const inputPassword = password.querySelector('input')
    // form confirm password 
    const re__enter_password = document.querySelector(`.${cssSignUp.modal__sign_box_re_enter_pasword}`);
    const inputRe__enter_password = re__enter_password.querySelector('input')

    handleOnblurUseName(inputUsername)
    handleOnblurEmail(inputEmail)
    handleOnblurpassword(inputPassword)
    handleOnblurRe_enterPassword(inputRe__enter_password)

    const api = "http://localhost:3000/Account"

    fetch(api)
        .then(res => res.json())
        .then(data => {
            return {
                data: data,
                check: {}
            }
        })
        .then((data) => {
            let regexCheckSpace = /\s/;
            let regexCheckEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const userAccount = data.data.find(user => {
                return user.username === inputUsername.value.trim()
            })
            const emailAccount = data.data.find(user => {
                return user.email === inputEmail.value.trim()
            })
            if (!!userAccount == false &&
                !!emailAccount == false &&
                inputPassword.value.trim() == inputRe__enter_password.value.trim() &&
                inputUsername.value.trim().length >= 6 &&
                !regexCheckSpace.test(inputUsername.value.trim()) &&
                regexCheckEmail.test(inputEmail.value.trim()) &&
                inputPassword.value.trim().length >= 8
            ) {
                data.check.userName = true;
                data.check.email = true;
                data.check.password = true;
                return data;
            } else {
                data.check.userName = false;
                data.check.email = false;
                data.check.password = false;
                return data;
            }
        })
        .then((data) => {
            if (data.check.userName && data.check.email && data.check.password) {
                const obUser = {
                    username: inputUsername.value.trim(),
                    email: inputEmail.value.trim(),
                    password: inputPassword.value.trim(),
                    playList: [

                    ]
                }
                axios.post(api, obUser)
                    .then(function (response) {
                        // Xử lý kết quả trả về
                        console.log(response.data);
                    })
                    .catch(function (error) {
                        // Xử lý lỗi
                        console.log(error);
                    });

            } else {
                console.log(false);
            }
        })
}