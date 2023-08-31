
export function checkUser() {
    const cookies = document.cookie
    const arrCookie = cookies.split(";")
    let cookieUser = ""
    for (let i = 0; i < arrCookie.length; i++) {

        const cookie = arrCookie[i]
        const hashMapCookies = cookie.split("=")
        const keys = hashMapCookies[0]
        const values = hashMapCookies[1]
        if (keys.trim() == "Account".trim()) {
            cookieUser = values
            break
        } else {
            cookieUser = false
        }
    }

    return !!cookieUser ? JSON.parse(cookieUser) : cookieUser
}