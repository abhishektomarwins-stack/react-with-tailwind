import siteFooterImg from '../assets/images/site-footer.webp';

const DesignSection = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 lg:py-15 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="w-full max-w-sm flex justify-center">
          <img
            src={siteFooterImg}
            alt="Three years at Pixelgrade"
            title='Three years at Pixelgrade'
            className="w-full max-w-md object-contain"
          />
        </div>

        <div className="w-full text-left sm:text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl text-heading">
            How to design your site footer like we did
          </h2>
          <p className="text-text mt-5">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <div className="mt-8 flex justify-start sm:justify-center lg:justify-start">
            <a
              href="#"
              className="inline-flex cursor-pointer items-center gap-2 rounded-sm border-0 bg-primary px-8 py-4 text-sm font-bold text-white"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignSection;
