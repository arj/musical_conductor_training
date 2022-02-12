<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('http://fonts.cdnfonts.com/css/roboto-condensed');
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  font-family: 'Roboto Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #505050;
  width: 80%;
  /*margin-top: 60px;*/
  /*margin-left: 60px;*/
  margin: auto auto;
}
h1 {
  font-weight: 700;
  font-size: 32pt;
  margin: 1em 0pt;
}
h2 {
  font-weight: 700;
  font-size: 24pt;
  margin: 1em 0pt;
}
</style>
