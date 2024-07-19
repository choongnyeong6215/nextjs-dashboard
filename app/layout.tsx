import "@/app/ui/global.css";
import "@/app/ui/fonts";
import { inter, notoSans, notoSansKorea } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${notoSansKorea.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
