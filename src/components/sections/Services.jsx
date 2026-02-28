const services = [
  "Frontend Development",
  "Full Stack Web Apps",
  "AI Integration",
  "REST API Development",
];

const Services = () => {
  return (
    <section className="py-24 px-6 text-center">
      <h2 className="text-4xl font-bold mb-12">Services</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <div key={i} className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;