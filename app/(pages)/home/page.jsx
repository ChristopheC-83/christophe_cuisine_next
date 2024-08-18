import Hero from "@/components/hero/Hero";
import TextFrame from "@/components/textFrame/TextFrame";
import { homeDatas } from "@/datas/homeDatas";
import enteteImg from "@/public/images/Entetes/accueil.png";

export default function Accueil() {
  // texte entete
  const text1 = "Préparons ensemble la pose";
  const text2 = "de votre nouvelle cuisine.";
  const text3 = "Je vous accompagne";
  const text4 = "tout au long de votre projet.";
  const color = "#111111";
  // image de fond
  const bgImg = enteteImg;

  return (
    <div className={``}>
      <Hero
        text1={text1}
        text2={text2}
        text3={text3}
        text4={text4}
        bgImg={bgImg}
        color={color}
      />
      <div className="container my-10">
        {homeDatas.map((datas, index) => (
          <TextFrame key={index} text={datas.text} img={datas.img.src} index={index} />
        ))}
      </div>
    </div>
  );
}
