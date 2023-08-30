import { contactSchema } from "./schema";
const API_URL = process.env.NEXT_PUBLIC_BASE_URL + "/api";
const DOMAIN_NAME = process.env.NEXT_PUBLIC_DOMAIN_NAME;

const NAV_MENU = [
  { id: 1, label: "Home", url: "/" },
  { id: 2, label: "About Us", url: "/about-us" },
  { id: 3, label: "Consultancy", url: "/consultancy" },
  { id: 4, label: "Courses", url: "/courses" },
  { id: 5, label: "Job Updates", url: "/job-updates" },
  { id: 6, label: "Services", url: "/services" },
];

export { API_URL, DOMAIN_NAME, NAV_MENU, contactSchema };
