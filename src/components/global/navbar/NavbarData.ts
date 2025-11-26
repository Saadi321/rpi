import { NavItem } from "./NavbarTypes";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    subItems: [
      { label: "Facilities", href: "/facilities" },
      { label: "Campus Life", href: "/student-life" },
      { label: "Programs", href: "/programs" },
      { label: "Faculty", href: "/faculty" },
      { label: "Gallery", href: "/gallery" },
    ],
  },

  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
