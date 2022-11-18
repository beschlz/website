
import styles from './SkillCard.module.css';

type SkillCardProps = {
    skillName: string;
};

const SkillCard: React.FC<SkillCardProps> = ({ skillName }) => {
    return (
        <div className={styles.card}>
            <p className={styles.text}>{skillName}</p>
        </div>
    );
};

export default SkillCard;