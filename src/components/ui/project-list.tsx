import ProjectItem from "./project-item";

interface Project {
  image: string;
  name: string;
  link: string;
}

const ProjectList = () => { 
  // https://e-commerce-daniilomendes-projects.vercel.app/
  // https://site-de-vendas-lanches-daniilomendes-projects.vercel.app/
  // https://black-nextjs-daniilomendes-projects.vercel.app/

  let project1 = {
    image: "/projects-images/ecd-store.png",
    name: "E-commerce ECD",
    link: "https://e-commerce-daniilomendes-projects.vercel.app/",
  };
    
  const projects: Project[] = [
    project1,
  ]

  return (
    <div className="flex flex-col gap-8 p-5 mx-auto lg:container lg:gap-10 lg:py-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-6">
        {projects.map((project) =>
            <ProjectItem project={project} className="" />
        )}
        </div>
    </div>
  );
};

export default ProjectList;
