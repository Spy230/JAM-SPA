// Глобальные переменные для галереи
let currentGalleryImages = [];
let currentImageIndex = 0;
let galleryModal = null;

// Инициализация AOS анимаций
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 DOM загружен, начинаем инициализацию...');
    
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Инициализация модального окна
    const modalElement = document.getElementById('imageModal');
    if (modalElement) {
        galleryModal = new bootstrap.Modal(modalElement);
        
        // Обработка клавиш клавиатуры
        document.addEventListener('keydown', function(e) {
            if (modalElement.classList.contains('show')) {
                if (e.key === 'ArrowLeft') {
                    navigateGallery(-1);
                } else if (e.key === 'ArrowRight') {
                    navigateGallery(1);
                } else if (e.key === 'Escape') {
                    galleryModal.hide();
                }
            }
        });
    }
    
    // ========================================
    // ИНИЦИАЛИЗАЦИЯ SWIPER ДЛЯ УСЛУГ
    // ========================================
    console.log('🔍 Проверяем Swiper...');
    
    const swiperElement = document.querySelector('.servicesSwiper');
    console.log('Элемент .servicesSwiper найден:', swiperElement);
    
    if (swiperElement) {
        console.log('✅ Инициализируем Swiper...');
        
        // Проверяем наличие библиотеки Swiper
        if (typeof Swiper === 'undefined') {
            console.error('❌ Библиотека Swiper не загружена!');
            return;
        }
        
        const servicesSwiper = new Swiper('.servicesSwiper', {
            direction: 'horizontal',
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: true,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                }
            },
            on: {
                slideChange: function() {
                    console.log('Слайд изменен:', this.activeIndex);
                    updateServiceDescription(this);
                },
                init: function() {
                    console.log('✅ Swiper инициализирован!');
                    console.log('Количество слайдов:', this.slides.length);
                    updateServiceDescription(this);
                }
            }
        });
        
        // Сохраняем экземпляр Swiper в глобальную переменную
        globalServicesSwiper = servicesSwiper;
        
        console.log('Swiper создан:', servicesSwiper);

        // Клик по карточке для переключения
        document.querySelectorAll('.service-slide-card').forEach((card, index) => {
            card.addEventListener('click', function() {
                servicesSwiper.slideTo(index);
            });
        });
        
        // Проверка загрузки изображений
        document.querySelectorAll('.service-slide-image img').forEach((img, index) => {
            console.log(`🖼️ Проверяем изображение ${index + 1}:`, img.src);
            
            img.addEventListener('load', function() {
                console.log(`✅ Изображение ${index + 1} загружено:`, this.src);
            });
            
            img.addEventListener('error', function() {
                console.error(`❌ ОШИБКА загрузки изображения ${index + 1}:`, this.src);
                this.style.border = '3px solid red';
            });
            
            if (img.complete) {
                if (img.naturalHeight !== 0) {
                    console.log(`✅ Изображение ${index + 1} уже загружено:`, img.src);
                } else {
                    console.error(`❌ Изображение ${index + 1} не загрузилось:`, img.src);
                }
            }
        });
    } else {
        console.error('❌ Элемент .servicesSwiper НЕ НАЙДЕН!');
    }

    
    // Функция для открытия изображения в полноэкранном режиме
    window.openImageModal = function(imageSrc, clickedElement) {
        // Определяем, из какой галереи было кликнуто изображение
        let sourceElement = clickedElement || event.target;
        
        // Проверяем, это фото мастера Alina
        if (sourceElement.closest('#alinaCarousel')) {
            collectMasterImages('alinaCarousel');
        }
        // Проверяем, это фото мастера Kamila
        else if (sourceElement.closest('#kamilaCarousel')) {
            collectMasterImages('kamilaCarousel');
        }
        // Проверяем, это фото интерьера из карусели
        else if (sourceElement.closest('#interiorCarousel')) {
            collectInteriorGalleryImages();
        }
        // Проверяем, это фото из выпадающей галереи интерьера
        else if (sourceElement.closest('.interior-gallery')) {
            collectInteriorGalleryImages();
        }
        // По умолчанию - галерея интерьера
        else {
            collectInteriorGalleryImages();
        }
        
        // Находим индекс кликнутого изображения
        const index = currentGalleryImages.indexOf(imageSrc);
        if (index !== -1) {
            currentImageIndex = index;
        } else {
            currentImageIndex = 0;
        }
        
        updateModalImage();
        galleryModal.show();
    };

    // Добавляем обработчики кликов на все изображения каруселей
    document.querySelectorAll('.carousel-item img').forEach(img => {
        img.addEventListener('click', function() {
            openImageModal(this.src, this);
        });
    });

    // Проверка возраста
    const ageOverlay = document.getElementById('ageVerificationOverlay');
    const ageYesBtn = document.getElementById('ageYesBtn');
    const ageNoBtn = document.getElementById('ageNoBtn');

    if (ageYesBtn) {
        ageYesBtn.addEventListener('click', function() {
            ageOverlay.style.display = 'none';
            localStorage.setItem('ageVerified', 'true');
        });
    }

    if (ageNoBtn) {
        ageNoBtn.addEventListener('click', function() {
            window.location.href = 'https://www.google.com';
        });
    }

    // Проверяем, была ли уже верификация
    if (localStorage.getItem('ageVerified') === 'true') {
        ageOverlay.style.display = 'none';
    }
});

