import ProfileInfo from "./ProfileInfo";
import Links from "./Links";

const Card = (props) => {
    const { data } = props;

    return (
        <article aria-label="Profile card">
            <ProfileInfo info={data.info} />
            <Links data={data.links} />
        </article>
    )
}

export default Card;