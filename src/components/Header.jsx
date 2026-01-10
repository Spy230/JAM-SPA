const Header = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header>
      <div className="header-content">
        <div className="logo-section">
          <h1>JAM</h1>
          <h2>Массаж в Москве</h2>
        </div>
        <nav className="navigation">
          <a className="nav-item" onClick={() => scrollToSection('home')}>Главная</a>
          <a className="nav-item" onClick={() => scrollToSection('services')}>Услуги</a>
          <a className="nav-item" onClick={() => scrollToSection('masters')}>Мастера</a>
          <a className="nav-item" onClick={() => scrollToSection('about')}>О нас</a>
          <a className="nav-item" onClick={() => scrollToSection('interior')}>Интерьер</a>
          <a className="nav-item" onClick={() => scrollToSection('contacts')}>Контакты</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
