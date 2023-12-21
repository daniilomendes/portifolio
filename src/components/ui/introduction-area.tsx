import { ScrollArea } from "./scroll-area";
import { Separator } from "./separator";

const IntroductionArea = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
        <div className="text-justify ">
          <p className="pb-3">
            Graduando em Bacharel em Ciência da Computação pelo IFGoiano, com
            certificações em Desenvolvimento Full Stack JavaScript, Planejamento
            e Gestão de projetos e Gestão Ágil com Scrum. Realizei formações em
            cursos na área de Front-end e Back-end, buscando melhorar minhas
            habilidades e conhecimento na área de desenvolvimento Full Stack
            criando, aperfeiçoando e aprofundando no desenvolvimento de novas
            aplicações Web utilizando a linguagem TypeScript, NodeJs, PostgreSQL
            e NextJS. Mantendo um ritmo de desenvolvimento de projetos para o
            aprendizado.
          </p>
          <Separator />
          <p className=" pt-3">
            As Linguagens, Bibliotecas e Frameworks que possuo conhecimento são:
            NextJs, Shadcn, Prisma, Tailwind, React Native, NodeJs, TypeScript,
            JavaScript, Html, Css, Sass, Bootstrap, Bulma, C#, Asp.Net, Python,
            R
          </p>
          <p className="pb-3">
            Banco de dados que trabalhei: PostgreSQL e MongoDB
          </p>
          <Separator />
          <p className="pt-3">
            Caso queira entrar em contato, basta utilizar e-mail de contato ou o
            número de telefone com whatsapp: 
            <p>Número de telefone/Whatsapp: (64) 99329-3998 </p>
            <p>E-mail de contato: danilo.mirandha@gmail.com</p>
          </p>
        </div>
      </ScrollArea>
    </div>
  );
};

export default IntroductionArea;
