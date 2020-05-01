<template>
  <div>
    <h1>{{ newMessage }}</h1>
    <students></students>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      newMessage: 'Hello World!'
    }
  }
}
</script>

<style scoped>

  h1{
    font-family: Verdana, sans-serif;
    color: green;
  }
  ul{
    list-style: none;
  }
</style>
