import {
  LayoutDashboard,
  Building2,
  Users,
  UserCheck,
  ReceiptText,
  BarChart3,
  UserRound,
} from "lucide-react";

export const superAdminMenu = [
  {
    name: "Home",
    icon: LayoutDashboard,
    path: "/super-admin/dashboard",
  },
  {
    name: "Client",
    icon: Building2,
    path: "/super-admin/clients",
  },
  {
    name: "Vendor",
    icon: Users,
    path: "/super-admin/vendor",
  },
  {
    name: "HR",
    icon: UserCheck,
    path: "/super-admin/hr",
  },
  {
    name: "Candidate",
    icon: UserRound,
    path: "/super-admin/candidate",
  },
  {
    name: "Billing",
    icon: ReceiptText,
    path: "/super-admin/billing",
  },
  {
    name: "Analytics",
    icon: BarChart3,
    path: "/super-admin/analytics",
  },
];