import Header from "@/components/header/Header";
import "@/public/style/style.css";
import "@/public/style/globals.css";
import Footer from "@/components/footer/Footer";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "sonner";
let title = "Accueil | Poseur Cuisines";
let desc =
  "Poseur de cuisines autour de Nîmes, de Arles à Alès et de Montpellier à Remoulin. La pose de votre ciuisine équipée est un investissement important. Découvrez mes tarifs de pose de cuisine et contactez-moi pour un devis gratuit.";

export const metadata = {
  title: title,
  description: desc,
  // Open Graph metadata
  openGraph: {
    title: title,
    description: desc,
    url: "https://www.christophe-cuisine.fr/",
    type: "website",
    site_name: "christophe-cuisine",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-svh ">
          {/* <Header /> */}
          <Toaster position="top-center" richColors expand={true} />
          <main className="w-full grow">{children}</main>
          <Separator />
          <Footer />
      </body>
    </html>
  );
}
