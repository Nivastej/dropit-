document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.add-to-cart-button').forEach(button => {
        button.addEventListener('click', function() {
            const productItem = button.closest('.product-item');
            const priceAddContainer = productItem.querySelector('.product-price-add');
            const addToCartContainer = priceAddContainer.querySelector('.add-to-cart');
            const quantityControls = priceAddContainer.querySelector('.quantity-controls');
            
            addToCartContainer.style.display = 'none';
            quantityControls.style.display = 'flex';
        });
    });
});

function updateQuantity(button, change) {
    const quantityControls = button.closest('.quantity-controls');
    const quantitySpan = quantityControls.querySelector('.quantity');
    let currentQuantity = parseInt(quantitySpan.textContent);

    currentQuantity += change;

    if (currentQuantity >= 1 && currentQuantity <= 20) {
        quantitySpan.textContent = currentQuantity;
    }

    if (currentQuantity === 0) {
        const productItem = button.closest('.product-item');
        const priceAddContainer = productItem.querySelector('.product-price-add');
        const addToCartContainer = priceAddContainer.querySelector('.add-to-cart');
        const quantityControls = priceAddContainer.querySelector('.quantity-controls');

        addToCartContainer.style.display = 'block';
        quantityControls.style.display = 'none';
    }
}
