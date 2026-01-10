const AgeVerification = ({ onVerify }) => {
  const handleNo = () => {
    window.location.href = 'https://www.google.com'
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.95)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10000,
      backdropFilter: 'blur(10px)'
    }}>
      <div style={{
        background: 'linear-gradient(135deg, rgba(194, 24, 91, 0.2), rgba(255, 42, 109, 0.1))',
        borderRadius: '30px',
        padding: '60px 40px',
        maxWidth: '500px',
        textAlign: 'center',
        border: '3px solid rgba(255, 42, 109, 0.5)',
        boxShadow: '0 20px 60px rgba(255, 42, 109, 0.4)'
      }}>
        <div style={{ fontSize: '80px', marginBottom: '20px' }}>🔞</div>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#ff2a6d', marginBottom: '20px' }}>
          Подтверждение возраста
        </h2>
        <p style={{ fontSize: '18px', color: '#ffffff', marginBottom: '20px', lineHeight: '1.6' }}>
          Для посещения сайта необходимо подтвердить, что вам исполнилось 18 лет
        </p>
        <div style={{
          background: 'rgba(255, 42, 109, 0.2)',
          borderRadius: '15px',
          padding: '15px',
          marginBottom: '30px',
          border: '1px solid rgba(255, 42, 109, 0.3)'
        }}>
          <p style={{ fontSize: '14px', color: '#d4af37', margin: 0 }}>
            ⚠️ Контент сайта предназначен только для совершеннолетних
          </p>
        </div>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <button
            onClick={onVerify}
            style={{
              background: 'linear-gradient(45deg, #ff2a6d, #c2185b)',
              color: 'white',
              border: 'none',
              padding: '15px 40px',
              borderRadius: '30px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: '0 5px 20px rgba(255, 42, 109, 0.4)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)'
              e.target.style.boxShadow = '0 10px 30px rgba(255, 42, 109, 0.6)'
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = '0 5px 20px rgba(255, 42, 109, 0.4)'
            }}
          >
            Мне есть 18
          </button>
          <button
            onClick={handleNo}
            style={{
              background: 'transparent',
              color: '#ffffff',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              padding: '15px 40px',
              borderRadius: '30px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = '#ff2a6d'
              e.target.style.color = '#ff2a6d'
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'
              e.target.style.color = '#ffffff'
            }}
          >
            Мне нет 18
          </button>
        </div>
      </div>
    </div>
  )
}

export default AgeVerification
