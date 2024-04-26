import { Inter } from "next/font/google";
import "./styles/globals.css";
import BackgroundVideo from './pages/BackgroundVideo'
import Navbar from "./pages/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Addo Davies Jr.",
  description: "Addo Davies Jr. Work Portfolio",
  icons:{
    icon: '/favicon.ico',
    appleIcon: '/apple-touch-icon.png',
    androidIcon: '/android-chrome-512x512.png',
    favicon32: '/favicon-32x32.png',
    favicon16: '/favicon-16x16.png' 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={inter.className}> <BackgroundVideo videoUrl= "/backgroundVid.mp4"/>
          <main><Navbar />{children}</main>
        </body>  
    </html>
  )
}
