import { FaHouseUser } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { FaRoute } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { GiGearHammer } from "react-icons/gi";
import { TbPigMoney } from "react-icons/tb";
import { FaRegMessage } from "react-icons/fa6";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { PiHouseSimpleBold } from "react-icons/pi";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

export const itemsLink = [
  { url: "/", icon: <PiHouseSimpleBold />, text: "Accueil" },
  { url: "/realisations", icon: <MdOutlineAddAPhoto />, text: "Réalisations" },
  { url: "/fonctionnement", icon: <GiGearHammer />, text: "Fonctionnement" },
  { url: "/tarifs", icon: <TbPigMoney />, text: "Tarifs" },
  { url: "/contact", icon: <FaRegMessage />, text: "Contactez-moi" },
];
