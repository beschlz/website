import Hamburger from "../hamburger/Hamburger";
import styles from './NavBar.module.css';

const NavBar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.enableWhenSmall}>
                <Hamburger />
            </div>
            <ul className={styles.disableWhenSmall}>
                <li>
                    <a href="#aboutme">Über mich</a>
                </li>
                <li>
                    <a href="#stations">Stationen</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="/impressum">Impressum</a>
                </li>
            </ul>
        </nav >
    );
};

export default NavBar;