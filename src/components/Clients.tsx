import logo1 from '../assets/images/svg/abstract-geometric.svg';
import logo2 from '../assets/images/svg/abstract-eye.svg';
import logo3 from '../assets/images/svg/monogram.svg';
import logo4 from '../assets/images/svg/wordmark.svg';
import logo5 from '../assets/images/svg/fingerprint.svg';
import logo6 from '../assets/images/svg/infinity-link.svg';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo3]

export default function Clients() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 text-left sm:text-center">
        <h2 className="text-4xl font-bold ">Our Clients</h2>
        <p className="mt-3 font-bold text-text">We have been working with some Fortune 500+ clients</p>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:justify-between items-center gap-8 lg:gap-0">
          {logos.map((src, i) => (
            <a key={i} href="#">
              <img src={src} alt="Client logo" title='Client logo' className="size-15 hover:scale-110 transition-transform" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