// Функция для сбора изображений конкретного мастера
function collectMasterImages(carouselId) {
    currentGalleryImages = [];
    const carousel = document.getElementById(carouselId);
    if (carousel) {
        const images = carousel.querySelectorAll('.carousel-item img');
        images.forEach(img => {
            currentGalleryImages.push(img.src);
        });
    }
    console.log(`Собрано изображений мастера (${carouselId}):`, currentGalleryImages.length);
}

// Функция для сбора всех изображений галереи интерьера
function collectInteriorGalleryImages() {
    currentGalleryImages = [];
    
    // Сначала собираем из выпадающей галереи (если она открыта)
    const galleryItems = document.querySelectorAll('.interior-gallery-item img');
    if (galleryItems.length > 0) {
        galleryItems.forEach(img => {
            currentGalleryImages.push(img.src);
        });
    } else {
        // Если выпадающая галерея закрыта, собираем из карусели
        const carouselImages = document.querySelectorAll('#interiorCarousel .carousel-item img');
        carouselImages.forEach(img => {
            currentGalleryImages.push(img.src);
        });
    }
    
    console.log('Собрано изображений интерьера:', currentGalleryImages.length);
}

// Функция для обновления изображения в модальном окне
function updateModalImage() {
    const modalImage = document.getElementById('modalImage');
    const imageCounter = document.getElementById('imageCounter');
    
    if (currentGalleryImages.length > 0) {
        modalImage.src = currentGalleryImages[currentImageIndex];
        imageCounter.textContent = `${currentImageIndex + 1} / ${currentGalleryImages.length}`;
        
        // Добавляем плавную анимацию смены изображения
        modalImage.style.opacity = '0';
        setTimeout(() => {
            modalImage.style.opacity = '1';
        }, 50);
    }
}

// Функция навигации по галерее
window.navigateGallery = function(direction) {
    if (currentGalleryImages.length === 0) return;
    
    currentImageIndex += direction;
    
    // Зацикливание галереи
    if (currentImageIndex < 0) {
        currentImageIndex = currentGalleryImages.length - 1;
    } else if (currentImageIndex >= currentGalleryImages.length) {
        currentImageIndex = 0;
    }
    
    updateModalImage();
};

// Функция для переключения полной галереи интерьера
window.toggleFullGallery = function() {
    const container = document.getElementById('fullGalleryContainer');
    const btn = document.querySelector('.view-gallery-btn');
    const btnText = document.getElementById('galleryBtnText');
    
    if (container.classList.contains('open')) {
        // Закрываем галерею
        container.classList.remove('open');
        btn.classList.remove('active');
        btnText.textContent = 'Посмотреть весь интерьер';
        
        // Плавная прокрутка к началу раздела интерьера
        setTimeout(() => {
            document.getElementById('interior').scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }, 100);
    } else {
        // Открываем галерею
        container.classList.add('open');
        btn.classList.add('active');
        btnText.textContent = 'Скрыть галерею';
        
        // Плавная прокрутка к галерее после открытия
        setTimeout(() => {
            container.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'nearest' 
            });
        }, 300);
    }
};


// ========================================
// SWIPER ДЛЯ УСЛУГ (TRINITY-SPA STYLE)
// ========================================

