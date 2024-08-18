import Hero from "@/components/hero/Hero";
import TextFrame from "@/components/textFrame/TextFrame";
import { realisationsDatas } from "@/datas/realisationsDatas";
import enteteImg from "@/public/images/Entetes/realisations.png";
import Slider from "./_Slider";

export default function Realisations() {
  // texte entete
  const text1 = "Pour s'inspirer";
  const text2 = "et se projeter.";
  const text3 = "voici quelques réalisations";
  const text4 = "montées par mes soins.";
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
        {realisationsDatas.map((datas, index) => (
          <TextFrame key={index} text={datas.text} img={datas.img.src} index={index} />
        ))}
      </div>
      <Slider/>
      
    </div>
  );
}
