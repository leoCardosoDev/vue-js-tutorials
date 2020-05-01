<template>
    <div>
        <h1>List Style</h1>
        <ul>
            <li v-bind:key="student" v-for="student in students">{{ student }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            students: ['Tom', 'John', 'Rob']
        }
    }
}
</script>

<style scoped>
    ul{
        font-family: 'Trebuchet MS', sans-serif;
        list-style: upper-latin;
    }
    h1{
        font-family: 'Trebuchet MS', sans-serif;
        color: orangered;
    }
</style>