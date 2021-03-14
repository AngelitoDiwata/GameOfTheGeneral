<template>
  <div id="app">
    <button @click="setName">{{ textBoxText }}</button>
    <p>{{ yourName }}</p>
    <TextInput v-model="textBoxText"/>
  </div>
</template>
<script>

import TextInput from './components/TextInput'
export default {
  name: 'App',
  components: {
    TextInput
  },
  data () {
    return {
      textBoxText: 'sample',
      yourName: ''
    }
  },
  methods: {
    setName () {
      this.yourName = this.textBoxText
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>