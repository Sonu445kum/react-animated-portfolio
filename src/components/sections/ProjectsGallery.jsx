const ProjectsGallery = () => {
  return (
    <section className="py-24 bg-zinc-900 text-center">
      <h2 className="text-4xl font-bold mb-12">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6 px-10">
        {[1, 2, 3].map((p) => (
          <div key={p} className="bg-black p-10 rounded-xl border border-zinc-800">
            Project {p}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGallery;