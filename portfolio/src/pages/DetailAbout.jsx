import { useNavigate, useParams } from "react-router-dom";
import about from "../components/about";

const DetailAbout = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const abouts = about.find((abo) => abo.id == Number(id));

  if (!about) {
    return <h2>Project niet gevonden!</h2>;
  }

  return (
    <main className="detail__container">
      <button onClick={() => navigate(-1)}>◄ &nbsp;&nbsp;&nbsp; GO BACK</button>
    </main>
  );
};

export default DetailAbout;
