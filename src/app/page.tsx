import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import AboutUs from "@/components/about-us";
import Client from "@/components/client";
import Counter from "@/components/counter";
import Hero from "@/components/hero";
import Projects from "@/components/project";
import Testimonial from "@/components/testimonial";
import Work from "@/components/work";

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
