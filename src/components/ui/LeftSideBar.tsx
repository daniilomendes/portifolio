import { Button } from "@/components/ui/button";
import {
  FolderKanban,
  Github,
  HomeIcon,
  Linkedin,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const LeftSideBar = () => {
  return (
    <nav className="hidden px-[3rem] pt-8 md:flex border-r border-solid border-secondary">
      <div className="flex flex-col gap-10">
        <Link href="/" className="flex items-center gap-3">
          <h1 className="text-left text-lg font-semibold text-primary">Meu Portifólio</h1>
        </Link>

        <ul className="flex flex-col gap-4">
          <li className="base-medium rounded-lg transition">
            <Link href="/">
              <Button variant="outline" className="w-full justify-start gap-2">
                <HomeIcon size={16} />
                Início
              </Button>
            </Link>
          </li>
          <li className="base-medium rounded-lg transition">
            <Link href="/certificates">
              <Button variant="outline" className="w-full justify-start gap-2">
                <ShieldCheck size={16} />
                Certificados
              </Button>
            </Link>
          </li>
          <li className="base-medium rounded-lg transition">
            <Link href="/projects">
              <Button variant="outline" className="w-full justify-start gap-2">
                <FolderKanban size={16} />
                Projetos
              </Button>
            </Link>
          </li>
          <li className="base-medium rounded-lg transition">
            <Link
              href="https://www.linkedin.com/in/danilo-m-miranda/"
              target="_blank"
            >
              <Button variant="outline" className="w-full justify-start gap-2">
                <Linkedin size={16} />
                LinkedIn
              </Button>
            </Link>
          </li>
          <li className="base-medium rounded-lg transition">
            <Link href="https://github.com/daniilomendes" target="_blank">
              <Button variant="outline" className="w-full justify-start gap-2">
                <Github size={16} />
                GitHub
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default LeftSideBar;
