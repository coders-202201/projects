import { useNavigate } from "react-router-dom";

const Project = ({ project: { id, name } }) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/projects/view/${id}`);
  };

  return (
    <>
      <h3>{name}</h3>
      <p onClick={goToDetail}>Id {id}</p>
    </>
  );
};

export default Project;
