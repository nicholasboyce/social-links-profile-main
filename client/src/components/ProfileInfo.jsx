import styles from './ProfileInfo.module.css';
import clsx from 'clsx';

const ProfileInfo = ({ info })=> {
    const profileStyles = clsx({
        [styles.profileInfo]: true,
    });

    return (
        <header className={profileStyles}>
            <img src={info.picture.url} alt={info.picture.alt} width="89" height="89" className={styles.profilePic} />
            <h1 className={styles.name}>{info.name}</h1>
            <p className={styles.location}>{info.location}</p>
            <p>{info.bio}</p>
        </header>
    )
}

export default ProfileInfo;