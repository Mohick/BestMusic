import cssSignUp from "../../Modal SignUp.module.scss";

export function handleOnblurpassword(e) {
  
    const parentElement = e.parentElement;
    const alert = parentElement.querySelector(`.${cssSignUp.modal__sign_box_Alert}`).
        querySelector(`span`)
    if (e.value.trim().length >= 8) {
        alert.innerText = "".trim()
        alert.style.color = "green"
        e.style.border = ".1rem solid green"
        return true
    } else {
        alert.innerText = "Password must be at least 8 characters"
        alert.style.color = "red"
        e.style.border = ".1rem solid red"
    }

}

