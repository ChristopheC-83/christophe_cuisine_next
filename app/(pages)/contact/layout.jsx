let title = "Contactez-moi | Poseur Cuisines";
let desc ="Par téléphone, email ou à travers le formulaire de contact, je suis à votre disposition pour répondre à toutes vos questions et vous accompagner dans la réalisation de votre projet de pose de cuisine. Je peux rapidement faire un premier point sur votre situation et vous proposer un tarif estimatif gratuit." 

export const metadata = {
  
  title: title,
  description:desc,
  // Open Graph metadata
  openGraph: {
    title: title,
    description:desc,
    url: "https://www.christophe-cuisine.fr/contact",
    type: "website",
    site_name: "christophe-cuisine",
    locale: "fr_FR",
  },
};

export default function AboutLayout({ children }) {
  return <>{children}</>;
}
