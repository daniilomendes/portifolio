import { MenuIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import Link from "next/link";

const Header = () => {
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Button size="icon" variant="outline">
        <MenuIcon />
      </Button>

      <Link href="/">
        <h1 className="text-lg font-semibold">
          <span className="text-primary">Portfólio</span> Danilo
        </h1>
      </Link>
    </Card>
  );
};

export default Header;
