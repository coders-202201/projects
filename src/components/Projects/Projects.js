import Project from "../Project/Project";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "A Magic World",
    },
    {
      id: 2,
      name: "StarFighters",
    },
    {
      id: 3,
      name: "Cocktails",
    },
  ];
  return (
    <ul>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default Projects;
