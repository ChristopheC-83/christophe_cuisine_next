import { itemsLink } from "@/datas/itemsLink";
import Link from "next/link";
import ArrowToTop from "../ArrowToTop";
import bgImg from "@/public/images/2_realisations/C2.jpg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="container">
      <div className="relative max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 lg:pt-24">
        <div className="lg:flex lg:items-end lg:justify-between">
          <div className={``}>
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col justify-center lg:justify-start">
                <h3 className={`h3 text-clip`}>Christophe C.</h3>
                <h3 className={`h4 text-clip`}>Poseur de Cuisines</h3>
              </div>
              <div className="px-8 py-3 lg:hidden">
              <ArrowToTop />
          </div>
            </div>

            <p className="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-500 lg:text-left">
              Suivi de votre projet de A à Z. <br />
              Métré, travaux annexes, pose, suivi...
            </p>
          </div>

          <div className="flex flex-col items-end h-full gap-y-10">
            
          <div className="px-8 py-3 max-lg:hidden">
              <ArrowToTop />
          </div>
            <ul className="flex flex-wrap justify-center gap-4 mt-6 max-xs:mx-auto xs:mt-12 max-xs:flex-col md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
              {itemsLink.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.url}
                    className="flex-col text-gray-700 duration-300 flexMid hover:text-gray-700/75 hover:-translate-y-2"
                  >
                    <div className={`h5`}>{item.icon}</div>
                    <div className={`h5`}>{item.text}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 text-sm text-center text-gray-500 lg:text-right">
          Copyright &copy; 2024. Tous droits réservés.
          <Link href="/mentions" className="text-gray-500 underline hover:text-gray-700">
            Mentions Légales
          </Link>
        </p>
      </div>
    </footer>
  );
}
