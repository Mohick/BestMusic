import axios from "axios"
import { checkUser } from "../../../Header/findUser"


export function delAccount() {
    
        fetch("http://localhost:3000/Account")
            .then((response) => response.json())
            .then((response) => {
                const findUser = response.find(user => user.username == checkUser().username)
                if (findUser.username == checkUser().username &&
                    findUser.password == checkUser().password &&
                    findUser.email == checkUser().email) {
                    return findUser
                }
            })
            .then((response) => {
               
                    const url = `http://localhost:3000/Account/${response.id}`
                    axios.delete(url)
                    document.cookie = "Account="
                    location.href =  '/';
                
            });
    
    

}