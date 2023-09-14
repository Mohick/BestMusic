import cssOtherItems from "../render random product.module.scss";
export function nextStep() {
    const tagItems = document.querySelector(`.${cssOtherItems.linkItems}`)
    window.location = tagItems.href
}