const tech = ["React", "Node", "MongoDB", "Redux", "Python", "Django", "AWS"];

const TechStack = () => {
  return (
    <section className="py-24 bg-black text-center">
      <h2 className="text-4xl font-bold mb-12">Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {tech.map((t, i) => (
          <span key={i} className="px-6 py-3 bg-zinc-800 rounded-full">
            {t}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TechStack;