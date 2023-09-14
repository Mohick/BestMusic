
import cssChangesPassword from "./changes PassWord.module.scss"

export function showModalChangePassWord() {
    const containerModal=document.querySelector(`.${cssChangesPassword.modal__changesPassWord}`).
    classList.toggle(cssChangesPassword.show__modal_changesPassword)
}