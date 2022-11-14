import React from "react";
import Hamburger from 'hamburger-react'
import LanuageSwitcher from "../languageswitcher/LanguageSwitcher";

import * as styles from './NavBar.module.css';

const NavBar: React.FC = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.enableWhenSmall}>
                <Hamburger />
            </div>
            <ul className={styles.disableWhenSmall}>
                <li>
                    Über mich
                </li>
                <li >
                    Stationen
                </li>
                <li>
                    Skills
                </li>
                <li>
                    Impressum
                </li>
            </ul>
        </div >
    );
};

export default NavBar;