import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cierre de Bonificaciones — ComunidadFeliz",
  description: "Dashboard de cierre mensual de bonificaciones del equipo comercial de ComunidadFeliz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F4F4F4] text-[#333333]">
        {children}
      </body>
    </html>
  );
}
