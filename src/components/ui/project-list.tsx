import { projects } from "@/constants";
import ProjectItem from "./project-item";

const ProjectList = () => {
  return (
    <div className="mx-auto flex flex-col gap-8 pl-5 pr-5 lg:container lg:gap-5">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} className="" />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
