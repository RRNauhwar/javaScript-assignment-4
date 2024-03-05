function shopingCart () {
    const cartItems = []
    return {
        addItem: function(product) {
            cartItems.push(product)
        },
        getTotalCart: function() {
            return cartItems
        }
    }
}
const cart = shopingCart()
cart.addItem("Product 1")
cart.addItem("Product 2")
console.log(cart.getTotalCart())