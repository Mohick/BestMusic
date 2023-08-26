import cssHeader from "../header.module.scss";
import cssModalTablet from "./Modal Tablet.module.scss";
import cssModalMobi from "./Modal Mobi.module.scss";

export function handleModal(e) {
    const heightHeader = document.querySelector(`.${cssHeader.header}`).clientHeight
    const tabletModal = document.querySelector(`.${cssModalTablet.modal__tablet}`)
    const mobiModal = document.querySelector(`.${cssModalMobi.modal__mobi}`)
    const sizeCreen = screen.width
    let tagBar1 = document.querySelector(`.${cssHeader.header__menu_bar1}`)
    let tagBar2 = document.querySelector(`.${cssHeader.header__menu_bar2}`)
    let tagBar3 = document.querySelector(`.${cssHeader.header__menu_bar3}`)

    if (!tagBar1.matches(`.${cssHeader.changesFormat1}`) &&
        !tagBar2.matches(`.${cssHeader.changesFormat2}`) &&
        !tagBar3.matches(`.${cssHeader.changesFormat3}`)) {
        tagBar1.classList.add(`${cssHeader.changesFormat1}`)
        tagBar2.classList.add(`${cssHeader.changesFormat2}`)
        tagBar3.classList.add(`${cssHeader.changesFormat3}`)
        tagBar1.classList.remove(`${cssHeader.formatDefault1}`)
        tagBar2.classList.remove(`${cssHeader.formatDefault2}`)
        tagBar3.classList.remove(`${cssHeader.formatDefault3}`)
    } else {
        tagBar1.classList.remove(`${cssHeader.changesFormat1}`)
        tagBar2.classList.remove(`${cssHeader.changesFormat2}`)
        tagBar3.classList.remove(`${cssHeader.changesFormat3}`)
        tagBar1.classList.add(`${cssHeader.formatDefault1}`)
        tagBar2.classList.add(`${cssHeader.formatDefault2}`)
        tagBar3.classList.add(`${cssHeader.formatDefault3}`)
    }
    window.onresize = function () {
        switch (true) {
            case window.innerWidth <= 880 && window.innerWidth >= 702:
                mobiModal.classList.remove(`${cssModalMobi.show_modal}`)
                tagBar1.classList.remove(`${cssHeader.changesFormat1}`)
                tagBar2.classList.remove(`${cssHeader.changesFormat2}`)
                tagBar3.classList.remove(`${cssHeader.changesFormat3}`)
                tagBar1.classList.add(`${cssHeader.formatDefault1}`)
                tagBar2.classList.add(`${cssHeader.formatDefault2}`)
                tagBar3.classList.add(`${cssHeader.formatDefault3}`)
                break;
            case window.innerWidth <= 701:
                tagBar1.classList.remove(`${cssHeader.changesFormat1}`)
                tagBar2.classList.remove(`${cssHeader.changesFormat2}`)
                tagBar3.classList.remove(`${cssHeader.changesFormat3}`)
                tabletModal.classList.remove(`${cssModalTablet.show_modal}`)
                tagBar1.classList.add(`${cssHeader.formatDefault1}`)
                tagBar2.classList.add(`${cssHeader.formatDefault2}`)
                tagBar3.classList.add(`${cssHeader.formatDefault3}`)
                break;
        }
    }

    if (sizeCreen <= 880 && sizeCreen >= 702) {
        tabletModal.style.top = `${heightHeader}px`
        if (tabletModal.matches(`.${cssModalTablet.show_modal}`)) {
            setTimeout(() => {
                tabletModal.classList.add(`${cssModalTablet.close_modal}`)
                setTimeout(() => {
                    tabletModal.classList.remove(`${cssModalTablet.show_modal}`)

                }, 400);
            }, 0);
        } else {
            setTimeout(() => {
                tabletModal.classList.remove(`${cssModalTablet.close_modal}`)
                setTimeout(() => {
                    tabletModal.classList.add(`${cssModalTablet.show_modal}`)
                }, 400)
            }, 0)

        }
    }
    if (sizeCreen <= 701) {
        mobiModal.style.top = `${heightHeader}px`
        if (mobiModal.matches(`.${cssModalMobi.show_modal}`)) {
            setTimeout(() => {
                mobiModal.classList.add(`${cssModalMobi.close_modal}`)
                setTimeout(() => {
                    mobiModal.classList.remove(`${cssModalMobi.show_modal}`)
                }, 400)
            }, 0)
        } else {
            setTimeout(() => {
                mobiModal.classList.add(`${cssModalMobi.show_modal}`)
                setTimeout(() => {
                    mobiModal.classList.remove(`${cssModalMobi.close_modal}`)
                }, 0)
            }, 0);
        }
    }
}