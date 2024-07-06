document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.add-to-cart-button').forEach(button => {
        button.addEventListener('click', function() {
            const productItem = button.closest('.product-item');
            const priceAddContainer = productItem.querySelector('.product-price-add');
            const addToCartContainer = priceAddContainer.querySelector('.add-to-cart');
            const quantityControls = priceAddContainer.querySelector('.quantity-controls');
            
            // Show quantity controls and hide add to cart button
            addToCartContainer.style.display = 'none';
            quantityControls.style.display = 'flex';
        });
    });
});

function updateQuantity(button, change) {
    const quantityControls = button.closest('.quantity-controls');
    const quantitySpan = quantityControls.querySelector('.quantity');
    let currentQuantity = parseInt(quantitySpan.textContent);

    // Update the quantity
    currentQuantity += change;

    // Ensure quantity is between 1 and 20
    if (currentQuantity >= 1 && currentQuantity <= 20) {
        quantitySpan.textContent = currentQuantity;
    }

    // Additional logic to handle adding/removing items from cart can be added here
    // For example, update cart contents, send AJAX request, etc.
}
