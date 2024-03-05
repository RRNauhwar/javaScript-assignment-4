function shoppingCart() {
    const CartItems = [];

    return {
        addToCart: function (product) {
            const existingItem = CartItems.find(item => item.Id === product.Id);

            if (existingItem) {
                existingItem.quantity += product.quantity;
            } else {
                CartItems.push({
                    name: product.name,
                    Id: product.Id,
                    quantity: product.quantity,
                    price: product.price
                });
            }
        },
        removeFromCart: function (productId, quantityToBeRemoved) {
            const index = CartItems.findIndex(item => item.Id === productId);
            
            if (index !== -1) {
                const existingItem = CartItems[index];

                if (existingItem.quantity <= quantityToBeRemoved) {
                    CartItems.splice(index, 1);
                } else {
                    existingItem.quantity -= quantityToBeRemoved;
                }
            }
        },
        getTotalCart: function () {
            return CartItems;
        }
    };
}

const cart = shoppingCart();
cart.addToCart({ Id: 1, name: "product1", quantity: 20, price: 100 });
cart.addToCart({ Id: 2, name: "product2", quantity: 10, price: 200 });
cart.addToCart({ Id: 1, name: "product1", quantity: 30, price: 100 });
console.log("Before Removing", cart.getTotalCart());
cart.removeFromCart(1, 30);
cart.removeFromCart(2, 10);
console.log("After Removing", cart.getTotalCart());
