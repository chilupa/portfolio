import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="main-container">
      <Header />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
