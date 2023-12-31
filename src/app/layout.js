import { Poppins } from "next/font/google";
// import { Avenir } from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

const myFont = Poppins({
  subsets: ["devanagari"],
  variable: "--font-popins",
  weight: ["400", "500", "600", "700", "800", "900"],
});

// const avenir = Avenir({
//   src: "./fonts/AvenirLTStd-Book.otf",
//   variable: "--font-avenir",
// });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${myFont.variable}`}>
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="container1 mx-auto">{children}</div>
        <Newsletter></Newsletter>
        <Footer></Footer>
      </body>
    </html>
  );
}
