import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "STEM Translation - Chat",
  description: "Chat view – target audience and STEM learning.",
};

export default function V2Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
