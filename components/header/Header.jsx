import Link from "next/link";
import { Button } from "../ui/button";
import Menu from "./_Menu";
import { FaMessage } from "react-icons/fa6";
import Navbar from "./_Navbar";

export default function Header() {
  return (
    <header
      className={`mx-auto w-full flex justify-between items-center
         py-2 sm:py-3 md:py-4 
         px-3 sm:px-4 md:px-6
            max-w-[1200px]`}
    >
      {/* navigation pc */}
      <div  className={`md:hidden`}>
        <Menu />
      </div>

      {/* navigation mobile */}
      <Navbar/>
      <Button className={`md:hidden`}>
        <Link href="/contact">
          <p className="md:hidden">
            {" "}
            <FaMessage />
          </p>
        </Link>
      </Button>
    </header>
  );
}
