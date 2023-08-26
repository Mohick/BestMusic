import cssModalSignUp from './Modal Signup.module.scss';
export function showModalSignUp() {
    const formModal = document.querySelector(`.${cssModalSignUp.modal__sign}`)
    
    switch (!!formModal) {
        case !formModal.matches(`.${cssModalSignUp.show__modal_login}`):
            formModal.classList.add(`${cssModalSignUp.show__modal_login}`)
            break
    }
}

export function closeModalSignUp() {
    const formModal = document.querySelector(`.${cssModalSignUp.modal__sign}`)
    
    switch (!!formModal) {
        case formModal.matches(`.${cssModalSignUp.show__modal_login}`):
            formModal.classList.remove(`${cssModalSignUp.show__modal_login}`)
            break
    }
}