import { useCallback, useState } from 'react';

import styles from './SkillSelector.module.css';

type SkillSelectorProps = {
    skillName: string;
    acitve: boolean;
    onClick: () => void;
};

const SkillSelector: React.FC<SkillSelectorProps> = ({ skillName, acitve, onClick }) => {

    return (
        <div className={`${styles.skillSelector} ${acitve ? styles.skillSelectorAktive : styles.skillSelectorUnaktive}`} onClick={onClick}>
            <div className={styles.text}>{skillName}</div>
        </div>
    );
};

export default SkillSelector;