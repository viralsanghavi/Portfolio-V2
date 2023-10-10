import About from "@/components/about";
import Banner from "@/components/banner";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Projects from "@/components/projects";
import {Poppins} from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Page Title",
  description: "Page Description",
};

export default function Home() {
  return (
    <main className={poppins.className}>
      <Header />
      <Banner />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
