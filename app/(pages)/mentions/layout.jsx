let title = "Mentions Légales | Poseur Cuisines";
let desc ="Coordonnées et mentions légales." 

export const metadata = {
  
  title: title,
  description:desc,
  // Open Graph metadata
  openGraph: {
    title: title,
    description:desc,
    url: "https://www.christophe-cuisine.fr/mentions",
    type: "website",
    site_name: "christophe-cuisine",
    locale: "fr_FR",
  },
};

export default function MentionsLayout({ children }) {
  return <>{children}</>;
}
