import { useParams } from "react-router-dom";
import ProjectDetail from "../components/ProjectDetail/ProjectDetail";

const ProjectPage = () => {
  const params = useParams();

  const project = {
    id: 1,
    name: "A Magic World",
  };

  return (
    <>
      <h2>Project Page</h2>
      <ProjectDetail project={project} />
    </>
  );
};

export default ProjectPage;
