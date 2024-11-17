import Button from "../components/Button";
import about from "../components/about";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="aboutme__container">
      <h2>ABOUT ME</h2>
      <article className="img__box">
        <img src="/images/one.webp" alt="" />
        <img src="/images/two.webp" alt="" />
        <img src="/images/three.jpeg" alt="" />
      </article>
      <article className="about__box">
        <Link to="/hobbies">
          <button>HOBBIES</button>
        </Link>
        <article className="about__text">
          <div className="about__intel">
            <div className="name">
              <h3>JOWIELYNNE</h3>
              <h3>HOOGENSTRIJD</h3>
            </div>
            <div className="small__line"></div>
            <h4>17</h4>
          </div>
          <p>nicknames: any, be creative!</p>
        </article>
        <Link to="/moreaboutme">
          <button>MORE ABOUT ME</button>
        </Link>
      </article>
      <article className="img__box">
        <img src="/images/four.jpeg" alt="" />
        <img src="/images/five.jpeg" alt="" />
        <img src="/images/six.jpeg" alt="" />
      </article>
      <h2>WHO AM I?</h2>
    </main>
  );
};

export default About;
