<template>
  <iframe
    class="livedemo w-full border dark:border-gray-800"
    sandbox="allow-same-origin allow-scripts"
    frameborder="0"
    ref="iframe"
    :style="`height: ${ height }px`"
    :src="baseUrl + src"
    @load="setHeight"
  ></iframe>
</template>

<script>
import { delay } from '../../utils/utils';

export default {
  props: ['src'],
  data() {
    return {

      height: 100
    }
  },
  computed: {
    baseUrl() {
      return process.env.baseUrl;
    }
  },
  methods: {
    async setHeight() {
      await delay(100);
      this.height = this.$refs.iframe.contentWindow.document.body.scrollHeight + 10;
    }
  }
};
</script>

<style>

</style>