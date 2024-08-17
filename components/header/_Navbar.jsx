"use client";

import { usePathname } from "next/navigation";
import { itemsLink } from "@/datas/itemsLink";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="mx-auto midFlex max-lg:flex-col-reverse">
      <h1 className={`h3 xs:hidden lg:block pb-2 text-clip max-md:text-center`}>
        Christophe C<br /> Poseur de Cuisines
      </h1>
      <h1 className={`h3 hidden xs:block lg:hidden  pb-2 text-clip text-nowrap`}>
        Christophe C, Poseur de Cuisines
      </h1>
      <div
        className={`max-md:hidden grow flex justify-between items-center gap-x-1 overflow-hidden  `}
      >
        {itemsLink.map((item, index) => (
          <Link
            href={item.url}
            key={index}
            className={`flex flex-col items-center navItemHover relative group p-2 rounded-full duration-300
                 w-[144px]
                ${pathname === item.url ? "navActive" : ""}`}
          >
            <h5 className="text-current duration-300 navIcon group-hover:text-white">
              {item.icon}
            </h5>
            <h5 className="navText">{item.text}</h5>
          </Link>
        ))}
      </div>
    </div>
  );
}
