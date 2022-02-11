<template>
  <div class="hello">
    <h1>Dirigierübungen</h1>
    <div>
      <ul>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'bbrrbbll', beats: 2, bpm: speed}}">bb / rr / bb / ll</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'bbbrrrbbblll', beats: 3, bpm: speed}}">bbb / rrr / bbb / lll</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'brrrblllbrrrblll', beats: 4, bpm: speed}}">brrr / blll / brrr / blll</router-link></li>
      </ul>
    </div>
    <h1>Einstellungen</h1>
    <div>
      <md-switch v-model="recording">Videoaufzeichnung</md-switch> <br />
      <input type="range" min="40" max="180" v-model="speed"/> ♩={{speed}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Selection',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      recording: 'true',
      speed: 80
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
