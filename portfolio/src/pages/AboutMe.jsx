import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <>
      <main className="detail__container">
        <h2>MORE ABOUT ME</h2>
        <section className="detail__box">
          <article className="about__one">
            <img src="/images/image-placeholder.png" />
            <h3>WHO AM I???</h3>
            <p>
              So here's the funny part, I don't know either. Haha, kidding!!
            </p>
            <br />
            <p>
              I like exploring and trying out new things, with a limit, depending on what it is, of course.
              
            </p>
          </article>

          <article className="about__two">
            <h3>NO IDEA WHAT TO PUT HERE!</h3>
            <p>Lorem ipsum dolor.</p>
            <img src="/images/image-placeholder.png" alt="" />
            <img src="/images/image-placeholder.png" alt="" />
          </article>
        </section>
      </main>
    </>
  );
};

export default AboutMe;
