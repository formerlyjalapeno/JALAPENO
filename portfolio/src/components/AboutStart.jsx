const AboutStart = ({
  title,
  image1,
  text1,
  description1,
  text2,
  description2,
  image2,
  image3,
}) => {
  return (
    <main className="detail__container">
      <h2>{title}</h2>
      <section className="detail__box">
        <article className="about__one">
          <img src={image1} alt="" />
          <h3>{text1}</h3>
          <p>{description1}</p>
        </article>

        <article className="about__two">
          <h3>{text2}</h3>
          <p>{description2}</p>
          <img src={image2} alt="" />
          <img src={image3} alt="" />
        </article>
      </section>
      <button>◄ &nbsp;&nbsp;&nbsp; GO BACK</button>
    </main>
  );
};

export default AboutStart;
