document.addEventListener('DOMContentLoaded', function() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalContainer = document.getElementById('cartTotal');
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    if (cartItems.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = "Your cart is empty";
        emptyMessage.style.textAlign = "center";
        emptyMessage.style.fontSize = "16px";
        emptyMessage.style.marginTop = "20px";

        const shopNowButton = document.createElement('button');
        shopNowButton.textContent = "Shop Now";
        shopNowButton.className = "checkout";
        shopNowButton.onclick = function() {
            window.location.href = "index.html"; //when cart is empry
        };

        cartItemsContainer.appendChild(emptyMessage);
        cartItemsContainer.appendChild(shopNowButton);
        cartTotalContainer.style.display = "none";
        return; 
    }

    let totalCost = 0;

    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        
        const itemImage = document.createElement('img');
        itemImage.src = item.image;
        itemImage.alt = item.name;
        itemImage.style.width = '100px';
        
        const itemName = document.createElement('p');
        itemName.textContent = item.name;
        
        const itemQuantity = document.createElement('p');
        itemQuantity.textContent = `Quantity: ${item.quantity}`;
        
        const itemPrice = document.createElement('p');
        itemPrice.textContent = `Price: ₹${item.price.toFixed(2)}`;
        
        const itemTotal = document.createElement('p');
        const totalItemPrice = item.price * item.quantity;
        itemTotal.textContent = `Total: ₹${totalItemPrice.toFixed(2)}`;
        
        itemElement.appendChild(itemImage);
        itemElement.appendChild(itemName);
        itemElement.appendChild(itemQuantity);
        itemElement.appendChild(itemPrice);
        itemElement.appendChild(itemTotal);
        
        cartItemsContainer.appendChild(itemElement);
        
        totalCost += totalItemPrice;
    });

    cartTotalContainer.textContent = `Total Cost: ₹${totalCost.toFixed(2)}`;
});

function checkout() {
    alert('not implemented yet!');
}
