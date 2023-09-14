
import cssChangesPassword from "./changes PassWord.module.scss"

export function closeModalChangesPassword() {
    const containerModal=document.querySelector(`.${cssChangesPassword.modal__changesPassWord}`).
    classList.remove(cssChangesPassword.show__modal_changesPassword)
}