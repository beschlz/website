import React, { useCallback, useState } from 'react';

import * as styles from './SkillCard.module.css';

type SkillCardProps = {
    skillName: string;
    acitve: boolean;
    onClick: () => void;
};

const SkillCard: React.FC<SkillCardProps> = ({ skillName, acitve, onClick }) => {

    return (
        <div className={`${styles.skillcard} ${acitve ? styles.skillcardAktive : styles.skillcardUnaktive}`} onClick={onClick}>
            <div className={styles.text}>{skillName}</div>
        </div>
    );
};

export default SkillCard;