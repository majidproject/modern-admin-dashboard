import { 
  LayoutDashboard, 
  Users, 
  ShoppingCart, 
  Settings, 
  BarChart3, 
  Package,
  HelpCircle,
  LucideIcon 
} from "lucide-react";

/**
 * Interface defining the structure of sidebar navigation items.
 */
export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

/**
 * Main navigation configuration.
 * Single source of truth for sidebar links.
 */
export const NAV_ITEMS: NavItem[] = [
  {
    label: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    label: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    label: "Customers",
    href: "/customers",
    icon: Users,
  },
  {
    label: "Orders",
    href: "/orders",
    icon: ShoppingCart,
  },
  {
    label: "Products",
    href: "/products",
    icon: Package,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
  {
    label: "Help Center",
    href: "/help",
    icon: HelpCircle,
  },
];