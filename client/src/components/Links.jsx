import Link from "./Link";

const Links = ({ data }) => {
    const links = data;
    return (
        <ul>
            {links.map(link => <Link link={link}/>)}
        </ul>
    )
}

export default Links;