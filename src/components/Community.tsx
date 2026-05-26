import membershipSvg from '../assets/images/svg/membership.svg'
import nationalSvg from '../assets/images/svg/national.svg'
import clubsSvg from '../assets/images/svg/clubs.svg'

const cards = [
  { img: membershipSvg, alt: 'Membership', title: 'Membership\nOrganisations' },
  { img: nationalSvg, alt: 'National Associations', title: 'National\nAssociations' },
  { img: clubsSvg, alt: 'Clubs And Groups', title: 'Clubs And\nGroups' },
]

export default function Community() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-16 text-left sm:text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          Manage your entire community<br className="hidden sm:block" />in a single system
        </h2>
        <p className="mt-4 text-text">Who is Nextcent suitable for?</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5">
          {cards.map(({ img, alt, title }) => (
            <div key={alt} className="rounded-xl border-b border-gray-200 shadow-[0_8px_5px_-6px_rgba(0,0,0,0.1)] p-6 sm:p-8 hover:shadow-[0_12px_10px_-6px_rgba(0,0,0,0.1)] transition-shadow duration-300">
              <div className="flex justify-start sm:justify-center mb-6">
                <img src={img} alt={alt} className="w-16 h-16 sm:w-20 sm:h-20" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 whitespace-pre-line">{title}</h3>
              <p className="text-text leading-relaxed">Our membership management software provides full automation of membership renewals and payments</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
