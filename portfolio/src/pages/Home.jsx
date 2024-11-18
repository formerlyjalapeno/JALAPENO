import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home__container">
      <img src="/images/image1.png" alt="" />
      <section className="home__intel">
        <h2>
          @JALAPEÑO, <span>HERE.</span>
        </h2>
        <p>– "I used to think I was indecisive, but now I'm not too sure."</p>
        <article className="line__decoration">
          <img className="one" src="/images/lineonw.svg" alt="" />
          <ul className="hyperlinks__container">
            <Link
              to="https://www.linkedin.com/in/j-a-l-h-11b2992a5/"
              target="_blank"
            >
              <li>LinkedIn</li>
            </Link>
            <p>⋆</p>
            <Link to="https://www.instagram.com/sov.zone/" target="_blank">
              <li>Instagram</li>
            </Link>
            <p>⋆</p>
            <Link to="https://github.com/formerlyjalapeno" target="_blank">
              <li>Github</li>
            </Link>
          </ul>
          <img className="two" src="/images/linetwo.svg" alt="" />
        </article>
      </section>
    </main>
  );
};

export default Home;
