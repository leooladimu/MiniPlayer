<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg">
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Taking too long"/>
</template>

<script>
import HelloWorld from './HelloWorld.vue'
import { ref } from 'vue'

// const msg = ref('Hello World!')
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    const msg = ref('Hello World!')
    return {
      msg
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
