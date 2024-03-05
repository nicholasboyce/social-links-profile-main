import Link from "./Link";
import styles from './Links.module.css';

const Links = ({ data }) => {
    const links = data;
    return (
        <ul className={styles.list}>
            {links.map(link => <Link key={link.id} link={link}/>)}
        </ul>
    )
}

export default Links;