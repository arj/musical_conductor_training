<template>
  <div class="hello">
    <h1>Dirigierübungen</h1>
    <h2>Vordefinierte Übungen</h2>
    <div>
      <h3>2/4</h3>
      <ul>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'bbrrbbrr', beats: 2, bpm: speed}}">4.1: bb / rr / bb / rr</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'bbllbbll', beats: 2, bpm: speed}}">4.2: bb / ll / bb / ll</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'bbrrbbll', beats: 2, bpm: speed}}">4.3: bb / rr / bb / ll</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'brblbrbl', beats: 2, bpm: speed}}">4.4: br / bl / br / bl</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'rrllrrll', beats: 2, bpm: speed}}">4.5: rr / ll / rr / ll</router-link></li>
      </ul>
      <h3>3/4</h3>
      <ul>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'bbbrrrbbblll', beats: 3, bpm: speed}}">20.1 bbb / rrr / bbb / lll</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'brrbrrbrrbrr', beats: 3, bpm: speed}}">20.2 brr / brr / brr / brr</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'bllbllbllbll', beats: 3, bpm: speed}}">20.3 bll / bll / bll / bll</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'brrbllbrrbll', beats: 3, bpm: speed}}">20.4 brr / bll / brr / bll</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'rrbrrbrrbrrb', beats: 3, bpm: speed}}">20.5 rrb / rrb / rrb / rrb</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'llbllbllbllb', beats: 3, bpm: speed}}">20.6 llb / llb / llb / llb</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'rrbllbrrbllb', beats: 3, bpm: speed}}">20.7 rrb / llb / rrb / llb</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'bbrbbrbbrbbr', beats: 3, bpm: speed}}">20.8 bbr / bbr / bbr / bbr</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'bblbblbblbbl', beats: 3, bpm: speed}}">20.9 bbl / bbl / bbl / bbl</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'bbrbblbbrbbl', beats: 3, bpm: speed}}">20.10 bbr / bbl / bbr / bbl</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'rbbrbbrbbrbb', beats: 3, bpm: speed}}">20.11 rbb / rbb / rbb / rbb</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'lbblbblbblbb', beats: 3, bpm: speed}}">20.12 lbb / lbb / lbb / lbb</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'rbblbbrbblbb', beats: 3, bpm: speed}}">20.13 rbb / lbb / rbb / lbb</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'rrlrrlrrlrrl', beats: 3, bpm: speed}}">20.14 rrl / rrl / rrl / rrl</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'llrllrllrllr', beats: 3, bpm: speed}}">20.15 llr / llr / llr / llr</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'rrlllrrrlllr', beats: 3, bpm: speed}}">20.16 rrl / llr / rrl / llr</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'rlllrrrlllrr', beats: 3, bpm: speed}}">20.17 rll / lrr / rll / lrr</router-link></li>
      </ul>
      <h3>4/4</h3>
      <ul>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'bbbbrrrrbbbbllll', beats: 4, bpm: speed}}">6.1 bbbb / rrrr / bbbb / llll</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'brrrbrrrbrrrbrrr', beats: 4, bpm: speed}}">6.2 brrr / brrr / brrr / brrr</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'blllblllblllblll', beats: 4, bpm: speed}}">6.3 blll / blll / blll / blll</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'brrrblllbrrrblll', beats: 4, bpm: speed}}">6.4 brrr / blll / brrr / blll</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'rrrbrrrbrrrbrrrb', beats: 4, bpm: speed}}">6.5 rrrb / rrrb / rrrb / rrrb</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'lllblllblllblllb', beats: 4, bpm: speed}}">6.6 lllb / lllb / lllb / lllb</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'rrrblllbrrrblllb', beats: 4, bpm: speed}}">6.7 rrrb / lllb / rrrb / lllb</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'bbrrbbrrbbrrbbrr', beats: 4, bpm: speed}}">6.8 bbrr / bbrr / bbrr / bbrr</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'bbllbbllbbllbbll', beats: 4, bpm: speed}}">6.9 bbll / bbll / bbll / bbll</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'bbrrbbllbbrrbbll', beats: 4, bpm: speed}}">6.10 bbrr / bbll / bbrr / bbll</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'rrbbrrbbrrbbrrbb', beats: 4, bpm: speed}}">6.11 rrbb / rrbb / rrbb / rrbb</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'llbbllbbllbbllbb', beats: 4, bpm: speed}}">6.12 llbb / llbb / llbb / llbb</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'rrbbllbbrrbbllbb', beats: 4, bpm: speed}}">6.13 rrbb / llbb / rrbb / llbb</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'rrllrrllrrllrrll', beats: 4, bpm: speed}}">6.14 rrll / rrll / rrll / rrll</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'llrrllrrllrrllrr', beats: 4, bpm: speed}}">6.15 llrr / llrr / llrr / llrr</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'rrllllrrrrllllrr', beats: 4, bpm: speed}}">6.16 rrll / llrr / rrll / llrr</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'rrrllllrrrrllllr', beats: 4, bpm: speed}}">6.17 rrrl / lllr / rrrl / lllr</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'rllllrrrrllllrrr', beats: 4, bpm: speed}}">6.18 rlll / lrrr / rlll / lrrr</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'rrblllbrrrblllbr', beats: 4, bpm: speed}}">6.19 rrbl / llbr / rrbl / llbr</router-link></li>
        <li><router-link :to="{ name: 'Exercise', params: { pattern: 'rlrllrlrrlrllrlr', beats: 4, bpm: speed}}">6.20 rlrl / lrlr / rlrl / lrlr</router-link></li>
      </ul>
    </div>
<!--    <h2>Selbstdefinierte Übungen</h2>-->
<!--    In Arbeit...-->
    <h2>Einstellungen</h2>
    <div>
<!--      <md-switch v-model="recording">Videoaufzeichnung</md-switch> <br />-->
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
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  width: 180px;
  margin: 5px 20px;
}
a {
  color: #42b983;
}
</style>
