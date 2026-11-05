import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://prajwalsahare.dev"),
  title: "Prajwal Sahare — Software Engineer",
  description: "Portfolio of Prajwal Sahare, a Software Engineer specializing in Java, Spring Boot, microservices, and reliable backend systems.",
  openGraph: { title: "Prajwal Sahare — Software Engineer", description: "Java backend engineer building reliable, maintainable software.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body>{children}<Analytics /></body></html>;
}
