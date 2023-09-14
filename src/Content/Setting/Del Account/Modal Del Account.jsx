
import clsx from "clsx"
import cssDel from "./del account.module.scss"
import { delAccount } from "./Del Account"
import { closeModalDelAccount } from "./Close Modal Change Password"
function ModalDel() {
    return (
        <div className={clsx(cssDel.modal__delAccount)} onClick={closeModalDelAccount}>
            <div className={clsx(cssDel.modal__delAccount_container)} onClick={e => e.stopPropagation()}>
                <div className={clsx(cssDel.modal__delAccount_box_title)}>
                    <h2>you has want delete account </h2>
                </div>
                <div className={clsx(cssDel.modal__delAccount_box_question)}>
                    <div className={clsx(cssDel.modal__delAccount_reponse_no)}>
                        <button>
                            no
                        </button>
                    </div>
                    <div className={clsx(cssDel.modal__delAccount_reponse_yes)} onClick={delAccount}>
                        <button>
                            Yes
                        </button>
                    </div>
                </div>
                <div className={clsx(cssDel.modal__delAccount_container_close)} onClick={closeModalDelAccount}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
            </div>
        </div>
    )

}

export default ModalDel