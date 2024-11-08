import Project from "../components/Project";
import data from "../components/data";

const Projects = () => {
  console.log(data);
  return (
    <>
        <section className="projects__section">
          <h2>PROJECTS</h2>
          <article className="projects">
            {data.map((project) => (
              <Project project={project} />
            ))}
          </article>
        </section>
    </>
  );
};

export default Projects;
