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
            <p style={{ fontSize: '16px', color: '#ffffff' }}>Центральный федеральный округ, Москва, Новомосковский административный округ, район Коммунарка, Скандинавский бульвар, 5, корп. 3</p>
          </div>
          <div style={{ background: 'rgba(0, 0, 0, 0.5)', borderRadius: '20px', padding: '30px', border: '2px solid rgba(0, 212, 255, 0.3)', marginBottom: '20px' }}>
            <h4 style={{ fontSize: '22px', color: '#00D4FF', marginBottom: '15px' }}>📞 Телефон</h4>
            <p style={{ fontSize: '16px', color: '#ffffff' }}>
              <a href="tel:+79123172457" style={{ color: '#00BFFF', textDecoration: 'none' }}>+7 (912) 317-24-57</a>
            </p>
          </div>
          <div style={{ background: 'rgba(0, 0, 0, 0.5)', borderRadius: '20px', padding: '30px', border: '2px solid rgba(0, 212, 255, 0.3)', marginBottom: '20px' }}>
            <h4 style={{ fontSize: '22px', color: '#00D4FF', marginBottom: '15px' }}>⏰ Режим работы</h4>
            <p style={{ fontSize: '16px', color: '#ffffff' }}>Круглосуточно</p>
          </div>
          <div style={{ background: 'rgba(0, 0, 0, 0.5)', borderRadius: '20px', padding: '30px', border: '2px solid rgba(0, 212, 255, 0.3)' }}>
            <h4 style={{ fontSize: '22px', color: '#00D4FF', marginBottom: '15px' }}>💬 Связаться с нами</h4>
            <div className="contact-icons">
              <a href="https://wa.me/79253115723" target="_blank" rel="noopener noreferrer" className="contact-icon-btn whatsapp">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.051 3.488z" />
                </svg>
              </a>
              <a href="https://t.me/+79253115723" target="_blank" rel="noopener noreferrer" className="contact-icon-btn telegram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
            </div>
            <a href="https://taxi.yandex.ru/?gfrom=&gto=55.565880,37.500944&tariff=business&lang=ru" target="_blank" rel="noopener noreferrer" className="taxi-btn">
              🚕 Вызвать такси
            </a>
          </div>
        </div>
        <div style={{ background: 'rgba(0, 0, 0, 0.5)', borderRadius: '20px', overflow: 'hidden', border: '2px solid rgba(0, 212, 255, 0.3)' }}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=37.500944%2C55.565880&z=15&pt=37.500944%2C55.565880%2Cpm2rdm"
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
