
import cssDel from "./del account.module.scss"

export function showModalDelAccount() {
    const containerModal=document.querySelector(`.${cssDel.modal__delAccount}`).
    classList.toggle(cssDel.show__modal_del)
}