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
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-heading leading-tight">
          Manage your entire community<br className="hidden sm:block" />in a single system
        </h2>
        <p className="mt-4 text-text">Who is Nextcent suitable for?</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5">
          {cards.map(({ img, alt, title }) => (
            <div key={alt} className="rounded-2xl border-b border-border-color p-6 sm:p-8">
              <div className="flex justify-start sm:justify-center mb-6">
                <img src={img} alt={alt} className="w-16 h-16 sm:w-20 sm:h-20" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-heading mb-3 whitespace-pre-line">{title}</h3>
              <p className="text-text leading-relaxed">Our membership management software provides full automation of membership renewals and payments</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
