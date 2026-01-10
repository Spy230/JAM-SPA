import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Устанавливаем фоновое изображение принудительно
const bgImage = '/static/DSC04113.jpg'
console.log('Загружаем фоновое изображение:', bgImage)

// Проверяем загрузку изображения
const img = new Image()
img.onload = () => {
  console.log('✅ Фоновое изображение загружено успешно!')
  document.body.style.backgroundImage = `
    linear-gradient(135deg, rgba(26, 26, 46, 0.85), rgba(22, 33, 62, 0.85), rgba(15, 52, 96, 0.85)),
    url('${bgImage}')
  `
  document.body.style.backgroundSize = 'cover'
  document.body.style.backgroundPosition = 'center'
  document.body.style.backgroundAttachment = 'fixed'
  document.body.style.backgroundRepeat = 'no-repeat'
}
img.onerror = () => {
  console.error('❌ Ошибка загрузки фонового изображения:', bgImage)
}
img.src = bgImage

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
