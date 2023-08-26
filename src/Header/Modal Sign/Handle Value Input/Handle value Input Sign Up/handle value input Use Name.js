import cssSignUp from "../../Modal SignUp.module.scss";

export function handleOnblurUseName(e) {
    e.value.trim();
    const parentElement = e.parentElement;
    const alert = parentElement.querySelector(`.${cssSignUp.modal__sign_box_Alert}`).
        querySelector(`span`)
    const api = 'http://localhost:3000/Account'
    const getApi = fetch(api)
        .then(res => res.json())
        .then(data => {

            return data.find(data => {
                return data.username == e.value.trim()
                //if username input == with account username output true
            })
        })
        .then(data => !!data) // true if username input == with account username output
        .then(data => {
            if (data) {
                alert.innerText = "This Use Name has been Used !".trim()
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
                if (e.value.trim().length >= 6) {
                    alert.innerText = "".trim()
                    alert.style.color = "green"
                    e.style.border = ".1rem solid green"
                    return data
                    
                } else {
                    alert.innerText = "Please enter a minimum of 6 characters !".trim()
                    alert.style.color = "red"
                    e.style.border = ".1rem solid red"
                    return data

                }
                
            }
            else {
                alert.innerText = "This Use Name has been Used !".trim()
                alert.style.color = "red"
                e.style.border = ".1rem solid red"
                return data

            }
        })
        .then(data => {
            if (!data && e.value.trim().length >= 6) {
                let regex = /\s/;
                if (!regex.test(e.value.trim())) {
                    alert.innerText = "".trim()
                    alert.style.color = "green"
                    e.style.border = ".1rem solid green"


                } else {
                    alert.innerText = "Please remove spaces between characters !".trim()
                    alert.style.color = "red"
                    e.style.border = ".1rem solid red"


                }
            }
        })


}
