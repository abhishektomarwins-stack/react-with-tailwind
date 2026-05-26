import Cta from '../../components/Cta'

const plans = [
  {
    name: 'Starter',
    price: '$19',
    description: 'For small clubs getting organized online.',
    features: ['Member profiles', 'Event listings', 'Email support'],
  },
  {
    name: 'Growth',
    price: '$49',
    description: 'For teams ready to automate renewals and reporting.',
    features: ['Payment automation', 'Advanced analytics', 'Priority support'],
    highlighted: true,
  },
  {
    name: 'Scale',
    price: '$99',
    description: 'For larger communities with multiple teams.',
    features: ['Unlimited groups', 'Custom workflows', 'Dedicated onboarding'],
  },
]

export const Pricing = () => {
  return (
    <>


      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {plans.map(({ name, price, description, features, highlighted }) => (
            <article
              key={name}
              className={`rounded-lg border p-8 shadow-sm ${highlighted ? 'border-primary bg-surface' : 'border-gray-200 bg-white'}`}
            >
              <h2 className="text-2xl font-bold text-heading">{name}</h2>
              <p className="mt-3 min-h-14 text-sm leading-6 text-text">{description}</p>
              <div className="mt-8 flex items-end gap-2">
                <span className="text-4xl font-bold text-heading">{price}</span>
                <span className="pb-1 text-sm text-text">/ month</span>
              </div>
              <ul className="mt-8 flex flex-col gap-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-text">
                    <i className="fa-solid fa-check text-primary" aria-hidden="true"></i>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:hello@nexcent.com"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-sm px-6 py-3 text-sm font-bold ${highlighted ? 'bg-primary text-white' : 'border border-primary text-primary'}`}
              >
                Get Started
              </a>
            </article>
          ))}
        </div>
      </section>

      <Cta />
    </>
  )
}
