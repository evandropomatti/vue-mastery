var app = new Vue({
    el: '#app',
    data: {
        brand: 'Vue Mastery',
        product: 'Socks',
        selectedVariant: 0,
        inventory: 100,
        onSale: true,
        details: ["80% cotton", "20% polyester", "Genter-neutral"],
        variants: [
            {
                id: 2234,
                color: "green",
                image: './assets/vmSocks-green-onWhite.jpg',
                quantity: 10
            },
            {
                id: 2235,
                color: "blue",
                image: './assets/vmSocks-blue-onWhite.jpg',
                variantQuantity: 0
            }
        ],
        cart: 0
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(index) {
            this.selectedVariant = index
        }
    },
    // Computed properties are cached
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        }
    }
})