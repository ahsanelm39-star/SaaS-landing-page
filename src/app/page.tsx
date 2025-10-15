import Btn from "./commponent/Btn";
import Logo from "./commponent/Compeny-logo";
import Contant from "./commponent/Contant";
import Footer from "./commponent/Footer";
import Header from "./commponent/Header";
import Hero from "./commponent/Hero";
import Pricing from "./commponent/Pricing";
import Productivity from "./commponent/Productivity";
import { Testimonials } from "./commponent/Testmonails";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <Logo/>
      <Productivity/>
      <Pricing/>
      <Testimonials/>
      <Contant/>
      <Footer/>
      <Btn/>
    </>
  );
}
