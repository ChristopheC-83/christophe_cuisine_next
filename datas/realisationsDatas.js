/* eslint-disable react/no-unescaped-entities */

import img1 from "@/public/images/2_realisations/insta.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

export const realisationsDatas = [
  {
    text: (
      <div className="home-content-text ">
        <p style={{ fontWeight: "bold", textAlign: "center" }}>
          Afin de suivre quelques une de mes réalisations, je vous propose, pour
          commencer, d'aller jeter un oeil à mon compte Instagram.
        </p>
        <div className="flex justify-center w-full">
          <a href="https://www.instagram.com/christophe_poseur_cuisines/">
            <FaInstagram
              style={{
                fontSize: "50px",
                margin: "0 auto",
                color: "#e752e7",
              }}
            />
          </a>
        </div>
        <p>
          En restant sur ce site, plus simplement, vous pouvez regarder déjà
          quelques photos de cuisines montées par mes soins. Elles vous
          permettront de vous inspirer et de vous projeter dans votre future
          cuisine.
        </p>
        <p>
          Inspiré par un détail dans une, une couleur dans une autre, un
          agencement dans une troisième, vous pourrez ainsi composer votre
          cuisine idéale.
        </p>
        <p className="flex items-center">
          Les flèches
          <FaArrowCircleLeft style={{ fontSize: "20px", margin: "-5px 5px" }} />
          <FaArrowCircleRight
            style={{ fontSize: "20px", margin: "-5px 5px" }}
          />
          vous permettent de voir différentes vues et différentes cuisines.
        </p>
        <p>Et vous, laquelle vous inspire ?</p>
        <p>Bon visionnage !</p>
      </div>
    ),
    img: img1,
  },
];
