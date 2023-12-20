import { Badge } from "@/components/ui/badge";
import ProjectList from "@/components/ui/project-list";

const ProjectPages = () => {
    return ( 
        <>
        <div className="flex flex-col gap-8 p-5 mx-auto lg:container lg:gap-10 lg:py-10">
            <Badge variant="heading">
                Projetos
            </Badge>
        </div>
        

        <ProjectList />
        </>
        
     );
}
 
export default ProjectPages;