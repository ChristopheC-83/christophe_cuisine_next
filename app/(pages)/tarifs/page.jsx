
import Hero from "@/components/hero/Hero";
import enteteImg from "@/public/images/Entetes/tarifs.png";

 export default function Tarifs() {
// texte entete
const text1="Pose complète ?"
const text2="Aide à la pose ?"
const text3="Avec ou sans préparations ?"
const text4="Un tarif transparent et détaillé."
const color="#111111"
// image de fond
const bgImg = enteteImg


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
Tarifs
    </div>

  );

}