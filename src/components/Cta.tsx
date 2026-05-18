const Cta = () => {
  return (
    <section className="bg-surface py-15">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 flex flex-col items-center text-center gap-10">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-heading leading-tight max-w-175">
          Pellentesque suscipit fringilla libero eu.
        </h2>
        <a
          href="#"
          className="inline-flex cursor-pointer items-center gap-2 rounded-sm border-0 bg-primary px-8 py-4 text-base font-bold text-white"
        >
          Get a Demo
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </section>
  );
};

export default Cta;
