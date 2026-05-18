import spendingImg from '../assets/images/spending.webp'

export default function Spending() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 lg:py-15 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="w-full max-w-sm flex justify-center">
          <img
            src={spendingImg}
            alt="Three years at Pixelgrade"
            title='Three years at Pixelgrade'
            className="w-full max-w-md object-contain"
          />
        </div>

        <div className="w-full text-left sm:text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl text-heading font-semibold">
            The unseen of spending three years at Pixelgrade
          </h2>
          <p className="text-text mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <div className="mt-8 flex justify-start sm:justify-center lg:justify-start">
            <a
              href="#"
              className="inline-flex cursor-pointer items-center gap-2 rounded-sm border-0 bg-primary px-8 py-4 text-sm font-bold text-white hover:opacity-90 transition-opacity"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
