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

<style lang="scss" scoped>
@import "../assets/styles.scss";

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
  font-size: 2.1rem;
  padding-left: 5px;
  margin-top: 2vh;
}

nav {
  padding-left: 10px;
}
</style>
