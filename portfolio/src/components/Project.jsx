import { useNavigate } from 'react-router-dom'

const Project = ({ project }) => {

    const navigate = useNavigate();

    function goToDetail() {
        navigate(`/project/${project.id}`)
    }

    return (
        <>
            <article className='projects__Container' onClick={goToDetail}>
                <h2>{project.title}</h2>
                <img src={project.image} alt="" />
            </article>

        </>
    );
}

export default Project;