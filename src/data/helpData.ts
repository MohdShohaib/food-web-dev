import {
  AlertTriangle,
  HelpCircle,
  Bluetooth,
  Settings,
  Wrench,
  UserCog,
} from "lucide-react";

/* ================= TYPES ================= */
export type HelpScreen = "home" | "category" | "question";

export type CategoryId =
  | "setup"
  | "troubleshooting"
  | "device"
  | "alerts"
  | "account"
  | "others";

export type Question = {
  id: string;
  title: string;
  category: CategoryId;
  categoryLabel: string;
  content: {
    intro: string;
    steps: {
      title: string;
      description: string;
    }[];
    outro?: string;
  };
};

export type Category = {
  id: CategoryId;
  title: string;
  icon: React.ElementType;
};

/* ================= CATEGORIES ================= */

export const categories: Category[] = [
  { id: "setup", title: "Setup & Installation", icon: Wrench },
  { id: "troubleshooting", title: "Troubleshooting", icon: Settings },
  { id: "device", title: "Device Connection", icon: Bluetooth },
  { id: "alerts", title: "Alert & Notification", icon: AlertTriangle },
  { id: "account", title: "Account & App Support", icon: UserCog },
  { id: "others", title: "Others", icon: HelpCircle },
];

/* ================= QUESTIONS ================= */

export const questions: Question[] = [
  {
    id: "1",
    title: "How can I delete my account?",
    category: "account",
    categoryLabel: "Account & App Support",
    content: {
      intro: "To delete your account, follow these steps:",
      steps: [
        {
          title: "Go to Settings",
          description: "Navigate to the Settings page from the sidebar menu.",
        },
        {
          title: "Account Settings",
          description: 'Click on "Account Settings" in the settings menu.',
        },
        {
          title: "Delete Account",
          description:
            'Scroll down and click "Delete Account". Confirm your decision.',
        },
      ],
      outro:
        "Note: This action is irreversible. All your data will be permanently deleted.",
    },
  },
  {
    id: "2",
    title: "How can I reconnect my box?",
    category: "troubleshooting",
    categoryLabel: "Troubleshooting",
    content: {
      intro: "If you are not receiving alerts, follow these steps:",
      steps: [
        {
          title: "Check Your Connection",
          description:
            "Ensure your phone has internet and notifications enabled.",
        },
        {
          title: "Review Alert Preferences",
          description: "Check alert preferences in app settings.",
        },
        {
          title: "Reconnect or Restart",
          description: "Reconnect the box or restart the app.",
        },
      ],
    },
  },
];
