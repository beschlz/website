import React from 'react';

import * as styles from './PersonalInfoCard.module.css';
import ProfilePic from '../../images/Bild.jpg';

const PersonalInfoCard: React.FC = () => {
    return (
        <div className={styles.infocard}>
            <div className={styles.gridWrapper}>
                <div className={`${styles.profilePic} ${styles.leftColumn}`}>
                    <img className={styles.img} src={ProfilePic} />
                </div>
                <div className={styles.rightColum}>

                </div>
            </div>
        </div>
    );
};

export default PersonalInfoCard;