<template>
  <div>
    <div class="tabs is-centered is-medium">
      <ul>
        <li
          :class="{'is-active': selected == 'repl'}"
          v-on:click="selected = 'repl'"
        ><a
          class="is-white"
        >REPL</a></li>
        <li
          :class="{'is-active': selected != 'repl'}"
          v-on:click="selected = 'cli'"
        ><a>CLI</a></li>
      </ul>
    </div>
    <div class="is-fullwidth" v-if="selected == 'repl'">
      <img src="@/assets/evans1.gif" />
    </div>
    <div class="is-fullwidth" v-if="selected != 'repl'">
      <img src="@/assets/evans2.gif" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: 'repl',
    };
  },
};
</script>

<style scoped>
div {
  text-align: center;
}

div:last-child {
  margin-top: 3vh;
}

</style>
