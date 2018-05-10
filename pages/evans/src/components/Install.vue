<template>
  <div class="pre" v-highlightjs="source">
    <code class="bash">
      $ # HomeBrew
      $ brew tap ktr0731/evans
      $ brew install ktr0731/evans

      $ # from GitHub Releases (version: 0.3.0, environment: Linux, AMD64)
      $ endpoint=https://github.com/ktr0731/evans/releases/download
      $ curl -sL $endpoint/0.3.0/evans_linux_amd64.tar.gz | tar xvfz -
    </code>
  </div>
</template>

<script>
</script>

<style scoped>
.pre {
  white-space: pre;
}

code {
  font-size: 1rem;
}
</style>
