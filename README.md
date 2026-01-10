# JAM — Массаж в Москве (React версия)

Проект полностью переписан на React без анимаций.

## Установка

```bash
npm install
```

## Запуск

```bash
npm run dev
```

## Сборка

```bash
npm run build
```

## Структура проекта

```
src/
├── components/
│   ├── AgeVerification.jsx  # Проверка возраста 18+
│   ├── Header.jsx           # Шапка сайта
│   ├── Hero.jsx             # Промо-баннер
│   ├── Services.jsx         # Услуги
│   ├── Masters.jsx          # Мастера
│   ├── About.jsx            # О нас
│   ├── WhyUs.jsx            # Почему мы
│   ├── Interior.jsx         # Интерьер
│   ├── Contacts.jsx         # Контакты
│   └── Footer.jsx           # Подвал
├── App.jsx                  # Главный компонент
├── main.jsx                 # Точка входа
└── index.css                # Глобальные стили
```

## Изменения

- ✅ Убраны все анимации (AOS, Swiper, карусели)
- ✅ Переписано на React
- ✅ Чистый код без лишних зависимостей
- ✅ Адаптивный дизайн сохранен
- ✅ Все стили перенесены в CSS модули
