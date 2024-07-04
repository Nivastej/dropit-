document.addEventListener("DOMContentLoaded", function() {
    const sliders = document.querySelectorAll('.categories, .featured-products');

    sliders.forEach(slider => {
        const itemList = slider.querySelector('.category-list') || slider.querySelector('.product-list');
        const leftArrow = slider.querySelector('.left-arrow');
        const rightArrow = slider.querySelector('.right-arrow');

        let scrollAmount = 0;
        const scrollMax = itemList.scrollWidth - itemList.clientWidth;
        const scrollStep = itemList.clientWidth / 4;

        rightArrow.addEventListener("click", function() {
            if (scrollAmount < scrollMax) {
                scrollAmount += scrollStep;
                itemList.scrollTo({
                    top: 0,
                    left: scrollAmount,
                    behavior: "smooth"
                });
            }
        });

        leftArrow.addEventListener("click", function() {
            if (scrollAmount > 0) {
                scrollAmount -= scrollStep;
                itemList.scrollTo({
                    top: 0,
                    left: scrollAmount,
                    behavior: "smooth"
                });
            }
        });
    });
});
