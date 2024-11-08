const Project = ({ image, title, date, description }) => {
    return (
        <article>
            <img src={image} alt="" />
            <h1>{title}</h1>
            <h2>{date}</h2>
            <p>{description}</p>
        </article>
    );
}

export default Project;