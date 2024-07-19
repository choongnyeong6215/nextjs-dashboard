import { Inter, Lusitana, Noto_Sans, Noto_Sans_KR } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const notoSans = Noto_Sans({ subsets: ["latin"] });
export const notoSansKorea = Noto_Sans_KR({ subsets: ["latin"] });
export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
