import maecenasImg from '../assets/images/maecenas.webp';
import logo1 from '../assets/images/svg/logo-1.svg';
import logo2 from '../assets/images/svg/logo-2.svg';
import logo3 from '../assets/images/svg/logo-3.svg';
import logo4 from '../assets/images/svg/logo-4.svg';
import logo5 from '../assets/images/svg/logo-5.svg';
import logo6 from '../assets/images/svg/logo-6.svg';

const Testimonial = () => {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-5">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 items-start">
          <div className="flex justify-center lg:justify-start">
            <img
              src={maecenasImg}
              alt="Client showcase"
              className="w-72 h-72"
            />
          </div>
          <div className="max-w-full lg:max-w-3xl">
            <p className="text-base text-text mb-2">
              Maecenas dignissim justo eget nulla rutrum molestie.
              Maecenas lobortis sem dui, vel rutrum risus tincidunt
              ullamcorper. Proin eu enim metus. Vivamus sed libero
              ornare, tristique quam in, gravida enim. Nullam ut
              molestie arcu, at hendrerit elit. Morbi laoreet elit at
              ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla
              sodales. Suspendisse eget lorem eu turpis vestibulum
              pretium. Quisque malesuada enim sapien, vitae placerat
              ante feugiat eget. Quisque vulputate odio neque, eget
              efficitur libero condimentum id. Curabitur id nibh id
              sem dignissim finibus ac sit amet magna.
            </p>
            <div className="mb-8">
              <h3 className="text-[20px] font-semibold text-primary mb-2">
                Tim Smith
              </h3>
              <p className="text-sm text-text">
                British Dragon Boat Racing Association
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              <img src={logo1} alt="Logo 1" className="h-8 w-auto" />
              <img src={logo2} alt="Logo 2" className="h-8 w-auto" />
              <img src={logo3} alt="Logo 3" className="h-8 w-auto" />
              <img src={logo4} alt="Logo 4" className="h-8 w-auto" />
              <img src={logo5} alt="Logo 5" className="h-8 w-auto" />
              <img src={logo6} alt="Logo 6" className="h-8 w-auto" />
              <a
                href="#"
                className="inline-flex items-center gap-3 text-primary font-semibold whitespace-nowrap mt-2 sm:mt-0"
              >
                Meet all customers
                <i className="fa-solid fa-arrow-right text-sm" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
