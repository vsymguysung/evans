<template>
  <div class="hero is-fullheight">
    <template v-if="this.$route.path != '/'">
      <header>
        <navigator></navigator>
      </header>
    </template>
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-three-fifths is-offset-two-fifths">
            <router-view/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navigator from './components/Navigator';

export default {
  components: {
    Navigator,
  },
};
</script>

<style lang="scss">
@import "assets/styles.scss";

html, body {
  background-color: #000f0f;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

header {
  position: absolute;
  top: 0;
  right: 0;
}

.hero {
  background: url(./assets/background.png) no-repeat fixed;
  -webkit-background-size: cover;
  background-size: cover;
}

.hero-body {
  background-color: rgba(0, 16, 16, 0.65);
}

.container {
  overflow: hidden;
}

@media (max-width: 820px) {
  html {
    font-size: 75%;
  }
}

@media (max-width: 1024px) {
  .hero {
    background-position-y: center;
    background-position-x: 70%;
  }

  .hero-body {
    background-color: rgba(0, 16, 16, 0.65);
  }
}
</style>
