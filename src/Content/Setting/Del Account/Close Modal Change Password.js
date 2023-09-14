
import cssDel from "./del account.module.scss"


export function closeModalDelAccount() {
    const containerModal=document.querySelector(`.${cssDel.modal__delAccount}`).
    classList.remove(cssDel.show__modal_del)
}