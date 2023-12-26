import ProjectItem from "./project-item";

interface Project {
  id: number;
  image: string;
  name: string;
  link: string;
}

const ProjectList = () => {
  let project1 = {
    id: 1,
    image: "/projects-images/ecd-store.png",
    name: "E-commerce ECD",
    link: "https://e-commerce-daniilomendes-projects.vercel.app/",
  };

  let project2 = {
    id: 2,
    image: "/projects-images/menu-online.png",
    name: "Menu Online",
    link: "https://site-de-vendas-lanches-daniilomendes-projects.vercel.app/",
  };

  let project3 = {
    id: 3,
    image: "/projects-images/mini-e-commerce.png",
    name: "Mini E-commerce",
    link: "https://black-nextjs-daniilomendes-projects.vercel.app/",
  };

  let project4 = {
    id: 4,
    image: "/projects-images/gestor-de-estoque.png",
    name: "Gestor de Estoque",
    link: "https://stupendous-alpaca-ebe272.netlify.app/",
  };

  const projects: Project[] = [project1, project2, project3, project4];

  return (
    <div className="mx-auto flex flex-col gap-8 pl-5 pr-5 lg:container lg:gap-10 lg:py-10">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} className="" />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
