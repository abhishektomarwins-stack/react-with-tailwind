import membersIcon from '../assets/images/svg/members.svg';
import clubsIcon from '../assets/images/svg/club-c.svg';
import eventsIcon from '../assets/images/svg/events.svg';
import paymentsIcon from '../assets/images/svg/payments.svg';

const Stats = () => {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 lg:py-15 flex flex-col lg:flex-row items-start sm:items-center gap-10 lg:gap-16">
        <div className="flex-1 text-left sm:text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl text-heading leading-tight font-sans">
            Helping a local
            <span className="block text-primary">business reinvent itself</span>
          </h2>

          <p className="mt-5 text-base text-text font-sans">
            We reached here with our hard work and dedication
          </p>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-x-8 sm:gap-x-12 lg:gap-x-16 gap-y-8 sm:gap-y-10">
          <div className="flex items-center gap-3">
            <img
              src={membersIcon}
              alt="Members"
              title='Members'
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain shrink-0"
            />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-heading leading-none">
                2,245,341
              </h3>
              <p className="mt-1 text-sm text-text">Members</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img
              src={clubsIcon}
              alt="Club"
              title='Club'
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain shrink-0"
            />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-heading leading-none">
                46,328
              </h3>
              <p className="mt-1 text-sm text-text">Clubs</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img
              src={eventsIcon}
              alt="Event Bookings"
              title='Event Bookings'
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain shrink-0"
            />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-heading leading-none">
                828,867
              </h3>
              <p className="mt-1 text-sm text-text">Event Bookings</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img
              src={paymentsIcon}
              alt="Payments"
              title='Payments'
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain shrink-0"
            />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-heading leading-none">
                1,926,436
              </h3>
              <p className="mt-1 text-sm text-text">Payments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;