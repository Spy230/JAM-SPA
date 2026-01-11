const Contacts = () => {
  return (
    <section id="contacts" style={{ margin: '80px 0', padding: '60px 20px', background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(0, 191, 255, 0.05))', borderRadius: '20px' }}>
      <h2 style={{ fontSize: '48px', fontWeight: 'bold', textAlign: 'center', color: '#00D4FF', marginBottom: '50px' }}>
        Контакты
      </h2>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
        <div>
          <div style={{ background: 'rgba(0, 0, 0, 0.5)', borderRadius: '20px', padding: '30px', border: '2px solid rgba(0, 212, 255, 0.3)', marginBottom: '20px' }}>
            <h4 style={{ fontSize: '22px', color: '#00D4FF', marginBottom: '15px' }}>📍 Адрес</h4>
            <p style={{ fontSize: '16px', color: '#ffffff' }}>Москва, ул. Примерная, д. 1</p>
          </div>
          <div style={{ background: 'rgba(0, 0, 0, 0.5)', borderRadius: '20px', padding: '30px', border: '2px solid rgba(0, 212, 255, 0.3)', marginBottom: '20px' }}>
            <h4 style={{ fontSize: '22px', color: '#00D4FF', marginBottom: '15px' }}>📞 Телефон</h4>
            <p style={{ fontSize: '16px', color: '#ffffff' }}>
              <a href="tel:+79999999999" style={{ color: '#00BFFF', textDecoration: 'none' }}>+7 (999) 999-99-99</a>
            </p>
          </div>
          <div style={{ background: 'rgba(0, 0, 0, 0.5)', borderRadius: '20px', padding: '30px', border: '2px solid rgba(0, 212, 255, 0.3)', marginBottom: '20px' }}>
            <h4 style={{ fontSize: '22px', color: '#00D4FF', marginBottom: '15px' }}>⏰ Режим работы</h4>
            <p style={{ fontSize: '16px', color: '#ffffff' }}>Ежедневно с 10:00 до 23:00</p>
          </div>
          <div style={{ background: 'rgba(0, 0, 0, 0.5)', borderRadius: '20px', padding: '30px', border: '2px solid rgba(0, 212, 255, 0.3)' }}>
            <h4 style={{ fontSize: '22px', color: '#00D4FF', marginBottom: '15px' }}>💬 Связаться с нами</h4>
            <div className="contact-icons">
              <a href="https://wa.me/79999999999" target="_blank" rel="noopener noreferrer" className="contact-icon-btn whatsapp">
                📱
              </a>
              <a href="https://t.me/username" target="_blank" rel="noopener noreferrer" className="contact-icon-btn telegram">
                ✈️
              </a>
            </div>
            <a href="https://taxi.yandex.ru" target="_blank" rel="noopener noreferrer" className="taxi-btn">
              🚕 Вызвать такси
            </a>
          </div>
        </div>
        <div style={{ background: 'rgba(0, 0, 0, 0.5)', borderRadius: '20px', overflow: 'hidden', border: '2px solid rgba(0, 212, 255, 0.3)' }}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=37.617635,55.755819&z=12"
            width="100%"
            height="100%"
            style={{ border: 'none', minHeight: '500px' }}
            title="Карта"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Contacts
