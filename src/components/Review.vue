<template>
  <div class="hello">
    <h1>Überprüfen</h1>
    <div>
      {{pattern}}
    </div>
    <div>
      <router-link to="/">Zurück</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Exercise',
  data () {
    return {
      pattern: 'rrr / lll / rrr / lll'
    }
  },
  mounted () {
    this.pattern = this.$route.query.pattern
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
