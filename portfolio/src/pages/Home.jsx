const Home = () => {
    return (
        <main className="home__container">
            <img src="/images/image1.png" alt="" />
            <section className="home__intel">
                <h2>@JALAPEÑO, <span>HERE.</span></h2>
                <p>— "Quote here."</p>
                <ul className="hyperlinks__container">
                    <li>LinkedIn</li>
                    <p>⋆</p>
                    <li>Instagram</li>
                    <p>⋆</p>
                    <li>Github</li>
                </ul>
            </section>
        </main>
    );
}

export default Home;