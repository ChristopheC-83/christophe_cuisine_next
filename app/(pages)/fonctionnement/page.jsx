import Hero from "@/components/hero/Hero";
import TextFrame from "@/components/textFrame/TextFrame";
import { fonctionnementDatas } from "@/datas/fonctionnementDatas";
import enteteImg from "@/public/images/Entetes/fonctionnement.png";

export default function Fonctionnement() {
  // texte entete
  const text1 = "Comment faire ?";
  const text2 = "Par où commencer ?";
  const text3 = "Je vous explique ça !";
  const text4 = "On va essayer d'éviter les surprises...";
  const color = "#f9f9f9";
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
      <div className="container my-10">
        {fonctionnementDatas.map((datas, index) => (
          <TextFrame key={index} text={datas.text} img={datas.img.src} index={index} />
        ))}
      </div>
    </div>
  );
}
