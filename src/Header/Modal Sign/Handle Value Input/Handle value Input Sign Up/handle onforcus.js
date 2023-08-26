import cssSignUp from "../../Modal SignUp.module.scss";

export function handleOnForcus(e) {
    const parentElement = e.target.parentElement;
    const alert = parentElement.querySelector(`.${cssSignUp.modal__sign_box_Alert}`).
        querySelector(`span`)
    alert.innerText = "".trim()
    alert.style.color = "green"
    e.target.style.border = ".1rem solid green"
}