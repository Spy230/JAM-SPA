const Footer = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '40px' }}>
          <div style={{ background: 'rgba(0, 0, 0, 0.3)', padding: '30px', borderRadius: '15px', border: '2px solid rgba(255, 255, 255, 0.2)' }}>
            <h3 style={{ fontSize: '24px', color: '#ffffff', marginBottom: '20px' }}>JAM Массаж</h3>
            <p style={{ fontSize: '16px', color: '#00BFFF', lineHeight: '1.6', marginBottom: '20px' }}>
              Массаж в Москве — место, где вы можете полностью расслабиться и забыть о повседневных заботах.
            </p>
            <h4 style={{ fontSize: '18px', color: '#ffffff', marginBottom: '15px', marginTop: '25px' }}>Навигация</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a onClick={() => scrollToSection('home')} style={{ color: '#ffffff', cursor: 'pointer', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#cccccc'} onMouseLeave={(e) => e.target.style.color = '#ffffff'}>Главная</a>
              <a onClick={() => scrollToSection('services')} style={{ color: '#ffffff', cursor: 'pointer', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#cccccc'} onMouseLeave={(e) => e.target.style.color = '#ffffff'}>Услуги</a>
              <a onClick={() => scrollToSection('masters')} style={{ color: '#ffffff', cursor: 'pointer', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#cccccc'} onMouseLeave={(e) => e.target.style.color = '#ffffff'}>Мастера</a>
              <a onClick={() => scrollToSection('about')} style={{ color: '#ffffff', cursor: 'pointer', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#cccccc'} onMouseLeave={(e) => e.target.style.color = '#ffffff'}>О нас</a>
              <a onClick={() => scrollToSection('interior')} style={{ color: '#ffffff', cursor: 'pointer', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#cccccc'} onMouseLeave={(e) => e.target.style.color = '#ffffff'}>Интерьер</a>
              <a onClick={() => scrollToSection('contacts')} style={{ color: '#ffffff', cursor: 'pointer', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#cccccc'} onMouseLeave={(e) => e.target.style.color = '#ffffff'}>Контакты</a>
            </div>
          </div>
          <div style={{ background: 'rgba(0, 0, 0, 0.3)', padding: '30px', borderRadius: '15px', border: '2px solid rgba(255, 255, 255, 0.2)' }}>
            <h3 style={{ fontSize: '24px', color: '#ffffff', marginBottom: '20px' }}>Контакты</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', fontSize: '16px', color: '#ffffff' }}>
              <p>Телефон: <a href="tel:+79123172457" style={{ color: '#ffffff', textDecoration: 'none' }}>+7 (912) 317-24-57</a></p>
              <p>Адрес: Центральный федеральный округ, Москва, Новомосковский административный округ, район Коммунарка, Скандинавский бульвар, 5, корп. 3</p>
              <p>Режим работы: Круглосуточно</p>
              <div style={{ marginTop: '20px' }}>
                <h4 style={{ fontSize: '18px', color: '#ffffff', marginBottom: '15px' }}>💳 Способы оплаты</h4>
                <p style={{ fontSize: '14px', color: '#00BFFF', marginBottom: '10px' }}>Принимаем все виды оплаты:</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
                  <span style={{ fontSize: '12px', background: 'rgba(0, 212, 255, 0.2)', padding: '5px 10px', borderRadius: '15px', color: '#ffffff' }}>Карты</span>
                  <span style={{ fontSize: '12px', background: 'rgba(0, 212, 255, 0.2)', padding: '5px 10px', borderRadius: '15px', color: '#ffffff' }}>Наличные</span>
                  <span style={{ fontSize: '12px', background: 'rgba(0, 212, 255, 0.2)', padding: '5px 10px', borderRadius: '15px', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    Переводы
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)', paddingTop: '30px', textAlign: 'center' }}>
          <p style={{ fontSize: '14px', color: '#999', marginBottom: '15px' }}>© 2026 JAM — Массаж в Москве. Все права защищены.</p>
          <p style={{ fontSize: '16px', color: '#999', lineHeight: '1.6', fontWeight: '600' }}>
            Интимных услуг не предоставляем (+18)
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer