/* eslint-disable react/no-unescaped-entities */

import Hero from "@/components/hero/Hero";
import enteteImg from "@/public/images/Entetes/legal.png";
import Link from "next/link";

export default function Mentions() {
  const text1 = "Qui suis-je ?";
  const text2 = "Assurances";
  const text3 = "Mentions Légales";
  const text4 = "Données personnelles";
  const color = "#f1f1f1 ";
  // image de fond
  const bgImg = enteteImg;

  return (
    <div>
      <Hero
        text1={text1}
        text2={text2}
        text3={text3}
        text4={text4}
        bgImg={bgImg}
        color={color}
      />
      <div className={`container max-w-[600px]`}>
        <h1 className={`text-clip w-fit mx-auto md:mt-6`}>Mentions Légales</h1>
        <p className="text-center">En vigueur au 30/07/2024</p>
        <p className="my-8">
          Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004
          pour la Confiance en l’économie numérique, il est porté à la
          connaissance des utilisateurs et visiteurs, ci-après l' "Utilisateur",
          du site https://www.christophe-cuisine.fr/ , ci-après le "Site", les
          présentes mentions légales. La connexion et la navigation sur le Site
          par l’Utilisateur implique acceptation intégrale et sans réserve des
          présentes mentions légales. Ces dernières sont accessibles sur le Site
          à la rubrique "Mentions légales".
        </p>
        <h4 className={`my-8`}>EDITION DU SITE</h4>
        <p>
          L'édition du Site est assurée par la société eirl chiappetta, eirl au
          capital de 0 euros, immatriculée au Registre du Commerce et des
          Sociétés de 810767772 RCS Nîmes sous le numéro 810767772 dont le siège
          social est situé au 4 rue de l ile verte. 30420 Calvisson, - Numéro de
          téléphone : 0699812296 - Adresse e-mail :
          christophe.chiappetta@gmail.com. - N° de TVA intracommunautaire :
          FR04810767772 - Directeur de la publication : Christophe CHIAPPETTA
          ci-après l'"Editeur".
        </p>
        <h4 className={`my-8`}>HEBERGEUR</h4>
        <p>
          L'hébergeur du Site est la société Vercel, dont le siège social est
          situé au 440 N Barranca Ave #4133 91723 Covina .
        </p>
        <h4 className={`my-8`}>ACCES AU SITE</h4>{" "}
        <p>
          Le Site est normalement accessible, à tout moment, à l'Utilisateur.
          Toutefois, l'Editeur pourra, à tout moment, suspendre, limiter ou
          interrompre le Site afin de procéder, notamment, à des mises à jour ou
          des modifications de son contenu. L'Editeur ne pourra en aucun cas
          être tenu responsable des conséquences éventuelles de cette
          indisponibilité sur les activités de l'Utilisateur. Toute utilisation,
          reproduction, diffusion, commercialisation, modification de toute ou
          partie du Site, sans autorisation expresse de l’Editeur est prohibée
          et pourra entraîner des actions et poursuites judiciaires telles que
          prévues par la règlementation en vigueur.
        </p>{" "}
        <br />
        <h4 className={`my-8`}>ACTIVITE DE MENUISIER</h4>{" "}
        <p>Toutes les photos de cuisines sont le résultat de mes travaux.</p>
        <p>Ces photos ne sont pas celles d'un tiers.</p>
        <p>
          Je ne fais jamais de sous-traitance pour quelque mission que ce soit.
        </p>
        <p>
          Les photos d'illustrations sont issues du site{" "}
          <Link href="https://www.unsplash.com"> Unsplash</Link>.
        </p>
        <br />
        <p>Si ma principale mission est la pose de cuisine,</p>
        <p>
          n'hésitez pas à me contacter pour des travaux préparatoires si besoin.
        </p>
        <p>déplacement de l'existant en plomberie et électricité.</p>
        <p>démontage et évacuation de la cuisine à démonter.</p>
        <br />
        <p>
          Les travaux sont couverts par une assurance biennale/responsabilité
          civile ainsi qu'une décennale en fonction de leurs natures. Contrats
          d'assurance souscrits auprès de la MAAF. Disponibles sur demande.
        </p>
        <br />
        <br />
        <br /> Rédigé sur http://legalplace.fr
        <br />
      </div>
    </div>
  );
}
