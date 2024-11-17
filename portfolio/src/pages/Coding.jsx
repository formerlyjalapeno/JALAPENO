import CodingList from "../components/Codinglist";

const Coding = () => {
  return (
    <main className="coding__container">
      <article className="coding__box">
        <h2>WHY CODING?</h2>
        <div className="text__coding">
          <p>
            For most, they would answer with family reasons, however in my
            case.. it’s safe to say that I am the only one in my family who
            started coding. Funny, huh? <strong>I'm making history!!</strong>
          </p>
          <br />
          <p>
            I’d be lying if i said I never used that excuse though,{" "}
            <strong>but-</strong>
          </p>
          <br />
          <p>
            All jokes aside, there was no specific reason why I chose ‘Software
            Development.’ when I attended the open-house and caught up with it,
            my interest piqued. I was always one to explore and try-out new
            things. In high-school I had experience with <strong>P.I.E.</strong>{" "}
            which stands for: <strong>Producing, Installing and Energy.</strong>{" "}
            And thus, I also experienced using other softwares related to it.
            (AutoCAD)
          </p>
          <br />
          <p>
            So far my experiencing with coding has been fun and challenging. I
            learn new things every day and during that, you realise how much you
            could do with just a simple code. You start learning the basics,
            become advanced to an expert! Or well, close by-
          </p>
          <br />
          <p>
            <strong>
              And so far, I have always been willing to know me and improve my
              skills.
            </strong>
          </p>
        </div>
      </article>
      <section className="lang__container">
        <CodingList />
      </section>
    </main>
  );
};

export default Coding;
