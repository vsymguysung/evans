<template>
  <header>
    <h1>Evans</h1>
    <p>more expressive gRPC client</p>
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li>
          <router-link to="/repl">
            <span class="icon is-small">
              <font-awesome-icon icon="spinner" />
            </span>
            <span>DEMO (REPL)</span>
          </router-link>
        </li>
        <li>
          <router-link to="/cli">
            <span class="icon is-small">
              <font-awesome-icon icon="terminal" />
            </span>
            <span>DEMO (CLI)</span>
          </router-link>
        </li>
        <li>
          <router-link to="/cli">
            <span class="icon is-small">
              <font-awesome-icon icon="code" />
            </span>
            <span>Install</span>
          </router-link>
        </li>
        <li>
          <router-link to="/itunes">
            <span class="icon is-small">
              <font-awesome-icon :icon="['fab', 'itunes-note']" />
            </span>
            <span>iTunes</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import '@fortawesome/fontawesome/styles.css';
import fontawesome from '@fortawesome/fontawesome';
import { faEdit } from '@fortawesome/fontawesome-free-solid';
import brands from '@fortawesome/fontawesome-free-brands';

fontawesome.config = {
  autoAddCss: false,
};

fontawesome.library.add(brands, faEdit);

export default {
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style scoped>
header {
  color: #ececec;
}

h1 {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 5rem;
  font-weight: bold;
}

p {
  line-height: 0;
  font-size: 2.5rem;
  padding-left: 5px;
}

nav {
  margin-top: 7vh;

}
</style>
