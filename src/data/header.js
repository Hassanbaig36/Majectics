import icon from "@/images/icons/close-1-1.png";
import logo4 from "@/images/logo-2.png";
import logo3 from "@/images/logo-3.png";
import logo2 from "@/images/logo-dark.png";
import logo1 from "@/images/logo.png";
import logo6 from "@/images/update-01-10-2021/logo-6-dark.png";
import logo7 from "@/images/Majetics-01.png";
import logo11 from "@/images/Majetics.png";
import logo8 from "@/images/update-01-10-2021/logo-8-light.png";
import logo5 from "@/images/update-09-06-2021/logo-5.png";
import logo10 from "@/images/update-09-06-2021/logo-6.png";
import logo9 from "@/images/update-26-02-2021/logo-horizontal-portfolio.png";

const home = {
  id: 1,
  name: "Home",
  href: "/",
 
};

const navItemsTwo = [
  { ...home, href: "#home" },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Services",
    href: "#services",
  },
  {
    id: 4,
    name: "Portfolio",
    href: "#portfolio",
  },
  {
    id: 5,
    name: "Team",
    href: "#team",
  },
  {
    id: 6,
    name: "Testimonials",
    href: "#testimonials",
  },
  {
    id: 7,
    name: "Blog",
    href: "#blog",
  },
  {
    id: 8,
    name: "Contact",
    href: "#contact",
  },
];

const navItems = [
  home,
  {
    id: 9,
    name: "About",
    href: "/about",
    subNavItems: [
   
 

    ],
  },
  {
    id: 10,
    name: "Pages",
    href: "/pricing",
    subNavItems: [
      { id: 11, name: "Our Pricing", href: "/pricing" },
      // { id: 2, name: "Pricing 02", href: "/pricing-2", isNew: true },
      { id: 12, name: "How it Works", href: "/how-it-works" },
      // { id: 4, name: "Coming Soon", href: "/coming-soon" },
      // { id: 5, name: "Testimonials", href: "/testimonials" },
      // { id: 6, name: "Testimonials Two", href: "/testimonials-2" },
      { id: 13, name: "FAQs", href: "/faqs" },
      // { id: 8, name: "Events", href: "/events" },
      // { id: 9, name: "Event Details", href: "/event-details" },
      // { id: 10, name: "Clients Page", href: "/clients" },
      // { id: 11, name: "404 Page", href: "/404" },
      // { id: 12, name: "Login Page", href: "/login" },
      // { id: 13, name: "Register Page", href: "/register" },
      // { id: 14, name: "Forget Page", href: "/forgot-password" },
      // {
      //   id: 15,
      //   name: "Under Construction",
      //   href: "/under-construction",
      //   isNew: true,
      // },
    ],
  },
    {
    id: 14,
    name: "pricing",
    href: "/pricing",
    subNavItems: [
    

    ],
  },  {
    id: 15,
    name: "Services",
    href: "/services",
    subNavItems: [
    

    ],
  },  {
    id: 16,
    name: "How it Works",
    href: "/how-it-works",
    subNavItems: [
    

    ],
  },
  {
    id: 17,
    name: "FAQs",
    href: "/faqs",
    subNavItems: [
    

    ],
  },
  {
    id: 18,
    name: "Portfolio",
    href: "/portfolio",
    subNavItems: [
   
    ],
  },

  {
    id: 19,
    name: "Blog",
    href: "/blog-single",
    subNavItems: [
      // { id: 1, name: "Blog Sidebar", href: "/blog" },
      // { id: 2, name: "Blog Grid View", href: "/blog-grid" },
      // { id: 3, name: "Blog Single", href: "/blog-single" },
    ],
  },
  {
    id: 20,
    name: "Contact",
    href: "/contact",
    subNavItems: [
      // { id: 1, name: "Contact 01", href: "/contact" },
      // { id: 2, name: "Contact 02", href: "/contact-2", isNew: true },
    ],
  },
];

export const socials = [
  {
    id: 1,
    icon: "fab fa-facebook-square",
    href: "#",
  },
  {
    id: 2,
    icon: "fab fa-twitter",
    href: "#",
  },
  {
    id: 3,
    icon: "fab fa-instagram",
    href: "#",
  },
  {
    id: 4,
    icon: "fab fa-pinterest-p",
    href: "#",
  },
];

const headerData = {
  title: "Majetics Software Solutions",

  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  navItems,
  navItemsTwo,
  address: "Suite 20 Golden Street USA",
  phone: "666 888 0000",
  phone2: "+ 92 666 888 0000",
  email: "needhelp@linoor.com",
  icon,
  socials,
  text: "Majetics Software Solutions",
};

export default headerData;
