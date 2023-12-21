import CertificatesItem from "./certificates-item";
import ProjectItem from "./project-item";



const ProjectList = () => { 
    const imagesProjects: Array<string> = ["/Banco-de-Dados-SQL-NodeJS.png", "/Banco-de-Dados-SQL-NodeJS.png"]
    const namesProjects: Array<string> = [""]
    const categoryProjects: Array<string> = [""]
    const linksProjects: Array<string> = [""]


  return (
    <div className="flex flex-col gap-8 p-5 mx-auto lg:container lg:gap-10 lg:py-10">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
        {imagesProjects.map((cert) =>
            <ProjectItem certificate={cert} className="" />
        )}
        </div>
    </div>
  );
};

export default ProjectList;
