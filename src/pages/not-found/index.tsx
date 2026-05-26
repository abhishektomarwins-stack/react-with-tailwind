import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <section className="bg-surface">
      <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
        <p className="text-sm font-bold text-primary">404</p>
        <h1 className="mt-4 text-4xl font-bold text-heading sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-5 text-base leading-8 text-text">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-bold text-white"
        >
          Back to Home
          <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </Link>
      </div>
    </section>
  )
}
