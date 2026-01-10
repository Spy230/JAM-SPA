const Footer = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '40px' }}>
          <div style={{ background: 'rgba(0, 0, 0, 0.3)', padding: '30px', borderRadius: '15px', border: '2px solid rgba(255, 42, 109, 0.3)' }}>
            <h3 style={{ fontSize: '24px', color: '#ff2a6d', marginBottom: '20px' }}>JAM Массаж</h3>
            <p style={{ fontSize: '16px', color: '#d4af37', lineHeight: '1.6', marginBottom: '20px' }}>
              Массаж в Москве — место, где вы можете полностью расслабиться и забыть о повседневных заботах.
            </p>
            <h4 style={{ fontSize: '18px', color: '#ff2a6d', marginBottom: '15px', marginTop: '25px' }}>Навигация</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a onClick={() => scrollToSection('home')} style={{ color: '#ffffff', cursor: 'pointer', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#ff2a6d'} onMouseLeave={(e) => e.target.style.color = '#ffffff'}>Главная</a>
              <a onClick={() => scrollToSection('services')} style={{ color: '#ffffff', cursor: 'pointer', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#ff2a6d'} onMouseLeave={(e) => e.target.style.color = '#ffffff'}>Услуги</a>
              <a onClick={() => scrollToSection('masters')} style={{ color: '#ffffff', cursor: 'pointer', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#ff2a6d'} onMouseLeave={(e) => e.target.style.color = '#ffffff'}>Мастера</a>
              <a onClick={() => scrollToSection('about')} style={{ color: '#ffffff', cursor: 'pointer', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#ff2a6d'} onMouseLeave={(e) => e.target.style.color = '#ffffff'}>О нас</a>
              <a onClick={() => scrollToSection('interior')} style={{ color: '#ffffff', cursor: 'pointer', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#ff2a6d'} onMouseLeave={(e) => e.target.style.color = '#ffffff'}>Интерьер</a>
              <a onClick={() => scrollToSection('contacts')} style={{ color: '#ffffff', cursor: 'pointer', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#ff2a6d'} onMouseLeave={(e) => e.target.style.color = '#ffffff'}>Контакты</a>
            </div>
          </div>
          <div style={{ background: 'rgba(0, 0, 0, 0.3)', padding: '30px', borderRadius: '15px', border: '2px solid rgba(255, 42, 109, 0.3)' }}>
            <h3 style={{ fontSize: '24px', color: '#ff2a6d', marginBottom: '20px' }}>Контакты</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', fontSize: '16px', color: '#ffffff' }}>
              <p>Телефон: <a href="tel:+79999999999" style={{ color: '#d4af37', textDecoration: 'none' }}>+7 (999) 999-99-99</a></p>
              <p>Адрес: Москва, ул. Примерная, д. 1</p>
              <p>Режим работы: Ежедневно 10:00 - 23:00</p>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255, 42, 109, 0.3)', paddingTop: '30px', textAlign: 'center' }}>
          <p style={{ fontSize: '14px', color: '#999' }}>© 2026 JAM — Массаж в Москве. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
