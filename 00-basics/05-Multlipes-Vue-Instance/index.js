var app = new Vue({

    el: '#app',

    data: {
        value: 100,
        price: 2000,
    },

    methods:{
        //
    },

});

var demo = new Vue({

    el: '#demo',

    data: {
        value: 300 + app.value,
    },

    methods:{
        f1:function(){
            return app.price;
        }
    },

});