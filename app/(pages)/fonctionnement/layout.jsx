let title = "Fonctionnement | Poseur Cuisines";
let desc ="La pose de votre cuisine doit passer par des étapes pour garantir un résultat de qualité. Découvrez comment je procède pour la pose de votre cuisine équipée, de la prise de rendez-vous à la finition. Je vous accompagne dans le choix de votre cuisine et vous propose un devis gratuit pour la pose de votre cuisine." 

export const metadata = {
  
  title: title,
  description:desc,
  // Open Graph metadata
  openGraph: {
    title: title,
    description:desc,
    url: "https://www.christophe-cuisine.fr/fonctionnement",
    type: "website",
    site_name: "christophe-cuisine",
    locale: "fr_FR",
  },
};

export default function FonctionnementLayout({ children }) {
  return <>{children}</>;
}
