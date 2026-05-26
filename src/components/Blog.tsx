import streamlined from '../assets/images/streamlined.webp'
import safeguarding from '../assets/images/safeguarding.webp'
import revamping from '../assets/images/Revamping.webp'

export default function Blog() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-left sm:text-center mb-14">
          <h2 className="text-4xl font-bold">Caring is the new marketing</h2>
          <p className="mt-4 text-base text-text sm:mx-auto" style={{ maxWidth: '600px' }}>
            The Nextcent blog is the best place to read about the latest membership insights,
            trends and more. See who's joining the community, read about how our community are
            increasing their membership income and lot's more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="group relative flex flex-col cursor-pointer">
            <div className="overflow-hidden rounded-md h-64 hover:scale-105 transition-transform duration-300">
              <img
                src={streamlined}
                alt="Creating Streamlined Safeguarding Processes with OneRen"
                title='Creating Streamlined Safeguarding Processes with OneRen'
                className="w-full h-full object-cover" />
            </div>
            <div className="relative mx-4 -mt-20 bg-surface rounded-md shadow-lg p-6 text-center flex flex-col gap-4 flex-1 justify-between hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-text">
                Creating Streamlined Safeguarding Processes with OneRen
              </h3>
              <a href="#" className="inline-flex items-center justify-center gap-1 text-primary font-semibold">
                Read more
                <i className="fa-solid fa-arrow-right text-s" aria-hidden="true"></i>
              </a>
            </div>
          </article>

          <article className="group relative flex flex-col cursor-pointer">
            <div className="overflow-hidden rounded-md h-64 hover:scale-105 transition-transform duration-300">
              <img
                src={safeguarding}
                alt="What are your safeguarding responsibilities and how can you manage them?"
                title='What are your safeguarding responsibilities and how can you manage them?'
                className="w-full h-full object-cover" />
            </div>
            <div className="relative mx-4 -mt-20 bg-surface rounded-md shadow-lg p-6 text-center flex flex-col gap-4 flex-1 justify-between hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-text">
                What are your safeguarding responsibilities and how can you manage them?
              </h3>
              <a href="#" className="inline-flex items-center justify-center gap-1 text-primary font-semibold">
                Read more
                <i className="fa-solid fa-arrow-right text-s" aria-hidden="true"></i>
              </a>
            </div>
          </article>

          <article className="group relative flex flex-col cursor-pointer">
            <div className="overflow-hidden rounded-md h-64 hover:scale-105 transition-transform duration-300">
              <img
                src={revamping}
                alt="Revamping the Membership Model with Triathlon Australia"
                title='Revamping the Membership Model with Triathlon Australia'
                className="w-full h-full object-cover" />
            </div>
            <div className="relative mx-4 -mt-20 bg-surface rounded-md shadow-lg p-6 text-center flex flex-col gap-4 flex-1 justify-between hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-text">
                Revamping the Membership Model with Triathlon <br></br>Australia
              </h3>
              <a href="#" className="inline-flex items-center justify-center gap-1 text-primary font-semibold">
                Read more
                <i className="fa-solid fa-arrow-right text-s" aria-hidden="true"></i>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
