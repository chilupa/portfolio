import Link from "next/link";

export default function Home() {
  return (
    <section className="h-screen snap-start flex items-center justify-center flex-col gap-4">
      <h1 className="text-4xl md:text-6xl font-bold">Hey, I’m Pavan</h1>
      <p className="text-lg text-gray-400 max-w-xl text-center">
        I build modern web apps with React, Next.js & Java. Let's connect!
      </p>
      <div className="flex gap-4 mt-6">
        <Link href="/projects" className="px-6 py-2 border rounded">
          Projects
        </Link>
        <Link href="/contact" className="px-6 py-2 border rounded ">
          Contact
        </Link>
      </div>
    </section>
  );
}
