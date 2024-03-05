import styles from './Link.module.css';

const Link = ({ link }) => {
    return (
        <li className={styles.link}>
            <a href={link.url}>{link.name}</a>
        </li>
    )
}

export default Link;