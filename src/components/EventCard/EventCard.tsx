import styles from "./EventCard.module.css";
import hat from '../../images/hat.svg';
import wrench from '../../images/wrench.svg';


type EventCardProps = {
    type: "education" | "job";
    text: string;
};

const EventCard: React.FC<EventCardProps> = ({ text, type }) => {
    return (
        <div className={styles.card}>
            <img className={styles.icon} src={type === "education" ? hat : wrench} />
            <div className={styles.text}>{text}</div>
        </div>
    );
};

export default EventCard;