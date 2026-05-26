import { Link } from 'react-router-dom';
import logo from '../assets/images/svg/logo.svg';

const socials = ["fa-instagram", "fa-dribbble", "fa-twitter", "fa-youtube"];
const company = [
  { label: "About us", to: "/community" },
  { label: "Blog", to: "/blog" },
  { label: "Contact us", to: "/community" },
  { label: "Pricing", to: "/pricing" },
  { label: "Testimonials", to: "/community" },
];
const support = [
  { label: "Help center", to: "/features" },
  { label: "Terms of service", to: "/features" },
  { label: "Legal", to: "/features" },
  { label: "Privacy policy", to: "/features" },
  { label: "Status", to: "/features" },
];

export default function Footer() {
  return (
    <footer className="bg-footer font-sans">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="flex flex-col items-center sm:items-start gap-5 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white">
              <img src={logo} alt="Nexcent logo" className="size-8" />
              Nexcent
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed text-center sm:text-left">
              Copyright &copy; 2020 Landify UI Kit.<br />All rights reserved
            </p>
            <div className="flex gap-3">
              {socials.map((icon) => (
                <a key={icon} href="#" className="flex size-10 items-center justify-center rounded-full bg-white/10 text-gray-300 hover:bg-white/20 transition-colors">
                  <i className={`fab ${icon}`} />
                </a>
              ))}
            </div>
          </div>
          {[{ title: "Company", links: company }, { title: "Support", links: support }].map(({ title, links }) => (
            <div key={title} className="flex flex-col items-center sm:items-start gap-4">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <ul className="flex flex-col items-center sm:items-start gap-3">
                {links.map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} className="text-sm text-gray-300 hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col items-center sm:items-start gap-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold text-white">Stay up to date</h3>
            <form className="flex w-full max-w-sm mx-auto sm:mx-0" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" className="w-full rounded-l-lg bg-white/10 px-4 py-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white/30" />
              <button type="submit" className="flex shrink-0 items-center justify-center rounded-r-lg bg-white/10 px-3.5 py-2.5 text-white hover:bg-white/20 transition-colors">
                <i className="fas fa-paper-plane" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
