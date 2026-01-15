import { useState, useEffect } from 'react'

const Hero = () => {
  const [currentPromoIndex, setCurrentPromoIndex] = useState(0)

  const promoSlides = [
    {
      title: "🎉 Специальная Акция!",
      text: "Скидка 1000 рублей на следующее посещение!"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromoIndex((prev) => (prev + 1) % promoSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="promo-section">
      <div className="promo-banner">
        {promoSlides.map((slide, index) => (
          <div
            key={index}
            className={`promo-slide ${index === currentPromoIndex ? 'active' : ''}`}
          >
            <h3>{slide.title}</h3>
            <p>{slide.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero
