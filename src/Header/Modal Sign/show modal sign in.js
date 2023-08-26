import cssModalSignIn from './Modal SignIn.module.scss';
export function showModalSignIn() {
    const formModal = document.querySelector(`.${cssModalSignIn.modal__sign}`)
    
    switch (!!formModal) {
        case !formModal.matches(`.${cssModalSignIn.show__modal_login}`):
            formModal.classList.add(`${cssModalSignIn.show__modal_login}`)
            break
    }
}

export function closeModalSignIn() {
    const formModal = document.querySelector(`.${cssModalSignIn.modal__sign}`)
    
    switch (!!formModal) {
        case formModal.matches(`.${cssModalSignIn.show__modal_login}`):
            formModal.classList.remove(`${cssModalSignIn.show__modal_login}`)
            break
    }
}