import { useNavigate } from "react-router-dom";

const Button = ({ about }) => {
  const navigate = useNavigate();

  function goToMore() {
    navigate(`/moreaboutme/${about.id}`);
  }

  return (
    <>
      <button onClick={goToMore}>
        {about.title}
      </button>
    </>
  );
};

export default Button;
