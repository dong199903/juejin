<template>
  <div>
    <header>
      <input type="text" id="editor-title" placeholder="输入文章标题..." @input="saveArticle" v-model="mdEditorObj.title">
      <div class="header-function">
        <div class="header-tip">{{ headerTip }}</div>
        <el-row class="header-btns">
          <el-button plain>草稿箱</el-button>
          <el-button type="primary" @click="showSP">发布</el-button>
        </el-row>
        <div class="transform-editor" @click="toRich"><span class="iconfont icon-style">&#xe64a;</span></div>

        <!-- 头像区域 -->
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">

            <div class="block">
              <el-avatar :size="32" :src="circleUrl"></el-avatar>
            </div>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>写文章</el-dropdown-item>
            <el-dropdown-item>草稿</el-dropdown-item>
            <el-dropdown-item divided>我的主页</el-dropdown-item>
            <el-dropdown-item>我喜欢的</el-dropdown-item>
            <el-dropdown-item>我的收藏集</el-dropdown-item>
            <el-dropdown-item>标签管理</el-dropdown-item>
            <el-dropdown-item divided>设置</el-dropdown-item>
            <el-dropdown-item>
              <el-dropdown>
                <div class="el-dropdown-link about-btn">
                  <div>关于</div>
                  <div>&gt;</div>
                </div>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>下载应用</el-dropdown-item>
                  <el-dropdown-item>关于</el-dropdown-item>
                  <el-dropdown-item>加入我们</el-dropdown-item>
                  <el-dropdown-item>翻译计划</el-dropdown-item>
                  <el-dropdown-item>合作伙伴</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </header>

    <!-- 这个是正文编辑区奥 -->
    <md-editor :content.sync="mdEditorObj.content" :extraStyle.sync="mdEditorObj.extraStyle"></md-editor>

    <!-- 提交面板 -->
    <submit-panel class="sub-panel" v-if="showSubmitPanel" tabindex="111" ref="sp" :content="mdEditorObj.content"
      :articleTitle="mdEditorObj.title" :submitType="'markdown'" />
  </div>
</template>

<script>


import MdEditor from '@/components/editor/MdEditor';
import SubmitPanel from '@/components/editor/SubmitPanel';

export default {
  data() {
    return {
      mdEditorObj: {
        title: "",
        content: "",
        extraStyle: "min-height: calc(100vh - 66px);"
      },
      headerTip: "文章将自动保存至草稿箱",
      circleUrl: require('@/assets/logo.png'),
      showSubmitPanel: false,
    }
  },
  components: {
    MdEditor,
    SubmitPanel
  },
  watch: {
    'mdEditorObj.content': function () {
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
    },
    toRich() {
      this.$parent.transformEditor("富文本")
    },
    showSP() {
      this.showSubmitPanel = !this.showSubmitPanel;
    },
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
  padding-left: 15px;
  /* 颜色 */
  color: #1d7dfa;
  border-color: #1d7dfa;
}

.header-btns button:last-child {
  /* 14*2=28 16*2=32 */
  width: 60px;
  padding-left: 15px;
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
  float: left;
  margin: 22px 16px 22px 0;
  cursor: pointer;
}

.about-btn div:first-child {
  float: left;
  padding-right: 100px;
}

.about-btn div:last-child {
  float: right;
}

/* 提交面板 */
.sub-panel {
  position: absolute;
  top: 62px;
  right: 75px;
  z-index: 999;
}

.icon-style {
  font-size: 20px;
  color: rgb(179, 179, 179);
}
</style>
