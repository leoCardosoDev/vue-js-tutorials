
Vue.component('mycomponent', {
    
    template: '<p>This is my component {{ name }} - Temperatura: {{ temprature }} <br><button v-on:click="changeTemp()">Change Tempe</button> </p>',

    data:function(){
        return {
            name: 'Leo Cardoso',
            temprature: 100,
        }
    },

    methods:{
        changeTemp:function(){
            this.temprature = this.temprature + 10;
        }
    },


});

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
