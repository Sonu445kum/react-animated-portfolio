const Contact = () => {
  return (
    <section className="py-24 px-6 text-center">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <form className="max-w-md mx-auto space-y-4">
        <input className="w-full p-3 bg-zinc-900 rounded" placeholder="Name" />
        <input className="w-full p-3 bg-zinc-900 rounded" placeholder="Email" />
        <textarea className="w-full p-3 bg-zinc-900 rounded" placeholder="Message" />
        <button className="bg-purple-600 px-6 py-3 rounded w-full">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;