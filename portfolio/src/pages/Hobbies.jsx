import { Link } from "react-router-dom";

const Hobbies = () => {
  return (
    <main className="detail__container">
      <h2>HOBBIES</h2>
      <section className="detail__box">
        <article className="about__one">
          <img src="/images/image-placeholder.png" />
          <h3>MUSIC, WRITING AND MORE!</h3>
          <p>Lorem ipsum dolor.</p>
        </article>

        <article className="about__two">
          <h3>MY PASSION FOR DRAWING</h3>
          <p>Lorem ipsum dolor.</p>
          <img src="/images/image-placeholder.png" alt="" />
          <img src="/images/image-placeholder.png" alt="" />
        </article>
      </section>
      <Link to="/aboutme">
        <button>◄ &nbsp;&nbsp;&nbsp; GO BACK</button>
      </Link>
    </main>
  );
};

export default Hobbies;
