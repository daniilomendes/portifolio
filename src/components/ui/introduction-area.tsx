import Link from "next/link";
import { ScrollArea } from "./scroll-area";
import { Separator } from "./separator";

const IntroductionArea = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <ScrollArea className="h-[450px] w-[350px] rounded-md border p-4 lg:h-[400px] lg:w-[95%]">
        <div className="text-justify">
          <p className="pb-3">
            Graduando em Bacharel em Ciência da Computação pelo IFGoiano, possuo
            certificações em Desenvolvimento Full Stack Web com ReactJs e
            NodeJs, Planejamento e Gestão de projetos e Gestão Ágil com Scrum.
          </p>
          <p className="pb-6">
            Realizei formações em cursos na área de Front-end e Back-end,
            buscando sempre melhorar minhas habilidades e conhecimento na área
            de desenvolvimento Full Stack criando, aperfeiçoando e aprofundando
            no desenvolvimento de novas aplicações Web. Mantenho um ritmo de
            desenvolvimento de projetos para o aprendizado.
          </p>
          <Separator />
          <p className=" pt-6">
            Experiência em desenvolvimento de APIs Node, com integração com o
            banco de dados Postgresql e MongoDB utilizando o Docker Compose,
            realizando consultas no banco de dados com SQL e posteriormente
            utilizando o Prisma ORM.
          </p>
          <p className="pt-3">
            Experiência em desenvolvimento Front-end utilizando ReactJs e
            NextJs, com integração de APIs e acesso ao banco de dados utilizando
            Firebase, Supabase e Appwrite.
          </p>
          <p className="pt-3">
            Utilizando o Jest e React Testing Library para realizar toda a
            cobertura de testes, e realizando a verificação de rotas com o
            Postman.
          </p>
          <p className="pt-3">
            Seguindo os padrões de projeto Single Responsibility Principle,
            Injeção de dependência, Adapters e Factory Pattern para tornar a
            aplicação mais modular, facilitando a manutenção, melhorando sua
            testabilidade e prevenindo a dependência entre componentes.
          </p>
          <p className="pt-3">
            Utilizando o ESlint, Prettier e Git Hooks para garantir que será
            seguido as regras e os padrões de desenvolvimento dentro do projeto.
            Realizando todo o versionamento do código seguindo o Conventional
            Commits Pattern em todos commits.
          </p>
          <div className="pb-6 pt-3">
            <p>Exemplo de uma API seguindo tais padões:</p>
            <Link
              href="https://github.com/daniilomendes/Finance-App-Api"
              target="_blank"
              className=" text-blue-500"
            >
              https://github.com/daniilomendes/Finance-App-Api
            </Link>
          </div>
          <Separator />
          <p className=" pt-6">
            As Linguagens, Bibliotecas e Frameworks que possuo conhecimento são:
          </p>
          <p>
            ReactJs, NodeJs, TypeScript, Jest, Tailwind, NextJs, React Native,
            JavaScript, Html, Css, Sass, Bootstrap, C#, Asp.Net, Python, R e
            Java.
          </p>
          <p className="pt-3">Banco de dados que trabalhei: </p>
          <p className="pb-6">
            PostgreSQL, MongoDB(Atlas), Prisma(ORM), Firebase, Supabase e
            Appwrite.
          </p>
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
