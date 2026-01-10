const WhyUs = () => {
  const reasons = [
    {
      icon: "⭐",
      title: "Профессионализм",
      text: "Опытные мастерицы с многолетним стажем"
    },
    {
      icon: "🏆",
      title: "Качество",
      text: "Используем только премиальные масла и косметику"
    },
    {
      icon: "🔒",
      title: "Конфиденциальность",
      text: "Полная анонимность и безопасность"
    },
    {
      icon: "💎",
      title: "Комфорт",
      text: "Роскошный интерьер и атмосфера релакса"
    }
  ]

  return (
    <section id="why-us" style={{ margin: '80px 0', padding: '60px 20px', background: 'linear-gradient(135deg, rgba(194, 24, 91, 0.1), rgba(255, 42, 109, 0.05))', borderRadius: '20px' }}>
      <h2 style={{ fontSize: '48px', fontWeight: 'bold', textAlign: 'center', color: '#ff2a6d', marginBottom: '50px' }}>
        Почему Выбирают Нас
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
        {reasons.map((reason, index) => (
          <div
            key={index}
            style={{
              background: 'rgba(0, 0, 0, 0.5)',
              borderRadius: '20px',
              padding: '40px',
              textAlign: 'center',
              border: '2px solid rgba(255, 42, 109, 0.3)',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)'
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(255, 42, 109, 0.4)'
              e.currentTarget.style.borderColor = '#ff2a6d'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.borderColor = 'rgba(255, 42, 109, 0.3)'
            }}
          >
            <div style={{ fontSize: '60px', marginBottom: '20px' }}>{reason.icon}</div>
            <h4 style={{ fontSize: '24px', color: '#ff2a6d', marginBottom: '15px' }}>{reason.title}</h4>
            <p style={{ fontSize: '16px', color: '#ffffff', lineHeight: '1.6' }}>{reason.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyUs
