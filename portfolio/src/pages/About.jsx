const About = () => {
    return (
        <main className="aboutme__container">
            <h2>ABOUT ME</h2>
            <article className="img__box">
                <img src="/images/image-placeholder.png" alt="" />
                <img src="/images/image-placeholder.png" alt="" />
                <img src="/images/image-placeholder.png" alt="" />
            </article>
            <article className="about__box">
                <button>HOBBIES</button>
                <article className="about__text">
                    <div className="about__intel">
                        <div className="name">
                            <h3>JOWIELYNNE</h3>
                            <h3>HOOGENSTRIJD</h3>
                        </div>
                        <h4>| 17</h4>
                    </div>
                    <p>nicknames: any, be creative!</p>
                </article>
                <button>MORE ABOUT ME</button>
            </article>
            <article className="img__box">
                <img src="/images/image-placeholder.png" alt="" />
                <img src="/images/image-placeholder.png" alt="" />
                <img src="/images/image-placeholder.png" alt="" />
            </article>
            <h2>WHO AM I?</h2>
        </main>
    );
}

export default About;