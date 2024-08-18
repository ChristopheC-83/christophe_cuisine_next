/* eslint-disable react/no-unescaped-entities */

import { FaArrowCircleRight } from "react-icons/fa";

import { FaReceipt } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaCommentsDollar } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";

import img1 from "@/public/images/4_price/price1.jpg";
import img2 from "@/public/images/4_price/price_help2.png";

export const tarifDatas = [
  {
    text: (
      <div className="home-content-text ">
        <p>
          Notre collaboration peut également se faire en direct. Situé dans la
          Vaunage, j'interviens de Montpellier Est à Remoulin et de Alès à
          Arles. <br />
          <br /> De la même manière, un métré de validation et un devis pour des
          travaux préparatoires sont possibles. <br />
          <br />
          Pour ce qui est du montage de la cuisine, une grille tarifaire
          interactive est disponible sur simple demande par mail à :<br />
          <br />
          <a href="mailto:christophe.chiappetta@gmail.com">
            christophe.chiappetta@gmail.com
          </a>
          <br />
          <br />
          ou en téléchargement :
          <a
            href="https://docs.google.com/spreadsheets/d/1hCvG2il1uTJ-siClwEo-MCpMSWOtEk5J/edit?usp=share_link&ouid=107187922781976477794&rtpof=true&sd=true"
            download="Grille Tarifaire.xls"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Grille tarifaire
          </a>
        </p>

        <div className="flex home-icone">
          <FaMapMarkedAlt style={{ margin: "0 30px" }} />
          <FaReceipt style={{ margin: "0 30px" }} />
        </div>
        <p style={{ fontWeight: "bold", textAlign: "center" }}>
          D'une prestation complète à une journée d'aide à la pose, je suis à
          vos cotés en fonction de vos besoins.
        </p>

        <div className="flex home-icone">
          <FaMoneyBillWave />
          <FaCommentsDollar
            style={{ transform: "scale(1.5)", margin: "0 40px" }}
          />
          <FaMoneyBillWave />
        </div>
        <p>
          Une pose complète s'étend en général de 750 à 1200€ HT. <br />
          <br />
          Tout reste fonction de la cuisine évidemment. <br />
          <br />
          Je vous propose un tarif estimé à partir de vos plans et préalable que
          nous ajustons sur ce qui est fait réellement. <br />
          <br />
          Si finalement vous souhaitez gérer les cartons et emballages,votre
          lave-vaisselle n'est plus intégrable mais en pose libre et vous vous
          sentez de le positionner et brancher... pas de souci, on le retire !
        </p>
      </div>
    ),
    img: img1,
  },
  {
    text: (
      <div className="home-content-text home-content-text1">
        <p style={{ fontWeight: "bold", textAlign: "center" }}>
          La journée d'aide à la pose :
        </p>

        <p>
          Une journée d'aide à la pose
          <br />
          se compte 400€ HT : <br />
          <br />
          <div className="flex items-center">
              <FaArrowCircleRight style={{ margin: "0 10px", fontSize: "16px", flexShrink: 0 }} />
              Vous déballez les éléments, préparez les meubles (pieds, retrait de
              toutes les façaces, mise en place, niveau approximatif), l'évier, les
              poignées...
          </div>
          <br />
          <br />
          <div className="flex items-center">
              <FaArrowCircleRight style={{ margin: "0 10px", fontSize: "16px",flexShrink: 0 }} />
              Nous faisons ensemble ce qui vous gêne le plus, pas de souci ! <br />
          </div>
          <br />
          <div className="flex items-center">
              <FaArrowCircleRight style={{ margin: "0 10px", fontSize: "16px",flexShrink: 0 }} />
              Je m'occupe de la jonction des caissons, remise à niveau, fixations
              murales, jonction et découpe des plans de travail, installation et
              branchement de l'évier et des électro-ménagers...
          </div>
          <br />
          <br />{" "}
          <div className="flex items-center">
              <FaArrowCircleRight style={{ margin: "0 10px", fontSize: "16px",flexShrink: 0 }} />
              Vous gérez l'évacuation des cartons et autres emballages.
          </div>
          <br />
          <br />
          <div className="flex items-center">
              <FaArrowCircleRight style={{ margin: "0 10px", fontSize: "16px",flexShrink: 0 }} />
              Nous faisons en sorte que la cuisine soit le plus avancée possible (et
              surtout fonctionnelle) sur cette journée en fonction de vos besoins et
              compétences.
          </div>
        </p>
      </div>
    ),
    img: img2,
  },
];
