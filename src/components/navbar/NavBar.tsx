import React from "react";
import * as styles from './NavBar.module.css';

import GermanFlag from '../../images/German_Flag_Icon.svg';
import LanuageSwitcher from "../languageswitcher/LanguageSwitcher";

const NavBar: React.FC = () => {
    return (
        <div className={styles.navbar}>
            <ul>
                <li>
                    Über mich
                </li>
                <li>
                    Stationen
                </li>
                <li>
                    Skills
                </li>
                <li>
                    Impressum
                </li>
                <div className={styles.flag}>
                    <LanuageSwitcher />
                </div>
            </ul>
        </div >
    );
};

export default NavBar;