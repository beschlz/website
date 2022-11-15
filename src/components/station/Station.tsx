import React from 'react';

import * as styles from './Station.module.css';

type StationPros = {
    year: string;
    text: string;
};

const Station: React.FC<StationPros> = ({ year, text }) => {
    return (
        <div className={styles.station}>
            <div className={styles.cirlceAndLine}>
                <span className={styles.circle}></span>
                <div className={styles.line}></div>
            </div>
            <div className={styles.textContainer}>
                <p className={styles.title}>{year}</p>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Station;