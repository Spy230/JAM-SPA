import { useState } from 'react'

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [imageError, setImageError] = useState({})

  const services = [
    {
      title: "Classic",
      subtitle: "Классический массаж",
      description: "Максимум наслаждения и восстановления сил за один сеанс!",
      fullDescription: "Нежные женские руки дарят волны глубокого расслабления и ярких чувственных ощущений. Тёплые масла, томные прикосновения, полное растворение в удовольствии - без спешки и границ.",
      price: "7000 ₽",
      duration: "60 минут",
      image: "/images/mod/services/CLASSIC.png"
    },
    {
      title: "VIP",
      subtitle: "VIP-программа",
      description: "Абсолютный релакс и пик удовольствия для настоящих ценителей.",
      fullDescription: "Роскошь без компромиссов. Две роскошные топ-мастерицы в вашем полном распоряжении: изысканные прикосновения всем телом, тёплые масла, поцелуи, совместный душ и безграничное чувственное наслаждение. Максимум ласки, страсти и ярчайших эмоций.",
      price: "12000 ₽",
      duration: "90 минут",
      image: "/images/mod/services/VIP.png"
    },
    {
      title: "Silver",
      subtitle: "Программа Silver",
      description: "Двойная ласка, удвоенное наслаждение - от кончиков пальцев до полного блаженства!",
      fullDescription: "Изысканное удовольствие премиум-класса. Две очаровательные мастерицы одновременно окутают вас нежными прикосновениями, тёплыми маслами и синхронными волнами чувственного жара.",
      price: "9000 ₽",
      duration: "75 минут",
      image: "/images/mod/services/SILVER.png"
    },
    {
      title: "Express",
      subtitle: "Экспресс-программа",
      description: "Горячие масла, дразнящие прикосновения и стремительное расслабление с продолжением - идеально, когда время ограничено, а желание на пределе.",
      fullDescription: "Быстро, ярко, мощно! За 30 минут нежные женские руки снимут весь стресс и подарят взрывной заряд чувственного удовольствия.",
      price: "5000 ₽",
      duration: "45 минут",
      image: "/images/mod/services/EXPRESS.png"
    },
    {
      title: "Общение",
      subtitle: "Программа общения",
      description: "Максимум внимания, искренней близости и глубокого удовольствия в одном сеансе.",
      fullDescription: "Идеальный выбор, если хочется не только тела, но и души. Красивая, умная и невероятно нежная мастерица сначала поговорит с вами по душам за чашкой чая или бокалом вина: снимет напряжение, выслушает, подарит тепло и лёгкий флирт.",
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

  const handleImageError = (index) => {
    console.error(`Failed to load image for service: ${services[index].title}`)
    console.error(`Image path: ${services[index].image}`)
    setImageError(prev => ({ ...prev, [index]: true }))
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
              {imageError[activeIndex] ? (
                <div style={{ 
                  width: '100%', 
                  height: '100%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 'bold'
                }}>
                  {services[activeIndex].title}
                </div>
              ) : (
                <img 
                  src={services[activeIndex].image} 
                  alt={services[activeIndex].title}
                  onError={() => handleImageError(activeIndex)}
                  onLoad={() => console.log(`Image loaded: ${services[activeIndex].image}`)}
                />
              )}
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
