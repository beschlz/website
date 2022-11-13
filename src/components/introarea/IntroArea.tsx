import React from 'react';
import * as styles from './IntroArea.module.css';

const IntroArea: React.FC = () => {
    return (
        <div className={styles.introSection} id='introsection'>
            <h1>Bendt Schulz</h1>
            <h2>Software Developer</h2>
            <div className={styles.linkBlock}>
                <p className={styles.label}>LinkedIn</p>
                <p className={styles.link}>linkedin.com/in/bendt-schulz</p>
            </div>
            <div className={styles.linkBlock}>
                <p className={styles.label}>GitHub</p>
                <p className={styles.link}>github.com/beschlz</p>
            </div>
            <div className={styles.linkBlock}>
                <p className={styles.label}>Mail</p>
                <p className={styles.link}>bendt@schulz-hamburg.de</p>
            </div>
            <div className={styles.linkBlock}>
                <p className={styles.label}>Location</p>
                <p className={styles.link}>Hamburg</p>
            </div>
        </div>
    )
};

export default IntroArea;