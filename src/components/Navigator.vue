<template>
  <nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
      <template v-if="this.$route.path != '/'">
        <li>
          <router-link to="/">
            <span class="icon is-small">
              <font-awesome-icon icon="angle-double-up" />
            </span>
            <span>Top</span>
          </router-link>
        </li>
      </template>
      <li>
        <router-link to="/demo" v-bind:replace="this.$route.path != '/'">
            <span class="icon is-small">
              <font-awesome-icon icon="terminal" />
            </span>
          <span>Demo</span>
        </router-link>
      </li>
      <li>
        <router-link to="/install" v-bind:replace="this.$route.path != '/'">
            <span class="icon is-small">
              <font-awesome-icon icon="code" />
            </span>
          <span>Install</span>
        </router-link>
      </li>
      <li>
        <router-link to="/itunes" v-bind:replace="this.$route.path != '/'">
            <span class="icon is-small">
              <font-awesome-icon v-bind:icon="['fab', 'itunes-note']" />
            </span>
          <span>iTunes</span>
        </router-link>
      </li>
      <li>
        <a target="_blank" href="//github.com/ktr0731/evans">
          <span class="icon is-small">
            <font-awesome-icon v-bind:icon="['fab', 'github']" />
          </span>
          <span>GitHub</span>
        </a>
      </li>
    </ul>
  </nav>
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
nav {
  margin-top: 5vh;
  margin-right: 1vw;
}

</style>
