import Header from "@/components/header/Header";
import "@/public/style/style.css";
import "@/public/style/globals.css";
import Footer from "@/components/footer/Footer";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "sonner";

export const metadata = {
  title: "Christophe Cuisine",
  description:
    "Installé à mon compte depuis mai 2015, je vous apporte mon expérience et vous propose mes services autour de Nîmes. Entre Remoulins et Montpellier et de Arles à Alès.",
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
