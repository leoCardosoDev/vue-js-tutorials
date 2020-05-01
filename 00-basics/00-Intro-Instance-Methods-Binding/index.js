var app = new Vue({
    el: '#app',

    data:{
        message: 'Hello World!',
        name: "Olá Mundo!",
        price: '1800',
        path: 'https://picfiles.alphacoders.com/287/287719.jpg',
        link: 'https://www.reveweb.com.br'
    },

    methods: {
        discount: function(d){
            cost = this.price - d;
            return cost;
        }
    }


});