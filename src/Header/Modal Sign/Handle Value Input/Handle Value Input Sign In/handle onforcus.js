
import cssSignIn from "../../Modal SignIn.module.scss"

export function handleForCusSignIn(e) {
    const parentElement = e.target.parentElement;
    const alert = parentElement.querySelector(`.${cssSignIn.modal__sign_box_Alert}`).
        querySelector(`span`)
    alert.innerText = "".trim()
    alert.style.color = "green"
    e.target.style.border = ".1rem solid green"
}