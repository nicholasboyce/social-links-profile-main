import ProfileInfo from "./ProfileInfo";
import Links from "./Links";
import styles from './Card.module.css';
import clsx from 'clsx';

const Card = (props) => {
    const { data } = props;
    const cardStyles = clsx({
        [styles.card]: true,
    });

    return (
        <article aria-label="Profile card" className={cardStyles}>
            <ProfileInfo info={data.info} />
            <Links data={data.links} />
        </article>
    )
}

export default Card;