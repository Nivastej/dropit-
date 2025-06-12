from flask import Flask, render_template

app = Flask(__name__)

# Homepage
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/address')
def address():
    return render_template('address.html')

@app.route('/cart')
def cart():
    return render_template('cart.html')

@app.route('/change-password')
def change_password():
    return render_template('change-password.html')

@app.route('/header')
def header():
    return render_template('header.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/order-confirmation')
def order_confirmation():
    return render_template('order-confirmation.html')

@app.route('/orders')
def orders():
    return render_template('orders.html')

@app.route('/payments')
def payments():
    return render_template('payments.html')

@app.route('/personal-info')
def personal_info():
    return render_template('personal-info.html')

@app.route('/profile')
def profile():
    return render_template('profile.html')

@app.route('/register')
def register():
    return render_template('register.html')

@app.route('/wishlist')
def wishlist():
    return render_template('wishlist.html')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/vegetables')
def vegetables():
    return render_template('vegetables.html')

@app.route('/fruits')
def fruits():
    return render_template('fruits.html')

@app.route('/stationery')
def stationery():
    return render_template('stationery.html')

@app.route('/home-needs')
def home_needs():
    return render_template('home_needs.html')

@app.route('/popular')
def popular():
    return render_template('popular.html')

@app.route('/new-products')
def new_products():
    return render_template('new-products.html')

@app.route('/categories')
def categories():
    return render_template('categories.html')

@app.route('/hot-deals')
def hot_deals():
    return render_template('hot-deals.html')



if __name__ == '__main__':
    app.run(host='0.0.0.0' , debug=True)
