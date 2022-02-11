<template>
  <div class="hello">
    <h1>Üben</h1>
    <div class="pattern">
      <span
        v-for="(p, index) in patternSingleLetters" :key="p">
          <span
            class="beat"
            :class="{ active: index === currentOverallBeat }">
            {{p}}
          </span>
          <span v-if="(index + 1) % beats === 0 && index < patternSingleLetters.length - 1">/</span>
      </span>
    </div>
    <div>
      Schlag: {{currentBeat}}
    </div>
    <div>
      <router-link to="/">Abbrechen</router-link>
      <router-link to="/Review">Review</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Exercise',
  data () {
    return {
      bpm: 60,
      currentOverallBeat: 0,
      timerInterval: null
    }
  },
  computed: {
    currentBeat () {
      return this.currentOverallBeat % this.beats + 1
    },
    patternSingleLetters () {
      var s = ''
      let p = this.$route.params.pattern
      for (let i = 0; i < p.length; i++) {
        s = s.concat(p[i])
      }
      return s
    },
    beats () {
      return this.$route.params.beats
    },
    shownPattern () {
      var s = ''
      let p = this.$route.params.pattern
      let beats = this.$route.params.beats
      for (let i = 0; i < p.length; i++) {
        if (i > 0 && i % beats === 0) {
          s = s.concat(' / ')
        }
        s = s.concat(p[i])
      }
      return s
    }
  },
  mounted () {
    this.bpm = this.$route.params.bpm
    this.currentOverallBeat = 0
    this.startExercise()
  },
  methods: {
    startExercise () {
      this.timerInterval = setInterval(
        () => (this.currentOverallBeat = (this.currentOverallBeat + 1) % (this.patternSingleLetters.length)),
        60000 / this.bpm)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pattern {
  margin-top: 1em;
  font-size: 30pt;
  margin-bottom: 1em;
}
.beat.active {
  color: red;
}
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
