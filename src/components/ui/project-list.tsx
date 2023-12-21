import ProjectItem from "./project-item";

interface Project {
  image: string;
  name: string;
  link: string;
}

const ProjectList = () => { 
    
  const projects: Project[] = [

  ]

  return (
    <div className="flex flex-col gap-8 p-5 mx-auto lg:container lg:gap-10 lg:py-10">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
        {projects.map((project) =>
            <ProjectItem project={project} className="" />
        )}
        </div>
    </div>
  );
};

export default ProjectList;
