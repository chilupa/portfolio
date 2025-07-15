import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="bg-gray-950 text-white h-screen w-screen overflow-y-scroll snap-y snap-mandatory">
      <Header />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
