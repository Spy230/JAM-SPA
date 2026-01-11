import { useState } from 'react'

const Masters = () => {
  const [alinaIndex, setAlinaIndex] = useState(0)
  const [kamilaIndex, setKamilaIndex] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImages, setModalImages] = useState([])
  const [modalIndex, setModalIndex] = useState(0)

  const alinaImages = [
    "/images/mod/Alina/DSC03919.jpg",
    "/images/mod/Alina/DSC03936.jpg",
    "/images/mod/Alina/DSC03943.jpg",
    "/images/mod/Alina/DSC03952.jpg",
    "/images/mod/Alina/DSC04009.jpg",
    "/images/mod/Alina/DSC04096.jpg"
  ]

  const kamilaImages = [
    "/images/mod/Kamila/DSC04119.jpg",
    "/images/mod/Kamila/DSC04127.jpg",
    "/images/mod/Kamila/DSC04155.jpg"
  ]

  const openModal = (images, index) => {
    setModalImages(images)
    setModalIndex(index)
    setModalOpen(true)
  }

  const navigateModal = (direction) => {
    setModalIndex((prev) => {
      const newIndex = prev + direction
      if (newIndex < 0) return modalImages.length - 1
      if (newIndex >= modalImages.length) return 0
      return newIndex
    })
  }

  const handleKeyDown = (e) => {
    if (!modalOpen) return
    if (e.key === 'ArrowLeft') navigateModal(-1)
    if (e.key === 'ArrowRight') navigateModal(1)
    if (e.key === 'Escape') setModalOpen(false)
  }

  useState(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [modalOpen])

  return (
    <>
      <section id="masters" className="masters-section">
        <h2>Наши Мастера</h2>
        <div className="masters-container">
          <div className="masters-grid">
            {/* Alina */}
            <div className="master-item">
              <div className="master-card">
                <h4>Alina</h4>
                <div className="master-carousel">
                  <img
                    src={alinaImages[alinaIndex]}
                    alt="Alina"
                    onClick={() => openModal(alinaImages, alinaIndex)}
                  />
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '15px' }}>
                    <button
                      onClick={() => setAlinaIndex((prev) => (prev - 1 + alinaImages.length) % alinaImages.length)}
                      className="master-nav-btn"
                    >
                      ←
                    </button>
                    <button
                      onClick={() => setAlinaIndex((prev) => (prev + 1) % alinaImages.length)}
                      className="master-nav-btn"
                    >
                      →
                    </button>
                  </div>
                </div>
                <p>Профессиональная мастерица с многолетним опытом</p>
              </div>
            </div>

            {/* Kamila */}
            <div className="master-item">
              <div className="master-card">
                <h4>Kamila</h4>
                <div className="master-carousel">
                  <img
                    src={kamilaImages[kamilaIndex]}
                    alt="Kamila"
                    onClick={() => openModal(kamilaImages, kamilaIndex)}
                  />
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '15px' }}>
                    <button
                      onClick={() => setKamilaIndex((prev) => (prev - 1 + kamilaImages.length) % kamilaImages.length)}
                      className="master-nav-btn"
                    >
                      ←
                    </button>
                    <button
                      onClick={() => setKamilaIndex((prev) => (prev + 1) % kamilaImages.length)}
                      className="master-nav-btn"
                    >
                      →
                    </button>
                  </div>
                </div>
                <p>Эксперт в искусстве расслабления</p>
              </div>
            </div>
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
            background: 'rgba(0, 0, 0, 0.98)',
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
            {modalIndex + 1} / {modalImages.length}
          </div>
          <button
            className="modal-nav-btn modal-prev-btn"
            onClick={(e) => { e.stopPropagation(); navigateModal(-1); }}
          >
            ←
          </button>
          <img
            src={modalImages[modalIndex]}
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

export default Masters
