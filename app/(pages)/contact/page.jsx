import Hero from "@/components/hero/Hero";
import enteteImg from "@/public/images/Entetes/contact.png";


 export default function Contact() {

  const text1 = "Par ce formulaire ?";
  const text2 = "Email ou téléphone ?";
  const text3 = "À vous de choisir !";
  const text4 = "On va y arriver 😉";
  const color = "#111111 ";
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
Contact


    </div>

  );

}