import React, { useCallback, useState } from 'react';

import * as styles from './SkillCard.module.css';

type SkillCardProps = {
    skillName: string;
};

const SkillCard: React.FC<SkillCardProps> = ({ skillName }) => {
    const [aktive, setAktive] = useState(false);

    return (
        <div className={`${styles.skillcard} ${aktive ? styles.skillcardAktive : styles.skillcardUnaktive}`} onClick={() => setAktive(!aktive)}>
            <div className={styles.text}>{skillName}</div>
        </div>
    );
};

export default SkillCard;