import type { Metadata, Viewport } from "next";
import "./globals.css";
import InstallHelper from "@/components/InstallHelper";

export const metadata: Metadata = {
  title: "مراية | Meraya – صالونات الحلاقة والكوافير",
  description: "مراية – تطبيق صالونات الحلاقة والكوافير. احجز موعدك في أفضل الصالونات الرجالية والنسائية بكل سهولة.",
  keywords: ["صالون", "كوافير", "حلاقة", "مراية", "meraya", "salon", "booking"],
  authors: [{ name: "Orca Tech", url: "https://orca-tech.dev" }],
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "مراية | Meraya",
    description: "تطبيق صالونات الحلاقة والكوافير",
    type: "website",
    locale: "ar_EG",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f766e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="مراية" />
      </head>
      <body>
        {children}
        <InstallHelper />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').catch(() => {});
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
