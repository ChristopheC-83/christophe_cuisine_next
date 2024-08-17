import Link from "next/link";
import { Button } from "../ui/button";
import Menu from "./_Menu";
import { FaMessage } from "react-icons/fa6";

export default function Header() {
  return (
    <header
      className={`fixed transX w-full flex justify-between items-center
         py-2 sm:py-3 md:py-4 
         px-3 sm:px-4 md:px-6
            max-w-[1200px]`}
    >
      {/* navigation */}
      <Menu />
      {/* titre */}
      <h2 className={`h2 max-xs:hidden pb-2 text-center`}>Christophe C. <br /> Votre Poseur de Cuisine</h2>
      <h2 className={`h4 xs:hidden`}>Votre Poseur de Cuisine</h2>
      {/* contact */}
      <Button>
        <Link href="/contact">
          <p className="md:hidden">
            {" "}
            <FaMessage />
          </p>
          <p className={`max-md:hidden`}>Contactez-moi</p>
        </Link>
      </Button>
    </header>
  );
}
