import Vue from 'vue'
import App from './App.vue'
import Students from './Students.vue'

Vue.component('students', Students);

new Vue({
  el: '#app',
  render: h => h(App)
})
