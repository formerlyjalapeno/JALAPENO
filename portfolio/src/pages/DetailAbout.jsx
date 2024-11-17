import { useNavigate, useParams } from "react-router-dom";
import about from "../components/about";

const DetailAbout = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const abouts = about.find((abo) => abo.id == Number(id));

  if (!about) {
    return <h2>Oops! Not found!</h2>;
  }

  return (
    <main className="detail__container">
      <h2>{about.title}</h2>
      <section className="detail__box">
        <article className="about__one">
          <img src={about.image1} alt="" />
          <h3>{about.text1}</h3>
          <p>{about.description1}</p>
        </article>
        
        <article className="about__two">
          <h3>{about.text2}</h3>
          <p>{about.description3}</p>
          <img src={about.image2} alt="" />
          <img src={about.image3} alt="" />
        </article>
      </section>
      <button onClick={() => navigate(-1)}>◄ &nbsp;&nbsp;&nbsp; GO BACK</button>
    </main>
  );
};

export default DetailAbout;
