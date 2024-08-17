

import Hero from "@/components/hero/Hero";
import accueilEnteteImg from "@/public/images/Entetes/accueil.png";

 export default function Accueil() {

 // texte entete
 const text1 = "Préparons ensemble la pose";
 const text2 = "de votre nouvelle cuisine.";
 const text3 = "Je vous accompagne";
 const text4 = "tout au long de votre projet.";
 // image de fond
 const bgImg = accueilEnteteImg;
 const color = "#111111";


return (
    <div className={``}>
      <Hero text1={text1} text2={text2} text3={text3} text4={text4} bgImg={bgImg} color={color} />

Accueil

    </div>

  );

}