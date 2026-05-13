import {
  Home,
  Users,
  BadgeCheck,
  ReceiptText,
  BarChart3,
} from "lucide-react";

export const adminMenu = [

  {
    name: "Home",
    icon: Home,
    path: "/admin/home",
  },

  {
    name: "Candidate",
    icon: Users,
    path: "/admin/candidates",
  },

  {
    name: "HR",
    icon: BadgeCheck,
    path: "/admin/hr",
  },

  {
    name: "Billing",
    icon: ReceiptText,
    path: "/admin/billing",
  },

  {
    name: "Analytics",
    icon: BarChart3,
    path: "/admin/analytics",
  },

];