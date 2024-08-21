let title = "Tarifs de pose | Poseur Cuisines";
let desc ="D'une pose complète à une aide à la pose, découvrez les tarifs de pose de cuisine équipée proposés par Christophe Cuisine. Pour un devis gratuit, contactez-moi. Plus qu'un devis, je vous propose un tarif estimatif réajuster en fin de prestation. Je ne vous facturerai que ce qui a été réalisé par mes soins, pas plus !!! " 

export const metadata = {
  
  title: title,
  description:desc,
  // Open Graph metadata
  openGraph: {
    title: title,
    description:desc,
    url: "https://www.christophe-cuisine.fr/tarifs",
    type: "website",
    site_name: "christophe-cuisine",
    locale: "fr_FR",
  },
};

export default function TarifsLAyout({ children }) {
  return <>{children}</>;
}
