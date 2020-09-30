<template>
  <img :src="baseUrl + src" :width="width" :height="height" :alt="alt"/>
</template>

<script>
export default {
  props: [
    'src',
    'width',
    'height',
    'alt'
  ],
  computed: {
    baseUrl() {
      return process.env.baseUrl;
    }
  }
};
</script>

<style>

</style>