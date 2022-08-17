<template>
  <div>
    <div>rich text</div>
    <div class="transform-editor linshi" @click="toMd"><span class="iconfont icon-style">&#xe64a;</span>凑合用下这个切换markdown</div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    toMd() {
      this.$parent.transformEditor("Markdown")
    },
  },
  created() { },
  mounted() { }
}
</script>

<style>

.linshi {
  width: auto;
}
</style>