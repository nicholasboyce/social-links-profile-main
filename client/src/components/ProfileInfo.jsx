const ProfileInfo = ({ info })=> {
    return (
        <header>
            <img src={info.picture.url} alt={info.picture.alt} />
            <h1>{info.name}</h1>
            <p>{info.location}</p>
            <p>{info.bio}</p>
        </header>
    )
}

export default ProfileInfo;