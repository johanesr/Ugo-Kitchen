import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./lib/LanguageContext";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ugo Kitchen | Kue Kering Homemade Jakarta",
  description:
    "Kue kering homemade berkualitas premium dari Jakarta. Nastar, Putri Salju, Sagu Keju, Semprit, dan Skippy. Dibuat dengan cinta dan resep keluarga.",
  keywords: [
    "kue kering",
    "Jakarta",
    "nastar",
    "putri salju",
    "sagu keju",
    "semprit",
    "cookies",
    "Ugo Kitchen",
    "kue lebaran",
    "hampers",
  ],
  openGraph: {
    title: "Ugo Kitchen | Kue Kering Homemade Jakarta",
    description:
      "Kue kering homemade berkualitas premium. Dibuat dengan cinta di Jakarta.",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${playfair.variable} ${lato.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
