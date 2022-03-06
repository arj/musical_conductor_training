<template>
  <div class="exercise">
    <h1>Üben</h1>
    <div class="task">
      <video id="preview" width="400" autoplay muted></video>
      <div class="pattern">
        <span
          v-for="(p, index) in patternSingleLetters" :key="p">
            <span
              class="beat"
              :class="{ active: index === currentOverallBeat }">
              {{p}}
            </span>
            <span class="measuredivider" v-if="(index + 1) % beats === 0 && index < patternSingleLetters.length - 1">/</span>
        </span>
      </div>
      <div class="beatcounter">
        Schlag: {{currentBeat}}
      </div>
        <button @click="startExercise()">{{ startstop }}</button>
      <div>
        <router-link to="/">Abbrechen</router-link>
<!--        <router-link to="/Review">Review</router-link>-->
      </div>
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
      timerId: null,
      startstop: '▶'
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
    this.startstop = '▶'
    this.timerId = 0
    this.startRecording()
    this._keyListener = function (e) {
      if (e.key === ' ') {
        e.preventDefault()
        this.startExercise()
      }
    }
    document.addEventListener('keydown', this._keyListener.bind(this))
  },
  beforeDestroy () {
    document.removeEventListener('keydown', this._keyListener)
  },
  beforeRouteLeave (to, from, next) {
    this.stopStreaming()
    return next()
  },
  methods: {
    startExercise () {
      if (this.timerId === 0) {
        this.startstop = '‖'
        this.timerId = setInterval(
          () => (this.currentOverallBeat = (this.currentOverallBeat + 1) % (this.patternSingleLetters.length)),
          60000 / this.bpm)
      } else {
        clearInterval(this.timerId)
        this.timerId = 0
        this.startstop = '▶'
        this.currentOverallBeat = 0
      }
    },
    stopStreaming () {
      let preview = document.getElementById('preview')
      preview.captureStream = null
      preview.srcObject.getTracks().forEach(track => track.stop())
    },
    startRecording () {
      navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
      }).then(stream => {
        let preview = document.getElementById('preview')
        preview.srcObject = stream
        preview.captureStream = preview.captureStream || preview.mozCaptureStream
        return new Promise(
          resolve => {
            preview.onplaying = resolve
          })
      }).then(() => '') // /*startRecording(preview.captureStream(), recordingTimeMS)*/
        .then(recordedChunks => {
          // let recordedBlob = new Blob(recordedChunks, {type: "video/webm"});
          // recording.src = URL.createObjectURL(recordedBlob);
          // downloadButton.href = recording.src;
          // downloadButton.download = "RecordedVideo.webm";
          //
          // log("Successfully recorded " + recordedBlob.size + " bytes of " +
          //   recordedBlob.type + " media.");
        })
        .catch(console.log)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.task {
  text-align: center;
}
#preview {
  transform: scale(-1,1)
}
.pattern {
  margin-top: 1em;
  font-size: 4.8vw;
  margin-bottom: 2em;
  font-weight: bold;
  /*text-transform: uppercase;*/
}
.beat.active {
  color: red;
}
.beatcounter {
  margin: 2em 0em;
  font-size: 16pt;
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
.measuredivider {
  margin: 0 0.5em;
}
</style>
