import { useState } from 'react'

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const services = [
    {
      title: "Classic",
      subtitle: "Классический массаж",
      description: "Максимум наслаждения и восстановления сил за один сеанс! Это идеальный выбор для тех, кто хочет полностью отключиться от повседневных забот.",
      fullDescription: "Классический массаж — это проверенная временем техника, которая сочетает в себе традиционные методы релаксации и восстановления. Наши мастера используют специальные масла и техники, чтобы снять напряжение, улучшить кровообращение и подарить вам незабываемые ощущения.",
      price: "7000 ₽",
      duration: "60 минут",
      image: "/images/mod/services/CLASSIC.png"
    },
    {
      title: "VIP",
      subtitle: "VIP-программа",
      description: "Абсолютный релакс и пик удовольствия для настоящих ценителей. VIP-программа создана для тех, кто ценит эксклюзивность.",
      fullDescription: "VIP-программа — это эксклюзивный сервис премиум-класса. Включает в себя индивидуальный подход, использование элитных масел и косметики, а также дополнительные услуги для максимального комфорта. Идеально для тех, кто привык к лучшему.",
      price: "12000 ₽",
      duration: "90 минут",
      image: "/images/mod/services/VIP.png"
    },
    {
      title: "Silver",
      subtitle: "Программа Silver",
      description: "Двойная ласка, удвоенное наслаждение — от кончиков пальцев до полного блаженства! Идеальный баланс между роскошью и доступностью.",
      fullDescription: "Программа Silver предлагает уникальный опыт с участием двух мастериц одновременно. Синхронные движения, двойное внимание и невероятные ощущения создают атмосферу полного погружения в мир релакса и удовольствия.",
      price: "9000 ₽",
      duration: "75 минут",
      image: "/images/mod/services/SILVER.png"
    },
    {
      title: "Express",
      subtitle: "Экспресс-программа",
      description: "Горячие масла, дразнящие прикосновения и стремительное расслабление. Идеально, когда время ограничено, а желание на пределе.",
      fullDescription: "Экспресс-программа разработана для занятых людей, которые хотят получить максимум удовольствия за минимальное время. Концентрированная программа включает самые эффективные техники релаксации и восстановления энергии.",
      price: "5000 ₽",
      duration: "45 минут",
      image: "/images/mod/services/EXPRESS.png"
    },
    {
      title: "Общение",
      subtitle: "Программа общения",
      description: "Максимум внимания, искренней близости и глубокого удовольствия. Красивая, умная и невероятно нежная мастерица.",
      fullDescription: "Программа общения — это не просто массаж, это возможность провести время в приятной компании. Наши мастерицы не только профессионалы своего дела, но и интересные собеседницы, которые создадут атмосферу комфорта и доверия.",
      price: "5000 ₽",
      duration: "60 минут",
      image: "/images/mod/services/ОБЩЕНИЕ.png"
    }
  ]

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="services" className="services-section">
      <h2 className="services-title">ТОП 5 ПРОГРАММ</h2>
      
      <div className="services-container">
        {/* Левая часть - Список услуг */}
        <div className="services-list">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-item ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="service-number">{String(index + 1).padStart(2, '0')}</div>
              <div className="service-info">
                <h3 className="service-item-title">{service.title}</h3>
                <p className="service-item-description">{service.fullDescription}</p>
                <div className="service-meta">
                  <span className="service-duration">{service.duration}</span>
                  <span className="service-price">{service.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Правая часть - Карточка */}
        <div className="services-card-container">
          <div className="service-card-wrapper">
            <div className="service-card-image">
              <img src={services[activeIndex].image} alt={services[activeIndex].title} />
            </div>
            <div className="service-card-content">
              <h3 className="service-card-title">{services[activeIndex].title}</h3>
              <p className="service-card-subtitle">{services[activeIndex].subtitle}</p>
              <p className="service-card-description">{services[activeIndex].description}</p>
            </div>
          </div>

          {/* Кнопки навигации */}
          <div className="service-navigation">
            <button className="nav-btn nav-up" onClick={handlePrev}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="nav-indicator">
              {activeIndex + 1} / {services.length}
            </div>
            <button className="nav-btn nav-down" onClick={handleNext}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
