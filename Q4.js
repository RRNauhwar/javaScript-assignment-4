function shoppingCart () {
    const CartItems = []
    return {
        addToCart: function (product) {
            const existingItem = CartItems.find(item => item.Id === product.Id)
            if (existingItem) {
                existingItem.quantity += product.quantity
            }
            else {
                CartItems.push ({
                 name: product.name,
                Id: product.Id,
                quantity : product.quantity,
                price : product.price
            })
            }
            
        },
        getTotalCart : function () {
            return CartItems
        }
    }
}

const cart = shoppingCart()
cart.addToCart({Id : 1, name: "product1", quantity:20,price: 100})
cart.addToCart({Id: 2,name: "product2", quantity:10, price: 200})
cart.addToCart({Id:1,name:"product1", quantity:30,price:100})
console.log(cart.getTotalCart())