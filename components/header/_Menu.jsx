import { GiHamburgerMenu } from "react-icons/gi";

import * as SheetPrimitive from "@radix-ui/react-dialog";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { itemsLink } from "@/datas/itemsLink";

export default function Menu() {
  return (
    <Sheet>
      <SheetTrigger asChild className="">
        <div className="z-50 p-2 w-fit">
          <GiHamburgerMenu className="scale-[2] text-neutral-900 " />
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="p-2 bg-neutral-200">
        <SheetHeader>
          <SheetTitle><p className="text-center h4">Posons votre cuisine !</p></SheetTitle>
        </SheetHeader>
        <div className="flex flex-col items-start justify-between mt-10 gap-y-8">
          
          {itemsLink.map((item,index) => (
            <SheetPrimitive.Close asChild key={index}>
            <Link href={item.url}>
              <h5
                className={`h5 flex items-center gap-3 px-4 py-0.5 text-black rounded-full bg-clip hover:opacity-90 duration-200 hover:translate-x-3 hover:scale-110 w-full`}
              >
                {item.icon}{item.text}
              </h5>
            </Link>
          </SheetPrimitive.Close>
          ))}

         
        </div>
        {/* Menu ici */}
      </SheetContent>
    </Sheet>
  );
}
