import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import AboutUs from "@/components/home/about-us";
import Client from "@/components/home/client";
import Counter from "@/components/home/counter";
import Hero from "@/components/home/hero";
import Projects from "@/components/home/project";
import Testimonial from "@/components/home/testimonial";
import Work from "@/components/home/work";

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden">
      <Header />
      <Hero />
      <Work />
      <AboutUs />
      <Testimonial />
      <Client />
      <Projects />
      <Counter />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
