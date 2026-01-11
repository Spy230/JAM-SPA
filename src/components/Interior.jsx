import { useState } from 'react'

const Interior = () => {
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalIndex, setModalIndex] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)

  const interiorImages = [
    "/images/mod/Interier/DSC03799.jpg",
    "/images/mod/Interier/DSC03804.jpg",
    "/images/mod/Interier/DSC03807.jpg",
    "/images/mod/Interier/DSC03808.jpg",
    "/images/mod/Interier/DSC03810.jpg",
    "/images/mod/Interier/DSC03812.jpg",
    "/images/mod/Interier/DSC03820.jpg",
    "/images/mod/Interier/DSC03829.jpg",
    "/images/mod/Interier/DSC03831.jpg",
    "/images/mod/Interier/DSC03834.jpg",
    "/images/mod/Interier/DSC03837.jpg",
    "/images/mod/Interier/DSC03845.jpg",
    "/images/mod/Interier/DSC03846.jpg",
    "/images/mod/Interier/DSC03850.jpg",
    "/images/mod/Interier/DSC03854.jpg",
    "/images/mod/Interier/DSC03866.jpg",
    "/images/mod/Interier/DSC03870.jpg",
    "/images/mod/Interier/DSC03874.jpg",
    "/images/mod/Interier/DSC03881.jpg",
    "/images/mod/Interier/DSC03891.jpg",
    "/images/mod/Interier/DSC03895.jpg",
    "/images/mod/Interier/DSC03910.jpg",
    "/images/mod/Interier/DSC03913.jpg"
  ]

  const openModal = (index) => {
    setModalIndex(index)
    setModalOpen(true)
  }

  const navigateModal = (direction) => {
    setModalIndex((prev) => {
      const newIndex = prev + direction
      if (newIndex < 0) return interiorImages.length - 1
      if (newIndex >= interiorImages.length) return 0
      return newIndex
    })
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % interiorImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + interiorImages.length) % interiorImages.length)
  }

  return (
    <>
      <section id="interior">
        <h2 style={{ fontSize: '48px', fontWeight: 'bold', textAlign: 'center', color: '#00D4FF', marginBottom: '30px' }}>
          Наш Интерьер
        </h2>
        <p className="interior-intro">
          Погрузитесь в атмосферу роскоши и комфорта. Наш интерьер создан для вашего максимального расслабления и наслаждения.
        </p>

        {/* Carousel */}
        <div className="interior-carousel">
          <button className="carousel-btn carousel-prev" onClick={prevSlide}>
            ‹
          </button>
          <div className="carousel-container">
            <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {interiorImages.map((img, index) => (
                <div key={index} className="carousel-slide">
                  <img src={img} alt={`Интерьер ${index + 1}`} onClick={() => openModal(index)} />
                </div>
              ))}
            </div>
          </div>
          <button className="carousel-btn carousel-next" onClick={nextSlide}>
            ›
          </button>
          <div className="carousel-indicators">
            {interiorImages.map((_, index) => (
              <button
                key={index}
                className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        <button
          className={`view-gallery-btn ${galleryOpen ? 'active' : ''}`}
          onClick={() => setGalleryOpen(!galleryOpen)}
        >
          <span>{galleryOpen ? 'Скрыть галерею' : 'Посмотреть весь интерьер'}</span>
          <i style={{ marginLeft: '10px' }}>▼</i>
        </button>

        <div className={`full-gallery-container ${galleryOpen ? 'open' : ''}`}>
          <div className="interior-gallery">
            {interiorImages.map((img, index) => (
              <div
                key={index}
                className="interior-gallery-item"
                onClick={() => openModal(index)}
              >
                <img src={img} alt={`Интерьер ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 85, 71, 0.98)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onClick={() => setModalOpen(false)}
        >
          <button
            className="modal-close-btn"
            style={{ position: 'absolute', top: '20px', right: '20px' }}
            onClick={() => setModalOpen(false)}
          >
            ✕
          </button>
          <div className="image-counter" style={{ position: 'absolute', top: '20px', left: '20px' }}>
            {modalIndex + 1} / {interiorImages.length}
          </div>
          <button
            className="modal-nav-btn modal-prev-btn"
            onClick={(e) => { e.stopPropagation(); navigateModal(-1); }}
          >
            ←
          </button>
          <img
            src={interiorImages[modalIndex]}
            alt="Gallery"
            className="modal-fullscreen-image"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="modal-nav-btn modal-next-btn"
            onClick={(e) => { e.stopPropagation(); navigateModal(1); }}
          >
            →
          </button>
        </div>
      )}
    </>
  )
}

export default Interior
