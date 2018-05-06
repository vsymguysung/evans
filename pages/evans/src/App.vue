<template>
  <div id="app">
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

#app {
  height: 100%;
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app {
  height: 100%;
  width: 100%;
  background-image: url(./assets/background.png);
  -webkit-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
}

main {
  height: 100%;
  width: 100%;
  background-color: rgba(0, 23, 42, 0.6);
}

</style>
