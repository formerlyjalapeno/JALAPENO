import { Link } from "react-router-dom";

const Hobbies = () => {
  return (
    <main className="detail__container">
      <h2>HOBBIES</h2>
      <section className="detail__box">
        <article className="about__one">
          <img src="/images/image-placeholder.png" />
          <h3>MUSIC, WRITING AND MORE!</h3>
          <p>
            Do you know the frozen movie? Yes, the kids movie that came out in
            2013. Ever since I started performing the song 'Let It Go', my mom
            signed me up for singing classes. Unfortunately for me though, it
            only lasted a year or so? Back then, I wanted to become a singer
            just for that reason, meet celebrities and become famous- sing songs
            that make no sense, instead of writing lyrics I just spoke some
            words like gibberish.
          </p>
          <br />
          <p>
            I will admit, those times were fun, I still sing for fun too. On
            special occassions, I sing on weddings, birthday parties and all. If
            it's not singing, I enjoy dancing too, self-taught. And sometimes
            play the guitar despite being a beginner, but hey- we're all
            learning!
          </p>
          <br />
          <p>
            I also write a couple of dialogues here and there whenever I'm bored
            and get them reviewed by a few friends who absolutely love reading,
            might I add.
          </p>
        </article>
        <article className="about__two">
          <h3>MY PASSION FOR DRAWING</h3>
          <p>
            I've got quite the story for this one too, but long story short..
            no, it was NOT just about drawing funny, no-sense making stickmen,
            it all started with kids-animations to watching various different
            artstyles of animes, artists and other things. ART in general!
          </p>
          <br />
          <p>
            I also draw digitally, and traditionally in my free time. No, I,
            Unfortunately- did not learn how to animate, but hopefully one day.
          </p>
          <img src="/images/image-placeholder.png" alt="" />
          <img src="/images/image-placeholder.png" alt="" />
        </article>
      </section>
    </main>
  );
};

export default Hobbies;