// Данные услуг
const servicesData = {
    classic: {
        title: "Classic",
        price: "7000 ₽",
        duration: "/ 1 час",
        image: "/images/mod/services/classic.jpg",
        imageFallback: "/images/mod/services/CLASSIC.png",
        shortDesc: "Максимум наслаждения и восстановления сил за один сеанс!",
        fullDesc: "<p><span class='text-accent'>Это идеальный выбор для тех, кто хочет полностью отключиться от повседневных забот и погрузиться в мир наслаждения.</span> Каждое движение продумано до мелочей, чтобы подарить вам максимум удовольствия.</p>"
    },
    vip: {
        title: "VIP",
        price: "12000 ₽",
        duration: "/ 1.5 часа",
        image: "/images/mod/services/vip.jpg",
        imageFallback: "/images/mod/services/VIP.png",
        shortDesc: "Абсолютный релакс и пик удовольствия для настоящих ценителей.",
        fullDesc: "<p><span class='text-glow'>VIP-программа создана для тех, кто ценит эксклюзивность и готов испытать незабываемые ощущения.</span> Это высший уровень удовольствия, который запомнится надолго.</p>"
    },
    silver: {
        title: "Silver",
        price: "9000000 ₽",
        duration: "/ 1 час",
        image: "/images/mod/services/silver.jpg",
        imageFallback: "/images/mod/services/SILVER.png",
        shortDesc: "Двойная ласка, удвоенное наслаждение — от кончиков пальцев до полного блаженства!",
        fullDesc: "<p>Silver-программа — это идеальный баланс между роскошью и доступностью. <span class='text-highlight'>Вы получите двойное внимание и двойное наслаждение от профессиональных мастериц.</span></p>"
    },
    express: {
        title: "Express",
        price: "500ss0 ₽",
        duration: "/ 30 минут",
        image: "/images/mod/services/express.jpg",
        imageFallback: "/images/mod/services/EXPRESS.png",
        shortDesc: "Горячие масла, дразнящие прикосновения и стремительное расслабление с продолжением.",
        fullDesc: "<p>Идеально, когда время ограничено, а желание на пределе. <span class='text-gold'>Express-программа — это концентрированное удовольствие без лишних слов.</span> Максимум эмоций за минимальное время.</p>"
    },
    conversation: {
        title: "Общение с девушкой",
        price: "5000 ₽",
        duration: "/ 1 час",
        image: "/images/mod/services/obshenie.jpg",
        imageFallback: "/images/mod/services/ОБЩЕНИЕ.png",
        shortDesc: "Максимум внимания, искренней близости и глубокого удовольствия в одном сеансе.",
        fullDesc: "<p><span class='text-highlight'>Идеальный выбор, если хочется не только тела, но и души.</span> Красивая, умная и невероятно нежная мастерица сначала поговорит с вами по душам за чашкой чая или бокалом вина: снимет напряжение, выслушает, подарит тепло и лёгкий флирт.</p><p><span class='text-gold'>Эта программа создана для тех, кто ценит не только физическое, но и эмоциональное удовольствие.</span> Приятная беседа, искренний интерес и настоящая близость — все это ждет вас.</p>"
    }
};

// Функция обновления описания услуги и карточки предпросмотра
function updateServiceDescription(swiper) {
    const activeSlide = swiper.slides[swiper.activeIndex];
    const serviceId = activeSlide.getAttribute('data-service');
    const descriptionElement = document.getElementById('serviceDescription');
    
    // Обновляем описание
    if (serviceId && servicesData[serviceId] && descriptionElement) {
        descriptionElement.style.opacity = '0';
        
        setTimeout(() => {
            descriptionElement.innerHTML = servicesData[serviceId].fullDesc;
            descriptionElement.style.opacity = '1';
        }, 300);
    }
    
    // Обновляем карточку предпросмотра
    updateServiceCardPreview(activeSlide);
}

// Функция обновления карточки предпросмотра
function updateServiceCardPreview(activeSlide) {
    const previewImage = document.getElementById('previewImage');
    const previewTitle = document.getElementById('previewTitle');
    const previewPrice = document.getElementById('previewPrice');
    const previewDuration = document.getElementById('previewDuration');
    
    if (!activeSlide) return;
    
    // Получаем данные из активного слайда
    const slideImg = activeSlide.querySelector('.service-slide-image img');
    const slideTitle = activeSlide.querySelector('.service-slide-title');
    const slidePrice = activeSlide.querySelector('.service-slide-price');
    const slideDuration = activeSlide.querySelector('.service-slide-duration');
    
    // Обновляем карточку предпросмотра с анимацией
    if (previewImage && slideImg) {
        previewImage.style.opacity = '0';
        setTimeout(() => {
            previewImage.src = slideImg.src;
            previewImage.onerror = slideImg.onerror;
            previewImage.style.opacity = '1';
        }, 200);
    }
    
    if (previewTitle && slideTitle) {
        previewTitle.style.opacity = '0';
        setTimeout(() => {
            previewTitle.textContent = slideTitle.textContent;
            previewTitle.style.opacity = '1';
        }, 200);
    }
    
    if (previewPrice && slidePrice) {
        previewPrice.style.opacity = '0';
        setTimeout(() => {
            previewPrice.textContent = slidePrice.textContent;
            previewPrice.style.opacity = '1';
        }, 200);
    }
    
    if (previewDuration && slideDuration) {
        previewDuration.style.opacity = '0';
        setTimeout(() => {
            previewDuration.textContent = slideDuration.textContent;
            previewDuration.style.opacity = '1';
        }, 200);
    }
}

// ========================================
// ВЕРТИКАЛЬНЫЕ СТРЕЛКИ НАВИГАЦИИ
// ========================================

// Глобальная переменная для хранения экземпляра Swiper
let globalServicesSwiper = null;

// Функция для навигации вверх
window.navigateServicesUp = function() {
    if (globalServicesSwiper) {
        globalServicesSwiper.slidePrev();
    }
};

// Функция для навигации вниз
window.navigateServicesDown = function() {
    if (globalServicesSwiper) {
        globalServicesSwiper.slideNext();
    }
};
