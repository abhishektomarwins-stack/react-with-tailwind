import banner from '../assets/images/banner.webp'

export default function Hero() {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-10 px-4 sm:px-6 lg:px-8 py-16 lg:py-24">

        <div className="max-w-xl w-full text-left sm:text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-heading">
            Lessons and insights
            <span className="block text-primary">from 8 years</span>
          </h1>
          <p className="mt-6 text-base font-bold leading-8 text-text">
            Where to grow your business as a photographer: site or social media?
          </p>
          <div className="mt-10 flex justify-start sm:justify-center lg:justify-start">
            <a href="#" className="inline-flex cursor-pointer items-center gap-2 rounded-sm border-0 bg-primary px-8 py-4 text-sm font-bold text-white">
              Register
            </a>
          </div>
        </div>

        <div className="w-full max-w-md">
          <img src={banner} alt="Dashboard illustration" title='Dashboard illustration' className="w-full object-contain" />
        </div>

      </div>

      <div className="flex items-center justify-center gap-2 pb-10">
        <span className="h-2 w-2 rounded-full bg-primary"></span>
        <span className="h-2 w-2 rounded-full bg-border-soft opacity-30"></span>
        <span className="h-2 w-2 rounded-full bg-border-soft opacity-30"></span>
      </div>
    </section>
  )
}
