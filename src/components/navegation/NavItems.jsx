import {
  FaPen,
  FaCamera,
  FaLaptopCode,
  FaPrint,
  FaChalkboardTeacher,
  FaInfoCircle,
  FaMailBulk,
  FaBriefcase,
  FaNewspaper,
  FaDownload,
} from "react-icons/fa";
import {
  FaFacebook,
  FaXTwitter,
  FaInstagram,
  FaTiktok,
  FaTelegram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa6";

export const servicios = [
  {
    name: "Diseño Gráfico",
    href: "diseño-grafico",
    icon: <FaPen />,
  },
  {
    name: "Fotografía",
    href: "fotografia",
    icon: <FaCamera />,
  },
  {
    name: "Diseño y Desarrollo Web",
    href: "diseño-y-desarrollo-web",
    icon: <FaLaptopCode />,
  },
  {
    name: "Impresión",
    href: "impresion",
    icon: <FaPrint />,
  },
  {
    name: "Asesorias",
    href: "asesorias",
    icon: <FaChalkboardTeacher />,
  },
];

export const company = [
  {
    name: "Sobre Nosotros",
    href: "sobre-nosotros",
    icon: <FaInfoCircle />,
  },
  {
    name: "Contacto",
    href: "contacto",
    icon: <FaMailBulk />,
  },
  {
    name: "Recursos",
    href: "recursos",
    icon: <FaDownload />,
  },
  {
    name: "Vacantes",
    href: "bolsa-de-trabajo",
    icon: <FaBriefcase />,
  },
  {
    name: "Responsabilidad Social",
    href: "responsabilidad-social",
    icon: <FaNewspaper />,
  },
];

export const menu = [
  { name: "Inicio", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Tienda", href: "/tienda" },
  { name: "Cursos", href: "#cursos" },
];
export const soporte = [
  { name: "Contacto", href: "/contacto" },
  { name: "Envios", href: "/envios" },
  { name: "Facturación", href: "/facturacion" },
  { name: "Preguntas Frecuentes", href: "/preguntas-frecuentes" },
];
export const compania = [
  { name: "Nosotros", href: "/sobre-nosotros" },
  { name: "Recursos", href: "/recursos" },
  { name: "Vacantes", href: "/bolsa-de-trabajo" },
  { name: "ESR", href: "/responsabilidad-social" },
];
export const legal = [
  { name: "Política de compras", href: "/politica-de-compras" },
  { name: "Política de reembolso", href: "/politica-de-reembolso" },
  { name: "Aviso de Privacidad", href: "/aviso-de-privacidad" },
  { name: "Términos y Condiciones", href: "/terminos-y-condiciones" },
];
export const social = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/CreadoresCreativos.MX",
    icon: () => <FaFacebook />,
  },
  {
    name: "X-Twitter",
    href: "https://www.twitter.com/Creadores_Creat",
    icon: () => <FaXTwitter />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/creadores_creat",
    icon: () => <FaInstagram />,
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@emprendedorescreativos2018",
    icon: () => <FaYoutube />,
  },
  {
    name: "Telegram",
    href: "https://t.me/+8q0-Zd0_u3kzYWU5",
    icon: () => <FaTelegram />,
  },

  {
    name: "Pinterest",
    href: "https://www.pinterest.com.mx/emprendedorescreativos2019/",
    icon: () => <FaPinterest />,
  },
  {
    name: "Tiktok",
    href: "https://www.tiktok.com/@emprendedores_creativos",
    icon: () => <FaTiktok />,
  },
];
