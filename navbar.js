document.addEventListener('DOMContentLoaded', function() {
    const aboveBar = `
        <div class="above-bar">
            <div class="above-bar-left">
                <i class="fas fa-map-marker-alt"></i> Location
            </div>
            <div class="above-bar-right">
                <div class="above-bar-item">
                    <i class="fas fa-phone"></i> 108-10808 24/7 Support Center
                </div>
            </div>
        </div>
    `;

    const navbar = `
        <div class="navbar-item">
            <img src="./assets/logo.png" alt="Drop It">
            <a href="index.html"><h1>Drop It</h1></a>
        </div>
        <div class="navbar-item">
            <div class="search-container">
                <div class="search-input-container">
                    <input type="text" id="search-input" placeholder="">
                    <span id="placeholder-text" class="placeholder-text">Search for "Ice cream"</span>
                </div>
                <button type="button" class="search-button"><i class="fas fa-search"></i></button>
            </div>
        </div>
        <div class="navbar-item navbar-right">
            <div class="navbar-item">
                <a href="wishlist.html"><i class="fa-regular fa-heart icon"></i></a>
            </div>
            <div class="navbar-item dropdown">
                <a href="cart.html"><i class="fas fa-shopping-cart icon"></i><span id="cart-quantity" class="cart-quantity"></span></a>
            </div>
            <div class="navbar-item dropdown">
                <i class="fas fa-user icon"></i>
                <i class="fas fa-chevron-down dropdown-icon"></i>
                <div class="dropdown-content">
                    <a href="profile.html">Profile</a>
                    <a href="login.html">Login</a>
                </div>
            </div>
        </div>
    `;

    const bottomBar = `
    <div class="navbar-item">
        <div class="search-container">
            <div class="dropdown">
                <span class="all-products-dropdown">
                    <i class="fas fa-bars"></i>
                    All Categories 
                    <i class="fas fa-chevron-down" style="color: black;"></i>
                </span>
                <div class="dropdown-content">
                    <a href="vegetables.html">Vegetables</a>
                    <a href="fruits.html">Fruits</a>
                    <a href="meat.html">Meat</a>
                    <a href="electronics.html">Electronics</a>
                    <a href="home-essentials.html">Home Essentials</a>
                </div>
            </div>
        </div>
    </div>

    <div class="bottom-bar-left">
        <a href="index.html" class="bottom-bar-item">
            <i class="fas fa-home"></i> Home
        </a>
        <a href="hotdeals.html" class="bottom-bar-item">
            <i class="fas fa-fire"></i> Hot Deals
        </a>
        <a href="new_products.html" class="bottom-bar-item">
            <img src="assets/li_megaphone.png" alt="New Products"> New Products
        </a>
    </div>
`;

    document.getElementById('navbar').innerHTML = navbar;
    document.getElementById('bottom-bar').innerHTML = bottomBar;
    document.getElementById('above-bar').innerHTML = aboveBar;

    const placeholders = ['Search for "Ice cream"', 'Search for "Biscuits"', 'Search for "Detergents"', 'Search for "Dog Food"', 'Search for "Makeup"', 'Search for "Sunscreen"'];
    let placeholderIndex = 0;
    let placeholderInterval;

    function updatePlaceholder() {
        const placeholderText = document.getElementById('placeholder-text');
        placeholderText.classList.add('scroll-up');
        
        setTimeout(() => {
            placeholderIndex = (placeholderIndex + 1) % placeholders.length;
            placeholderText.textContent = placeholders[placeholderIndex];
            placeholderText.classList.remove('scroll-up');
        }, 500);
    }

    function startAnimation() {
        placeholderInterval = setInterval(updatePlaceholder, 4000);
    }

    function stopAnimation() {
        clearInterval(placeholderInterval);
    }

    startAnimation();

    const searchInput = document.getElementById('search-input');
    const placeholderText = document.getElementById('placeholder-text');

    searchInput.addEventListener('input', function() {
        if (searchInput.value.length > 0) {
            stopAnimation();
            placeholderText.style.display = 'none';
        } else {
            placeholderText.style.display = 'block';
            startAnimation();
        }
    });

    const cartQuantityNum = document.getElementById('cart-quantity');
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    let totalQuantity = 0;
    cartItems.forEach(item => {
        totalQuantity += item.quantity;
    });

    if (totalQuantity > 0) {
        cartQuantityNum.textContent = totalQuantity;
        cartQuantityNum.style.display = 'inline-block';
    } else {
        cartQuantityNum.style.display = 'none';
    }
});
