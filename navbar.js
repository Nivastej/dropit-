document.addEventListener('DOMContentLoaded', function() {
    const navbarHTML = `
        <div class="navbar-item">
            <img src="./assets/logo.png" alt="Drop It">
            <a href="index.html"><h1>Drop It</h1></a>
        </div>
        <div class="navbar-item">
            <div class="search-container">
                <div class="dropdown">
                    <span class="all-products-dropdown">All Categories <i class="fas fa-chevron-down" style="color: black;"></i></span>
                    <div class="dropdown-content">
                        <a href="vegetables.html">Vegetables</a>
                        <a href="fruits.html">Fruits</a>
                        <a href="meat.html">Meat</a>
                        <a href="electronics.html">Electronics</a>
                        <a href="home-essentials.html">Home Essentials</a>
                    </div>
                </div>
                <span class="separator">|</span>
                <input type="text" placeholder="Search for Items...">
                <button type="button" class="search-button"><i class="fas fa-search"></i></button>
            </div>
        </div>
        <div class="navbar-item navbar-right">
            <div class="navbar-item">
                <i class="fa-regular fa-heart icon"></i>

                <a href="wishlist.html">WishList</a>
            </div>
            <div class="navbar-item dropdown">
                <i class="fas fa-shopping-cart icon"></i>
                <p>My Cart</p> 
                <i class="fas fa-chevron-down dropdown-icon"></i>
                <div class="dropdown-content">
                    <a href="cart.html">Cart</a>
                    <a href="orders.php">My Orders</a>
                </div>
            </div>
            <div class="navbar-item dropdown">
                <i class="fas fa-user icon"></i>
                <p>Sign Up</p>
                <i class="fas fa-chevron-down dropdown-icon"></i>
                <div class="dropdown-content">
                    <a href="profile.html">Profile</a>
                    <a href="login.html">Login</a>
                </div>
            </div>
        </div>
    `;

    document.getElementById('navbar').innerHTML = navbarHTML;


});
