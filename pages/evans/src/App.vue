<template>
  <main>
    <div class="hero is-fullheight">
      <div class="hero-body">
        <div class="container is-fullheight">
          <router-view/>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
</script>

<style lang="scss">
@import "~bulma/bulma.sass";

html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #000f0f;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.hero {
  background: url(./assets/background.png) no-repeat fixed;
  -webkit-background-size: cover;
  background-size: cover;
}

.hero-body {
  background-color: rgba(0, 16, 16, 0.6);
}

</style>
