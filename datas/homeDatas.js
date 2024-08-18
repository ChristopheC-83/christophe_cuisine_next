/* eslint-disable react/no-unescaped-entities */

import { FaUserAlt } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaHammer } from "react-icons/fa";
import { FaFaucet } from "react-icons/fa";
import { FaPlug } from "react-icons/fa";
import { FaRulerCombined } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { FaDraftingCompass } from "react-icons/fa";
import { FaScrewdriver } from "react-icons/fa";
import { FaToolbox } from "react-icons/fa";
import { FaWrench } from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaPiggyBank } from "react-icons/fa";
import img1 from "@/public/images/1_Home/accueil1.png";
import img2 from "@/public/images/1_Home/accueil2.png";
import img3 from "@/public/images/1_Home/accueil3.png";

export const homeDatas = [
  {
    text: (
      <div className="home-content-text ">
        <p style={{ fontWeight: "bold", textAlign: "center" }}>
          Installé à mon compte depuis mai 2015, je vous apporte mon expérience
          et vous propose mes services autour de Nîmes. <br />
          <br /> Entre Remoulins et Montpellier et de Arles à Alès.
        </p>
        <div className="home-icone">
          <FaUserAlt />
        </div>
        <div className="home-icone">
          <FaHandshake />
        </div>
        <div className="flex home-icone">
          <FaUserAlt style={{ margin: "0 30px" }} />
          <FaUserAlt style={{ margin: "0 30px" }} />
        </div>
        <p>
          Je reste présent et disponible dans le montage de votre projet en
          collaboration avec des enseignes partenaires.
        </p>
        <p>
          Je ne vends pas les cuisines, mais ferai mon possible pour qu'il se
          déroule dans les meilleures conditions possibles pour un résultat
          optimal.
        </p>
        <div className="flex home-icone">
          <FaTrophy />
          <FaTrophy style={{ transform: "scale(1.5)", margin: "0 30px" }} />
          <FaTrophy />
        </div>
      </div>
    ),
    img: img1,
  },
  {
    text: (
      <div className="home-content-text ">
        <p>Afin de vous accompagner au mieux, je peux prendre en charge :</p>
        <div className="home-icone">
          <FaHammer />
        </div>
        <p className="flex justify-start" >
          <FaArrowCircleRight style={{ margin: "0 10px", fontSize: "16px", flexShrink: 0  }} />
          le demontage de l'ancienne cuisine et son évacuation à la déchetterie.
        </p>
        <div className="flex home-icone">
          <FaFaucet style={{ margin: "0 30px" }} />
          <FaPlug style={{ margin: "0 30px" }} />
        </div>

        <p className="flex justify-start" >
          <FaArrowCircleRight style={{ margin: "0 10px", fontSize: "16px", flexShrink: 0  }} />
          le déplacement de l'électricité et/ou de la plomberie existante(s).
        </p>
        <div className="flex home-icone">
          <FaRulerCombined style={{ margin: "0 30px" }} />
          <FaMap />
          <FaDraftingCompass style={{ margin: "0 30px" }} />
        </div>

        <p className="flex justify-start" >
          <FaArrowCircleRight style={{ margin: "0 10px", fontSize: "16px", flexShrink: 0  }} />
          le métré de validation avec les plans de votre cuisiniste.
        </p>
        <div className="flex home-icone">
          <FaScrewdriver style={{ margin: "0 30px" }} />
          <FaToolbox />
          <FaWrench style={{ margin: "0 30px" }} />
        </div>

        <p className="flex justify-start" >
          <FaArrowCircleRight style={{ margin: "0 10px", fontSize: "16px", flexShrink: 0  }} />
          et bien évidemmment le montage de la nouvelle cuisine (en kit ou
          montée d'usine)
        </p>
        <div className="home-icone">
          <FaCheckSquare />
        </div>
      </div>
    ),
    img: img2,
  },
  {
    text: (
      <div className="home-content-text">
        <p>
          Dans le but de répondre le plus précisément possible à vos besoins,
          vous choisissez vos prestations au travers d'une grille tarifaire que
          je souhaite simple et la plus exhaustive possible.
        </p>
        <div className="home-icone">
          <FaListAlt />
        </div>
        <p className="flex justify-start" >
          <FaArrowCircleRight style={{ margin: "0 10px", fontSize: "16px", flexShrink: 0  }} />
          Je peux gérer la pose complète, les éventuels travaux complémentaires,
        </p>
        <div className="flex home-icone">
          <FaMoneyBillWave style={{ margin: "0 30px" }} />
          <FaMoneyBillWave />
          <FaMoneyBillWave style={{ margin: "0 30px" }} />
        </div>
        <p className="flex justify-start" >
          <FaArrowCircleRight style={{ margin: "0 10px", fontSize: "16px", flexShrink: 0  }} />
          Ou juste changer les plans de travail avec remise en service de
          l'évier et de la plaque de cuisson pour un coup de jeune de votre
          cuisine,
        </p>
        <div className="flex home-icone">
          <FaMoneyBillWave style={{ margin: "0 30px" }} />

          <FaMoneyBillWave style={{ margin: "0 30px" }} />
        </div>
        <p className="flex justify-start" >
          <FaArrowCircleRight style={{ margin: "0 10px", fontSize: "16px", flexShrink: 0  }} />
          ou vous proposer une journée d'aide à la pose pour laquelle vous aurez
          préparé le terrain et qui permettra une facture plus légère !
        </p>
        <div className="home-icone">
          <FaPiggyBank />
        </div>
        <p className="flex justify-start" >
          <FaArrowCircleRight style={{ margin: "0 10px", fontSize: "16px", flexShrink: 0  }} />
          Mon offre se veut la plus complète et détaillée possible pour que vous
          puissiez cibler vos priorités. Le principal reste la communication et
          la préparation. Je m'engage à ne laisser aucune question sans réponse.
        </p>
        <div className="home-icone">
          <FaCheckSquare />
        </div>
      </div>
    ),
    img: img3,
  },
];
