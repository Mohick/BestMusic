import cssHeader from "./header.module.scss"

export function handleSearch(value) {
    let boxDropdown = document.querySelector(`.${cssHeader.header__form_dropDown}`)
    let boxDropdownReponsive = document.querySelector(`.${cssHeader.header__form_dropDown_reposive}`)
    let listItemsReponsive = boxDropdownReponsive.querySelector('ul')

    let listItems = boxDropdown.querySelector('ul')
    function removeAccents(str) {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }
    const lowerCaseValue = value.value.toLowerCase().trim();
    const valueInput = removeAccents(lowerCaseValue);
    fetch("http://localhost:3000/Discover")
        .then(function (response) {
            return response.json()
        })
        .then((response) => {
            return response.reduce((sum, data) => {
                let getData = [data.title]
                return sum.concat(getData)
            }, [])
        })
        .then((response) => {

            const rmAccent = response.map((removeAccent) => {
                return removeAccents(removeAccent.toLowerCase())

            })
            return {
                removeAccents: rmAccent,
                response: response
            }
        })
        .then((response) => {
            let sum = []

            for (let i = 0; i < response.removeAccents.length; i++) {
                if (response.removeAccents[i].startsWith(`${valueInput}`)) {
                    sum.push(response.response[i])
                }
            }
            return sum
        })
        .then((response) => {
            let linkHref = location.origin

            let items = response.map((search) => {
                let listItem = `<li>
                <a href="${linkHref}/song ${search}" >${search}</a>
                </li>`
                return listItem
            })
            return items
        })
        .then((response) => {
            let changesToString = response.toString().replace(/,/g, "");
            listItems.innerHTML = changesToString
            listItemsReponsive.innerHTML = changesToString
        });
}

export function handleForcusSearch(e) {
    const tagParent = e.parentElement
    let boxDropdown = tagParent.querySelector(`.${cssHeader.header__form_dropDown}`)
    boxDropdown.style.display = 'block'
    let inputSearch = tagParent.querySelector('input[type="search"]')
    boxDropdown.style.width = `${e.offsetWidth}px`
    boxDropdown.style.opacity = 1
}

export function handleBlurSearch(e) {
    const tagParent = e.parentElement
    let boxDropdown = tagParent.querySelector(`.${cssHeader.header__form_dropDown}`)
    boxDropdown.style.width = `${e.offsetWidth}px`
    boxDropdown.style.opacity = 0
    setTimeout(() => {
        boxDropdown.style.display = 'none'
    }, 500);
}

export function handleForcusSearchReponsive(e) {
    const tagParent = e.parentElement
    let boxDropdown = tagParent.querySelector(`.${cssHeader.header__form_dropDown_reposive}`)
    boxDropdown.style.display = 'block'
    boxDropdown.style.width = `${e.offsetWidth}px`
    boxDropdown.style.opacity = 1
}

export function handleBlurSearchReponsive(e) {
    const tagParent = e.parentElement
    let boxDropdown = tagParent.querySelector(`.${cssHeader.header__form_dropDown_reposive}`)
    boxDropdown.style.width = `${e.offsetWidth}px`
    boxDropdown.style.opacity = 0
    setTimeout(() => {
        boxDropdown.style.display = 'none'
    }, 500);
    
}

