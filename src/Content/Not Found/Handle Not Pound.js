import cssNotFound from './Not Found.module.scss'
export function handleNotFound() {
    let sum = 0

    let description = document.querySelector(`.${cssNotFound.notPound__Content__description}`)

    function writeIntroduce(message) {
        if (sum < message.length) {
            let text = message.slice(0, sum + 1).join("")
            description.innerHTML = text
            sum++
            setTimeout(function () { writeIntroduce("'m developers of pages Best Music".split("")); }, 200);
        } else {
            setTimeout(() => {
                delText("'m developers of pages Best Music".split(""))
            }, 1000);
        }
    }
    function delText(message) {
        if (sum > 0) {
            let text = message.slice(0, sum - 1).join("")
            description.innerHTML = text
            sum--
            setTimeout(function () { delText("'m developers of pages Best Music".split("")); }, 200);
        } else {
            writeGuideOpenSetting(" think you should create an account so you can log in to the settings !".split(""))
        }
    }

    function writeGuideOpenSetting(textGuide) {
        if (sum < textGuide.length) {
            let text = textGuide.slice(0, sum + 1).join("")
            description.innerHTML = text
            sum++
            setTimeout(function () { writeGuideOpenSetting(" think you should create an account so you can log in to the settings !".split("")); }, 200);
        }
    }
    writeIntroduce("'m developers of pages Best Music".split(""))
}