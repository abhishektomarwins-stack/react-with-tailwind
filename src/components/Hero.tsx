import { useState, useEffect } from 'react'
import banner from '../assets/images/banner.webp'

const slides = [
  {
    id: 1,
    title: "Lessons and insights",
    highlight: "from 8 years",
    description: "Where to grow your business as a photographer: site or social media?",
    buttonText: "Register",
    buttonLink: "#",
    image: banner,
    imageAlt: "Dashboard illustration"
  },
  {
    id: 2,
    title: "Grow your brand",
    highlight: "with premium designs",
    description: "Supercharge your online presence and turn visitors into regular, high-paying clients.",
    buttonText: "Explore Features",
    buttonLink: "#features",
    image: banner,
    imageAlt: "Dashboard illustration"
  },
  {
    id: 3,
    title: "Scale your revenue",
    highlight: "and automate tasks",
    description: "Spend less time on administrative overhead and more time capturing beautiful moments.",
    buttonText: "Join Free",
    buttonLink: "#pricing",
    image: banner,
    imageAlt: "Dashboard illustration"
  }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [startX, setStartX] = useState(0)
  const [currentOffsetX, setCurrentOffsetX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    if (isDragging) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [currentSlide, isDragging])

  const handleDragStart = (clientX: number) => {
    setIsDragging(true)
    setStartX(clientX)
  }

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return
    const diff = clientX - startX
    
    if (currentSlide === 0 && diff > 0) {
      setCurrentOffsetX(diff * 0.3)
    } else if (currentSlide === slides.length - 1 && diff < 0) {
      setCurrentOffsetX(diff * 0.3)
    } else {
      setCurrentOffsetX(diff)
    }
  }

  const handleDragEnd = () => {
    if (!isDragging) return
    setIsDragging(false)

    const threshold = 80 
    if (currentOffsetX < -threshold && currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1)
    } else if (currentOffsetX > threshold && currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1)
    }
    setCurrentOffsetX(0)
  }

  const handleLinkClick = (e: React.MouseEvent) => {
    if (Math.abs(currentOffsetX) > 10) {
      e.preventDefault()
    }
  }

  return (
    <section className="bg-surface overflow-hidden relative">
      <div 
        className={`flex ${isDragging ? '' : 'transition-transform duration-500 ease-in-out'} `}
        style={{ 
          transform: `translateX(calc(-${currentSlide * 100}% + ${currentOffsetX}px))` 
        }}
        onMouseDown={(e) => handleDragStart(e.clientX)}
        onMouseMove={(e) => handleDragMove(e.clientX)}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
        onTouchEnd={handleDragEnd}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full shrink-0">
            <div className="mx-auto max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-10 px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
              
              <div className="max-w-xl w-full text-left sm:text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                  {slide.title}
                  <span className="block text-primary">{slide.highlight}</span>
                </h1>
                <p className="mt-6 text-base font-bold leading-8 text-text">
                  {slide.description}
                </p>
                <div className="mt-10 flex justify-start sm:justify-center lg:justify-start">
                  <a 
                    href={slide.buttonLink} 
                    onClick={handleLinkClick}
                    className="cursor-pointer items-center gap-2 rounded-sm border-0 bg-primary px-8 py-4 text-sm font-bold text-white transition-all hover:bg-primary/90 hover:shadow-lg"
                  >
                    {slide.buttonText}
                  </a>
                </div>
              </div>

              <div className="hidden lg:block w-full max-w-md pointer-events-none">
                <img 
                  src={slide.image} 
                  alt={slide.imageAlt} 
                  title={slide.imageAlt} 
                  className="w-full object-contain" 
                  draggable={false}
                />
              </div>

            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 pb-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer border-0 ${
              currentSlide === index ? 'bg-primary w-6' : 'bg-border-soft opacity-30 hover:opacity-80 w-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}


