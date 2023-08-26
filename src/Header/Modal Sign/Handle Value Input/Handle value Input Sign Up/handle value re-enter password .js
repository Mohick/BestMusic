import cssSignUp from "../../Modal SignUp.module.scss";

export function handleOnblurRe_enterPassword(e) {
    const parentElement = e.parentElement;
    const alert = parentElement.querySelector(`.${cssSignUp.modal__sign_box_Alert}`).
        querySelector(`span`)
    const valuePassword = document.querySelector(`.${cssSignUp.modal__sign_box_password}`).
        querySelector(`input`)
    if (e.value.trim() >= 8) {
        alert.innerText = "".trim()
        alert.style.color = "green"
        e.style.border = ".1rem solid green"
        return true
    } else {
        alert.innerText = " Please Check again password !"
        alert.style.color = "red"
        e.style.border = ".1rem solid red"
    }
    if (e.value.trim() == valuePassword.value.trim() && e.value.trim() >= 8) {
        alert.innerText = "".trim()
        alert.style.color = "green"
        e.style.border = ".1rem solid green"
        return true
    } else {
        alert.innerText = " Please Check again password!"
        alert.style.color = "red"
        e.style.border = ".1rem solid red"

    }

}

