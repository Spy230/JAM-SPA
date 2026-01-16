const AgeVerification = ({ onVerify }) => {
  const handleNo = () => {
    window.close()
  }

  const isMobile = window.innerWidth <= 768

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
      backdropFilter: 'blur(10px)',
      padding: isMobile ? '20px' : '0'
    }}>
      <div style={{
        background: 'linear-gradient(135deg, rgba(0, 100, 255, 0.15), rgba(0, 150, 255, 0.1))',
        borderRadius: isMobile ? '20px' : '30px',
        padding: isMobile ? '40px 20px' : '60px 40px',
        maxWidth: isMobile ? '100%' : '500px',
        width: isMobile ? '100%' : 'auto',
        textAlign: 'center',
        border: `${isMobile ? '2px' : '3px'} solid rgba(0, 150, 255, 0.6)`,
        boxShadow: '0 20px 60px rgba(0, 150, 255, 0.5), 0 0 40px rgba(0, 150, 255, 0.3)'
      }}>
        <div style={{ fontSize: isMobile ? '60px' : '80px', marginBottom: isMobile ? '15px' : '20px' }}>🔞</div>
        <h2 style={{ 
          fontSize: isMobile ? '24px' : '32px', 
          fontWeight: '400', 
          fontFamily: '"Schibsted Grotesk", sans-serif', 
          color: '#00BFFF', 
          marginBottom: isMobile ? '15px' : '20px', 
          textShadow: '0 0 20px rgba(0, 191, 255, 0.8)' 
        }}>
          Подтверждение возраста
        </h2>
        <p style={{ 
          fontSize: isMobile ? '16px' : '18px', 
          fontFamily: '"Schibsted Grotesk", sans-serif', 
          fontWeight: '400', 
          color: '#ffffff', 
          marginBottom: isMobile ? '15px' : '20px', 
          lineHeight: '1.6',
          padding: isMobile ? '0 10px' : '0'
        }}>
          Для посещения сайта необходимо подтвердить, что вам исполнилось 18 лет
        </p>
        <div style={{
          background: 'rgba(0, 100, 255, 0.2)',
          borderRadius: isMobile ? '12px' : '15px',
          padding: isMobile ? '12px' : '15px',
          marginBottom: isMobile ? '25px' : '30px',
          border: '1px solid rgba(0, 150, 255, 0.4)'
        }}>
          <p style={{ 
            fontSize: isMobile ? '13px' : '14px', 
            fontFamily: '"Schibsted Grotesk", sans-serif', 
            fontWeight: '400', 
            color: '#00BFFF', 
            margin: 0 
          }}>
            ⚠️ Контент сайта предназначен только для совершеннолетних
          </p>
        </div>
        <div style={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '15px' : '20px', 
          justifyContent: 'center' 
        }}>
          <button
            onClick={onVerify}
            style={{
              background: 'linear-gradient(45deg, #0080FF, #00BFFF)',
              color: 'white',
              border: 'none',
              padding: isMobile ? '14px 30px' : '15px 40px',
              borderRadius: isMobile ? '25px' : '30px',
              fontSize: isMobile ? '16px' : '18px',
              fontFamily: '"Schibsted Grotesk", sans-serif',
              fontWeight: '400',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: '0 5px 20px rgba(0, 150, 255, 0.5), 0 0 20px rgba(0, 191, 255, 0.3)',
              width: isMobile ? '100%' : 'auto'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)'
              e.target.style.boxShadow = '0 10px 30px rgba(0, 150, 255, 0.7), 0 0 30px rgba(0, 191, 255, 0.5)'
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = '0 5px 20px rgba(0, 150, 255, 0.5), 0 0 20px rgba(0, 191, 255, 0.3)'
            }}
          >
            Мне есть 18
          </button>
          <button
            onClick={handleNo}
            style={{
              background: 'transparent',
              color: '#00BFFF',
              border: '2px solid rgba(0, 191, 255, 0.5)',
              padding: isMobile ? '14px 30px' : '15px 40px',
              borderRadius: isMobile ? '25px' : '30px',
              fontSize: isMobile ? '16px' : '18px',
              fontFamily: '"Schibsted Grotesk", sans-serif',
              fontWeight: '400',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: '0 0 10px rgba(0, 191, 255, 0.2)',
              width: isMobile ? '100%' : 'auto'
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = '#00BFFF'
              e.target.style.color = '#ffffff'
              e.target.style.background = 'rgba(0, 150, 255, 0.2)'
              e.target.style.boxShadow = '0 0 20px rgba(0, 191, 255, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = 'rgba(0, 191, 255, 0.5)'
              e.target.style.color = '#00BFFF'
              e.target.style.background = 'transparent'
              e.target.style.boxShadow = '0 0 10px rgba(0, 191, 255, 0.2)'
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
