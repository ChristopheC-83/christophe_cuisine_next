let title = "Réalisations | Poseur Cuisines";
let desc ="Pour vous inspirer ou vous projeter dans votre future cuisine, découvrez quelques-unes de mes réalisations. Je vous accompagne dans le choix de votre cuisine équipée et vous propose un devis gratuit pour la pose de votre cuisine." 

export const metadata = {
  
  title: title,
  description:desc,
  // Open Graph metadata
  openGraph: {
    title: title,
    description:desc,
    url: "https://www.christophe-cuisine.fr/realisations",
    type: "website",
    site_name: "christophe-cuisine",
    locale: "fr_FR",
  },
};

export default function FonctionnementLayout({ children }) {
  return <>{children}</>;
}
