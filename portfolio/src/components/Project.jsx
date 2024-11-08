import { useNavigate } from 'react-router-dom'

const Project = ({ project }) => {

    const navigate = useNavigate();

    function goToDetail() {
        navigate(`/project/${project.id}`)
    }

    return (
        <>
            <div className='projects__Container' onClick={goToDetail}>
                <h3>{project.title}</h3>
            </div>

        </>
    );
}

export default Project;