export interface SubMenuItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href?: string;
  subItems?: SubMenuItem[];
}
