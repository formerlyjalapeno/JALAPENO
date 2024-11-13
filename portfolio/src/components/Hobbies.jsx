import { useNavigate } from "react-router-dom";

const Hobbies = ({ about }) => {
  const navigate = useNavigate();

  function goToMore() {
    navigate(`/moreaboutme/${about.id}`);
  }

  return (
    <>
      <button>HOBBIES</button>
    </>
  );
};

export default Hobbies;
