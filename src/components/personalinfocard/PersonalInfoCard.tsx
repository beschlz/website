import React from 'react';

import * as styles from './PersonalInfoCard.module.css';
import ProfilePic from '../../images/Bild.jpg';

const PersonalInfoCard: React.FC = () => {
    return (
        <div className={styles.infocard}>
            <div className={styles.gridWrapper}>
                <div className={`${styles.profilePic} ${styles.leftColumn}`}>
                    <img loading='lazy' alt='Profil_Bild' className={styles.img} src={ProfilePic} />
                </div>
                <div className={styles.rightColum}>
                    <p className={styles.titleText}>Hey!</p>
                    <p className={styles.descriptionText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore
                        magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                        et justo duo dolores et ea rebum.</p>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfoCard;