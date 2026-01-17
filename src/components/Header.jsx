import { useState, useEffect } from 'react'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  // Блокируем прокрутку body при открытом меню
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Очистка при размонтировании
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <header>
        <div className="header-content">
          <div className="logo-section">
            <h1>JAM</h1>
            <h2>Массаж в Москве</h2>
          </div>
          
          {/* Кнопка гамбургер-меню */}
          <button 
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Навигация для десктопа */}
          <nav className="navigation desktop-nav">
            <a className="nav-item" onClick={() => scrollToSection('home')}>Главная</a>
            <a className="nav-item" onClick={() => scrollToSection('services')}>Услуги</a>
            <a className="nav-item" onClick={() => scrollToSection('masters')}>Мастера</a>
            <a className="nav-item" onClick={() => scrollToSection('about')}>О нас</a>
            <a className="nav-item" onClick={() => scrollToSection('interior')}>Интерьер</a>
            <a className="nav-item" onClick={() => scrollToSection('contacts')}>Контакты</a>
          </nav>
        </div>
      </header>

      {/* Мобильное меню - выпадающее вниз */}
      <div className={`mobile-menu-dropdown ${menuOpen ? 'open' : ''}`}>
        <nav className="mobile-navigation">
          <a className="mobile-nav-item" onClick={() => scrollToSection('home')}>Главная</a>
          <a className="mobile-nav-item" onClick={() => scrollToSection('services')}>Услуги</a>
          <a className="mobile-nav-item" onClick={() => scrollToSection('masters')}>Мастера</a>
          <a className="mobile-nav-item" onClick={() => scrollToSection('about')}>О нас</a>
          <a className="mobile-nav-item" onClick={() => scrollToSection('interior')}>Интерьер</a>
          <a className="mobile-nav-item" onClick={() => scrollToSection('contacts')}>Контакты</a>
        </nav>

        
      </div>
    </>
  )
}

export default Header
