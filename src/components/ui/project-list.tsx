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
    image: "/projects-images/social-media.png",
    name: "Social Media",
    link: "https://social-media-plum-three.vercel.app/"
  }

  let project2 = {
    id: 2,
    image: "/projects-images/ecd-store.png",
    name: "E-commerce ECD",
    link: "https://e-commerce-daniilomendes-projects.vercel.app/",
  };

  let project3 = {
    id: 3,
    image: "/projects-images/menu-online.png",
    name: "Menu Online",
    link: "https://incandescent-moxie-19bd07.netlify.app",
  };

  let project4 = {
    id: 4,
    image: "/projects-images/youtube-clone.png",
    name: "Youtube clone",
    link: "https://timely-sopapillas-93d31c.netlify.app/",
  };

  let project5 = {
    id: 5,
    image: "/projects-images/gestor-de-estoque.png",
    name: "Gestor de Estoque",
    link: "https://stupendous-alpaca-ebe272.netlify.app/",
  };

  
  let project6 = {
    id: 6,
    image: "/projects-images/calculadora.png",
    name: "Calculadora",
    link: "https://willowy-scone-0f20f8.netlify.app/",
  };

  let project7 = {
    id: 7,
    image: "/projects-images/jogo_da_velha.png",
    name: "Jogo da Velha",
    link: "https://splendorous-sprite-c66f9a.netlify.app/",
  };

  let project8 = {
    id: 8,
    image: "/projects-images/to_do.png",
    name: "Jogo da Velha",
    link: "https://magnificent-kelpie-a2ca22.netlify.app/",
  };

  const projects: Project[] = [project1, project2, project3, project4, project5, project6, project7, project8];

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
