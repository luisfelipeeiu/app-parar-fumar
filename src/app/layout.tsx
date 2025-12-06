import React from "react";

export const metadata = {
  title: "App Parar de Fumar",
  description: "Aplicativo focado em ajudar pessoas a parar de fumar.",
  manifest: "/manifest.json",
};

export const viewport = {
  themeColor: "#00c36F",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
