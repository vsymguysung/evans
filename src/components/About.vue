<template>
  <vue-markdown class="markdown" :source="content"></vue-markdown>
</template>

<script>
    import VueMarkdown from 'vue-markdown';

    const prefix = 'https://raw.githubusercontent.com/ktr0731/evans/master';
    export default {
        components: {
            VueMarkdown,
        },
        data() {
            return {
                content: '',
            };
        },
        created() {
            fetch(`${prefix}/README.md`)
                .then(res => res.text())
                .then(res => {
                    this.content = res.replace(/\.\//g, `${prefix}/`);
                });
        }
    }
</script>

<style lang="scss">
  .markdown {
    color: #ccc;
  }

  pre > code {
    color: #555;
  }

  p > code {
    background-color: #ccc;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    color: #555;
    padding: 2px 5px;
    margin: 0 2px;
  }

  pre {
    background-color: #f5f5f5;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    padding: 15px 12px;
    overflow: scroll;
  }

  p > img {
    max-width: 100%;
  }

  .markdown > pre > code {
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace;
  }

  a {
    color: #ccc;
  }
</style>
