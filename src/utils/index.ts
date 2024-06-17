import { Manrope, Roboto } from "next/font/google";
import localFont from "next/font/local";
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});
const dm_sans = localFont({
  src: [
    {
      path: "../app/fonts/DMSans-Regular.ttf",
      weight: "400",
    },
    {
      path: "../app/fonts/DMSans-Bold.ttf",
      weight: "700",
    },
    {
      path: "../app/fonts/DMSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../app/fonts/DMSans-Medium.ttf",
      weight: "500",
    },
    {
      path: "../app/fonts/DMSans-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../app/fonts/DMSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  display: "swap",
});
export { manrope };
