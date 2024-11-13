import { useNavigate, useParams } from "react-router-dom";
import data from "../components/data";

const DetailProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = data.find((proj) => proj.id == Number(id));

  if (!project) {
    return <h2>Oops! Not found!</h2>;
  }

  return (
    <section className="project__Card">
      <img src={project.image} alt="" />
      <h2>
        {project.title} {project.extra}
      </h2>
      <h3>{project.date}</h3>
      <p>{project.description}</p>
      <button onClick={() => navigate(-1)}>◄ &nbsp;&nbsp;&nbsp; GO BACK</button>
    </section>
  );
};

export default DetailProject;
