Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
    <div class="product">

        <div class="product-image">
            <img :src="image">
        </div>

        <div class="product-info">
            <h2>{{ title }}</h2>
            <p v-if="inventory > 10">In Stock <span v-show="onSale">*On Sale!</span></p>
            <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
            <p v-else="Out of Stock"></p>
            <p>Shipping: {{ shipping }} </p>

            <div v-for="(variant, index) in variants" :key="variant.id" class="color-box"
                :style="{ backgroundColor: variant.color}" @mouseover="updateProduct(index)">
            </div>
            <button @click="addToCart" :disabled="!inStock" :class="{ disabledButton: !inStock }">Add to
                cart</button>

            <div class="cart">
                <p>Cart({{ cart }})</p>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
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
        }
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
        },
        shipping() {
            if (this.premium) {
                return "Free"
            }
            return 2.99
        }
    }
})

var app = new Vue({
    el: '#app'
})