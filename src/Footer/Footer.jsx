import clsx from "clsx"
import cssFooter from "./Footer.module.scss"
export default function Footer() {

    return (<footer className={clsx(cssFooter.form__box_footer)} >
        <div className={clsx(cssFooter.form__box_content)} id="gridSystems">
            < div className={clsx(cssFooter.form__content_profiles)}>
                <div className={clsx(cssFooter.form__box_title)}>
                    <h3>Profiles</h3>
                </div>
                <div className={clsx(cssFooter.form__content_description)}>
                    <ul className={clsx(cssFooter.form__box_description)}>
                        <li>
                            <p>Full Name: </p>
                            <p>Du Bao Nhan</p>
                        </li>
                        <li>
                            <p>DD/MM/YYYY: </p>
                            <p>03/09/2004</p>
                        </li>
                        <li>
                            <p>Address: </p>
                            <p>Long Thuan Commune, Hong Ngu District, Dong Thap Province</p>
                        </li>

                    </ul>
                </div>
            </div>
            <div className={clsx(cssFooter.form__content_contact)}>
                <div  className={clsx(cssFooter.form__box_title)}><h3>Contact</h3></div>
                <div className={clsx(cssFooter.form__content_description)}>
                    <ul className={clsx(cssFooter.form__box_description)}>
                        <li>
                            <p>Email: </p>
                            <p>haokietks7@gmail.om</p>
                        </li>
                        <li>
                            <p>Phone: </p>
                            <p>0354242XXX</p>
                        </li>
                    </ul>
                </div>

            </div>
            <div className={clsx(cssFooter.form__content_socialMedia)}>
                <div className={clsx(cssFooter.form__box_title)}><h3>Social media</h3></div>
                <div  className={clsx(cssFooter.form__content_description)}>
                    <ul  className={clsx(cssFooter.form__box_description)}>
                        <li>
                            <a href="https://www.facebook.com/profile.php?id=100037548151586" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook"></i>
                                Facebook
                            </a>

                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/d%C6%B0-nh%C3%A0n-33b4bb279/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin   "></i>
                                Linkedin
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </footer >)
}