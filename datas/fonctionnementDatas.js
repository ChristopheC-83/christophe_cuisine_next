/* eslint-disable react/no-unescaped-entities */

import { FaBriefcase } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaCompass } from "react-icons/fa";
import { FaPencilRuler } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaEquals } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { FaRegMap } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { FaIndustry } from "react-icons/fa";
import img1 from "@/public/images/3_Fonctionnement/fonctionnement1_mesure.png";
import img2 from "@/public/images/3_Fonctionnement/fonctionnement2_travaux.png";
import img3 from "@/public/images/3_Fonctionnement/fonctionnement3_handshake.jpg";

export const fonctionnementDatas = [
  {
    text: (
      <div className="home-content-text ">
        <p style={{ fontWeight: "bold", textAlign: "center" }}>
          On ne se lance pas à l'improviste <br /> dans un tel projet !
        </p>
        <div className="flex home-icone">
          <HiMagnifyingGlass style={{ margin: "0 40px" }} />
          <FaCompass />
          <HiMagnifyingGlass style={{ margin: "0 40px" }} />
        </div>
        <p>
          Commencez par prendre les côtes de votre pièce, les fenêtres,
          portes... quelques photos... <br />
          <br />
          Et allez trouver votre cuisiniste préféré !
        </p>
        <div className="flex home-icone">
          <FaPencilRuler style={{ margin: "0 40px" }} />
          <FaArrowCircleRight />
          <FaUserTie style={{ margin: "0 40px" }} />
        </div>
        <p>
          Vous établierez ensemble une implantation répondant à vos envies, vos
          contraintes et votre budget.
        </p>
        <div className="flex home-icone">
          <FaTv style={{ margin: "0 40px" }} />
          <FaArrowCircleRight />
          <FaRegMap style={{ margin: "0 40px" }} />
        </div>
      </div>
    ),
    img: img1,
  },
  {
    text: (
      <div className="home-content-text ">
        <p>
          J'interviens alors en faisant un métré précis sur place avec les plans
          du cuisiniste. <br />
          <br />
          Nous établissons ensemble qui fait quoi au niveau des travaux
          préparatoires (démontage, adaptation électricité et plomberie...).
          <br />
          <br />
          J'envoie un retour de métré au cuisiniste par mail. La fabrication est
          enfin lancée !
        </p>
        <div className="flex home-icone">
          <FaPaperPlane />
          <FaArrowCircleRight style={{ margin: "0 40px" }} />
          <FaIndustry />
        </div>
        <p>
          Pendant cette phase préparatoire, même si je ne participe pas
          physiquement aux travaux, je reste joignable pour vous accompagner.
          <br />
          <br /> Mieux la préparation sera faite, moins nous aurons de surprises
          au moment de la pose !
        </p>
        <div className="flex home-icone">
          <GrUserWorker style={{ margin: "0 40px" }} />
          <FaBriefcase />
          <FaRegThumbsUp style={{ margin: "0 40px" }} />
        </div>
      </div>
    ),
    img: img2,
  },
  {
    text: (
      <div className="home-content-text ">
        <p>
          Même si j'ai pu être face à de très nombreuses marques, une cuisine
          est le fruit de la collaboration de plusieurs intervenants.
          <br />
          <br /> Du vendeur(.se), au fournisseur puis au livreur et enfin au
          poseur.
        </p>
        <div className="flex home-icone">
          <FaUserTie />
          <FaUsers style={{ margin: "0 40px" }} />
          <FaUserCog />
        </div>
        <div className="home-icone">
          <FaEquals />
        </div>
        <div className="home-icone">
          <FaTrophy style={{ margin: "0 30px", transform: "scale(1.5)" }} />
        </div>
        <p>
          Tout ce petit monde s'active de concert pour une réussite de votre
          projet. <br />
          <br />
          J'ai le plaisir et loisir de pouvoir choisir les enseignes avec qui je
          travaille. <br />
          <br />
          Soit nous partageons les mêmes valeurs humaines et commerçantes....
          soit j'en change ! <br />
          <br />
          Je ne travaille pas avec des enseignes mais avec des humains. <br />
          <br />
          C'est pourquoi, à ce jour, je collabore essentiellement avec :
        </p>

        <div className="w-full">
          <p class="">En quasi exclusivité à ce jour:</p>

          <div className="partner partner1">
            <a href="https://magasins.ixina.fr/fr/magasins/france-fra/arles/ixina-arles-IXFR1304">
              Ixina Arles
            </a>
          </div>

          <p class="">
            Parce qu'ils sont mon partenaire historique <br />
            depuis 2016 :
          </p>

          <div className="partner partner2">
            <a href="https://www.lapeyre.fr/tous-les-magasins/magasin-lapeyre-languedoc-roussillon-nimes">
              Lapeyre Nîmes
            </a>
          </div>
        </div>
        <p className="w-full py-8 font-bold text-center h4">
          Parce qu'une équipe soudée est plus efficace !
        </p>
      </div>
    ),
    img: img3,
  },
];
