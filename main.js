var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: './assets/vmSocks-green-onWhite.jpg',
        inventory: 100,
        onSale: true,
        details: ["80% cotton", "20% polyester", "Genter-neutral"],
        variants: [
            {
                id: 2234,
                color: "green"
            },
            {
                id: 2235,
                color: "blue"
            }
        ]
    }

})