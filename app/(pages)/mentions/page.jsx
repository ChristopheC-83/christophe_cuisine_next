
import Hero from "@/components/hero/Hero";
import enteteImg from "@/public/images/Entetes/legal.png";

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
Mentions


    </div>

  );

}