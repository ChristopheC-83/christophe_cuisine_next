import { FaHouseUser } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { FaRoute } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";import { FaMessage } from "react-icons/fa6";

export const itemsLink = [
    { url: "/", icon: <FaHouseUser />, text: "Accueil" },
    { url: "/realisations", icon: <FaCamera />, text: "Réalisations" },
    { url: "/fonctionnement", icon: <FaRoute />, text: "Fonctionnement" },
    { url: "/tarifs", icon: <FaMoneyBillWave />, text: "Tarifs" },
    { url: "/mentions", icon: <FaBalanceScale />, text: "Mentions Légales" },
    { url: "/contact", icon: <FaMessage />, text: "Contactez-moi" },
];
