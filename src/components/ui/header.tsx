import {
  FolderKanban,
  Github,
  HomeIcon,
  Linkedin,
  MenuIcon,
  ShieldCheck,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./sheet";

const Header = () => {
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="w-[21.875rem]">
            <SheetHeader className="text-left text-lg font-semibold">
              Menu
            </SheetHeader>

            <div className="mt-4 flex flex-col gap-2">
              <SheetClose asChild>
                <Link href="/">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <HomeIcon size={16} />
                    Início
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/certificates">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <ShieldCheck size={16} />
                    Certificados
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/projects">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <FolderKanban size={16} />
                    Projetos
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  href="https://www.linkedin.com/in/danilo-m-miranda/"
                  target="_blank"
                >
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="https://github.com/daniilomendes" target="_blank">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <Github size={16} />
                    GitHub
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <Link href="/">
        <h1 className="text-lg font-semibold">
          <span className="text-primary">Meu Portfólio</span>
        </h1>
      </Link>

      <div className="hidden gap-2 md:flex">
        <Link href="/">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <HomeIcon size={16} />
            Início
          </Button>
        </Link>
        
        <Link href="/certificates">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <ShieldCheck size={16} />
            Certificados
          </Button>
        </Link>

        <Link href="/projects">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <FolderKanban size={16} />
            Projetos
          </Button>
        </Link>
      </div>

      <div className="hidden gap-2 md:flex">
      <Link
          href="https://www.linkedin.com/in/danilo-m-miranda/"
          target="_blank"
        >
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Linkedin size={16} />
            LinkedIn
          </Button>
        </Link>

        <Link href="https://github.com/daniilomendes" target="_blank">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Github size={16} />
            GitHub
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default Header;
