import { ScrollArea } from "./scroll-area";
import { Separator } from "./separator";

const IntroductionArea = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <ScrollArea className="h-[350px] w-[350px] rounded-md border p-4 lg:w-[97%] lg:h-full">
        <div className="text-justify">
          <p className="pb-3">
            Graduando em Bacharel em Ciência da Computação pelo IFGoiano, com
            certificações em Desenvolvimento Full Stack JavaScript, Planejamento
            e Gestão de projetos e Gestão Ágil com Scrum.
          </p>
          <p className="pb-6">
            Realizei formações em cursos na área de Front-end e Back-end,
            buscando melhorar minhas habilidades e conhecimento na área de
            desenvolvimento Full Stack criando, aperfeiçoando e aprofundando no
            desenvolvimento de novas aplicações Web utilizando a linguagem
            TypeScript, NodeJs, PostgreSQL e NextJS. Mantendo um ritmo de
            desenvolvimento de projetos para o aprendizado.
          </p>
          <Separator />
          <p className=" pt-6">
            As Linguagens, Bibliotecas e Frameworks que possuo conhecimento são:
          </p>
          <p>
            NextJs, Shadcn, Prisma, Tailwind, React Native, NodeJs, TypeScript,
            JavaScript, Html, Css, Sass, Bootstrap, Bulma, Java, C#, Asp.Net, Python e
            R
          </p>
          <p className="pt-3">Banco de dados que trabalhei: </p>
          <p className="pb-6">PostgreSQL, MongoDB e Prisma(ORM)</p>
          <Separator />
          <p className="pt-3">
            Caso queira entrar em contato, basta utilizar e-mail de contato ou o
            número de telefone com whatsapp:
          </p>
          <p>Número de telefone/Whatsapp:</p>
          <p>(64) 99329-3998 </p>
          <p>E-mail de contato:</p>
          <p>danilo.mirandha@gmail.com</p>
        </div>
      </ScrollArea>
    </div>
  );
};

export default IntroductionArea;
