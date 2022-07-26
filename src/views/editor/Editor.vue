<template>
  <div>
    <header>
      <input type="text" id="editor-title" placeholder="输入文章标题..." @input="saveArticle">
      <div class="header-function">
        <div class="header-tip">{{ headerTip }}</div>
        <el-row class="header-btns">
          <el-button plain>草稿箱</el-button>
          <el-button type="primary">发布</el-button>
        </el-row>
        <div class="transform-editor"></div>
        <div class="block">
          <el-avatar :size="32" :src="circleUrl"></el-avatar>
        </div>
      </div>
    </header>
        <!-- 这个是正文区奥 -->
    <md-editor :content.sync="obj.content" :extraStyle.sync="obj.extraStyle"></md-editor>
  </div>
</template>

<script>


import MdEditor from '@/components/v-md-editor/index';

export default {
  data() {
    return {
      obj: {
        content: "你好",
        extraStyle: "height: calc(100vh - 66px);"
      },
      headerTip: "文章将自动保存至草稿箱",
      circleUrl: require('@/assets/logo.png'),
    }
  },
  components: {
    MdEditor
  },
  created() {
    console.log("不要吹灭你的灵感和你的想象力; 不要成为你的模型的奴隶。 ——文森特・梵高");
  },
  watch: {
    'obj.content': function () {
      this.saveArticle();
    }
  },
  methods: {
    saveArticle() {
      this.headerTip = "保存中..."
      const _self = this;
      setTimeout(function () {
        _self.headerTip = "保存成功"
      }, 500)
    }
  }
}
</script>

<style>
header {
  height: 64px;
  background-color: white;
  padding: 0 27px;
  border-bottom: 1px solid rgb(214, 214, 214);
  overflow: hidden;
}

#editor-title {
  border: none;
  height: 64px;
  font-size: 24px;
  padding-left: 14px;
  outline: none;
  background-color: transparent;
  display: inline-block;
  float: left;
  width: 60%;
}

.header-function {
  float: right;
}

.header-tip {
  float: left;
  line-height: 64px;
  color: #c9cdd4;
  font-size: 14px;
}

.header-btns {
  float: left;
  margin: 16px;
}

.header-btns button {
  height: 32px;
  border-radius: 2px;
  line-height: 8px;
}

.header-btns button:first-child {
  /* 14*3=42 16*2=32 */
  width: 74px;
  padding-left: 16px;
  /* 颜色 */
  color: #1d7dfa;
  border-color: #1d7dfa;
}

.header-btns button:last-child {
  /* 14*2=28 16*2=32 */
  width: 60px;
  padding-left: 16px;
}

.block {
  float: left;
  margin-top: 16px;
}

.block:hover {
  cursor: pointer;
  opacity: 0.7;
}

.transform-editor {
  width: 20px;
  height: 20px;
  background-color: #bfa;
  float: left;
  margin: 22px 16px 22px 0;
}
</style>
