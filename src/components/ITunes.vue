<template>
  <div class="wrapper">
      <div class="select">
          <select v-model="selected">
              <option selected value="0.1.0">0.1.0 Evans</option>
              <option value="0.2.0">0.2.0 JOMANDA</option>
              <option value="0.3.0">0.3.0 VALLIS-NERIA</option>
              <option value="0.4.0">0.4.0 Lisa-RICCIA</option>
              <option value="0.5.0">0.5.0 Beautiful Receipt</option>
              <option value="0.6.0">0.6.0 Almagest</option>
              <option value="0.7.0">0.7.0 Elisha</option>
              <option value="0.8.0">0.8.0 High School Love</option>
          </select>
      </div>
      <div>
          <iframe
                  v-bind:src="this.songs[this.selected]"
                  frameborder="0" >
          </iframe>
      </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                selected: "0.1.0",
                songs: {
                    "0.1.0": "https://tools.applemusic.com/embed/v1/song/325296020?country=jp",
                    "0.2.0": "https://tools.applemusic.com/embed/v1/song/509026290?country=jp",
                    "0.3.0": "https://tools.applemusic.com/embed/v1/song/606027352?country=jp",
                    "0.4.0": "https://tools.applemusic.com/embed/v1/song/830117722?country=jp",
                    "0.5.0": "https://tools.applemusic.com/embed/v1/song/504484080?country=jp",
                    "0.6.0": "https://tools.applemusic.com/embed/v1/song/519993319?country=jp",
                    "0.7.0": "https://tools.applemusic.com/embed/v1/song/519993232?country=jp",
                    "0.8.0": "https://tools.applemusic.com/embed/v1/song/922882987?country=jp",
                },
            };
        },
    }
</script>

<style lang="scss" scoped>
@import "../assets/styles.scss";

.select {
    margin-left: 10vw;
    margin-bottom: 30px;
}

iframe {
  height: 110px;
  width: 30vw;
  margin-left: 10vw;
}

@media (max-width: 820px) {
    .select {
        margin-left: 0;
    }

    iframe {
        width: 100%;
        margin: 0;
    }
}
</style>
