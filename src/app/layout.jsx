import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900']
})

export const metadata = {
  title: "Yaniv Romem Protfolio",
  description: "Yaniv Romem Protfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Yaniv Romem Protfolio</title>
      </head>
      <body className={roboto.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
