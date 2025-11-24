import { NavItem } from './NavbarTypes';

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#hero" },
  { 
    label: "About", 
    href: "/about",
    subItems: [
      { label: "Facilities", href: "#facilities" },
      { label: "Campus Life", href: "#student-life" },
      { label: "Programs", href: "#programs" },
    ]
  },
  { label: "Admissions", href: "#admissions" },
  { label: "Announcements", href: "#announcements" },
  { label: "Contact", href: "#contact" },
];
