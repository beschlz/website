import React from 'react';

import * as styles from './Station.module.css';

type StationPros = {
    year: string;
    text: string;
};

const Station: React.FC<StationPros> = ({ year, text }) => {
    return (
        <div className={styles.station}>
            <div></div>
            <div>
                <p>{year}</p>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Station;