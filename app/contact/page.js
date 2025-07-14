export default function Contact() {
  return (
    <section className="h-screen snap-start flex items-center justify-center p-8">
      <form className="max-w-xl w-full space-y-4">
        <h2 className="text-3xl font-bold">Contact</h2>
        <input
          className="w-full p-2 rounded bg-gray-800 border border-gray-600"
          placeholder="Name"
        />
        <input
          className="w-full p-2 rounded bg-gray-800 border border-gray-600"
          placeholder="Email"
        />
        <textarea
          className="w-full p-2 rounded bg-gray-800 border border-gray-600"
          rows={5}
          placeholder="Message"
        />
        <button className="bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-500">
          Send
        </button>
      </form>
    </section>
  );
}
