const Link = ({ link }) => {
    return (
        <li>
            <a href={link.url}>{link.name}</a>
        </li>
    )
}

export default Link;