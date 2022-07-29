<template>
  <md v-if="isMdEditor" />
  <rich-text v-else />
</template>

<script>
import Md from './Md'
import RichText from './RichText'

export default {
  data() {
    return {
      isMdEditor: true
    }
  },
  components: {
    Md,
    RichText
  },
  created() {
    // 设置标题
    document.title = this.$route.meta.title;
    
    console.log("不要吹灭你的灵感和你的想象力; 不要成为你的模型的奴隶。 ——文森特・梵高");

    // this.isMdEditor = false
  },
  methods: {
    transformEditor(str) {
      const h = this.$createElement;
      this.$msgbox({
        title: '切换为' + str + '编辑器',
        message: h('p', null, [
          h('span', null, '切换写作模式后，当前内容不会迁移，但会自动保存为草稿。')
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            this.isMdEditor = !this.isMdEditor;
            done();
          } else {
            done();
          }
        }
      }).then(action => {
        this.$message({
          type: 'info',
          message: '已切换为' + str + '编辑器'
        });
      });
    }
  }
}
</script>

<style>
</style>
