import about from "./about";
import { useState } from "react";
import AboutStart from "./AboutStart";

const AboutList = () => {
  const [abouts, setAbouts] = useState(about);
  return (
    <>
      {abouts.map((about) => (
        <AboutStart
          title={about.title1}
          text1={about.text1}
          image1={about.image1}
          description1={about.description1}
          text2={about.text2}
          description2={about.description2}
          image2={about.image2}
          image3={about.image3}
        />
      ))}
    </>
  );
};

export default AboutList;
