const BlogPreview = () => {
  return (
    <section className="py-24 bg-zinc-900 text-center">
      <h2 className="text-4xl font-bold mb-12">Latest Blogs</h2>
      <div className="grid md:grid-cols-3 gap-6 px-10">
        {[1, 2, 3].map((b) => (
          <div key={b} className="bg-black p-6 rounded-xl">
            Blog Post {b}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPreview;