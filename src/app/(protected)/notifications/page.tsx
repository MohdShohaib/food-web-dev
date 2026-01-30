"use client";

import { useRouter } from "next/navigation";
import { NotificationsPage } from "@/components/dashboard/NotificationsPage";

export default function Notifications() {
  const router = useRouter();

  return <NotificationsPage onBack={() => router.back()} />;
}
