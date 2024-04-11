const sliderMain = new Swiper(".slider-main", {
    freeMode: true,
    centeredSlides: true,
    mousewheel: true,
    parallax: true,
    breakpoints: {
        0: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        680: {
            slidesPerView: 3.5,
            spaceBetween: 60,
        }
    }
});

const sliderBg = new Swiper(".slider-bg", {
    centeredSlides: true,
    mousewheel: true,
    parallax: true,
    spaceBetween: 60,
    slidesPerView: 3.5
});

sliderMain.controller.control = sliderBg

document.querySelectorAll(".slider-item").forEach((item) => {
    item.addEventListener("click", (event) => {
        const isOpened = item.classList.contains("opened");

        // Удаляем класс "opened" у всех элементов
        document.querySelectorAll(".slider-item").forEach((el) => {
            el.classList.remove("opened");
        });

        // Добавляем класс "opened" только к текущему элементу, если его еще нет
        if (!isOpened) {
            item.classList.add("opened");
        }
    });
});

// Добавляем обработчик событий для клика вне картинок
document.addEventListener("click", (event) => {
    const clickedOutside = !event.target.closest(".slider-item");

    if (clickedOutside) {
        // Удаляем класс "opened" у всех элементов
        document.querySelectorAll(".slider-item").forEach((item) => {
            item.classList.remove("opened");
        });
    }
});

let desc = document.querySelector('.description')

sliderMain.on('slideChange', e => {
    sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
})