<template>
  <container>
    <h1>Evans</h1>
    <p>more expressive gRPC client</p>
    <navigator></navigator>
  </container>
</template>

<script>
import Navigator from './Navigator';

export default {
  components: {
    Navigator,
  },
};
</script>

<style scoped>
container {
  color: #ececec;
}

h1 {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 5rem;
  font-weight: bold;
  line-height: 1;
}

p {
  line-height: 1;
  font-size: 2.5rem;
  padding-left: 5px;
}

nav {
  margin-top: 7vh;
}

</style>
