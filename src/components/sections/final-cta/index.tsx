export default function FinalCTA() {
  return (
    <section className="py-24 bg-primary-500">
      <div className="wrapper text-center max-w-3xl mx-auto text-white">

        <h2 className="text-4xl font-bold">
          Ready to Build Your Product?
        </h2>

        <p className="mt-5 text-white/80">
          Let’s turn your idea into a scalable digital product with Anchor Techno Soft.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          <a
            href="/contact"
            className="px-7 py-3 bg-white text-primary-600 font-medium rounded-full hover:scale-105 transition"
          >
            Book a Call
          </a>

          <a
            href="/services"
            className="px-7 py-3 border border-white/40 rounded-full hover:bg-white/10 transition"
          >
            View Services
          </a>

        </div>

      </div>
    </section>
  );
}