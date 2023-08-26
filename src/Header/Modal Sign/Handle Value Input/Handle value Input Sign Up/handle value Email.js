import cssSignUp from "../../Modal SignUp.module.scss";

export function handleOnblurEmail(e) {
    const parentElement = e.parentElement;
    const alert = parentElement.querySelector(`.${cssSignUp.modal__sign_box_Alert}`).
        querySelector(`span`)
    const api = 'http://localhost:3000/Account'
    fetch(api)
        .then(res => res.json())
        .then(data => {

            return data.find(data => {
                return data.email == e.value.trim()
                //if email input == with Email email output true
            })
        })
        .then(data => !!data) // true if email input == with Email email output
        .then(data => {
            if (data) {
                alert.innerText = "This Email has been Used !".trim()
                alert.style.color = "red"
                e.style.border = ".1rem solid red"
                return data
            }
            else {
                alert.innerText = "".trim()
                alert.style.color = "green"
                e.style.border = ".1rem solid green"
                return data

            }
        })
       
        .then(data => {
            if (!data) {
                let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (regex.test(e.value.trim())) {
                    alert.innerText = "".trim()
                    alert.style.color = "green"
                    e.style.border = ".1rem solid green"


                } else {
                    alert.innerText = "Please enter your email !".trim()
                    alert.style.color = "red"
                    e.style.border = ".1rem solid red"


                }
            }
        })


}
