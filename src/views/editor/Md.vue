<template>
  <div>
    <header @click="hideSP" id="top">
      <input type="text" id="editor-title" placeholder="输入文章标题..." @input="saveArticle" v-model="mdEditorObj.title"
        autoComplete='off'>
      <div class="header-function">
        <div class="header-tip">{{ headerTip }}</div>
        <el-row class="header-btns">
          <el-button plain>草稿箱</el-button>
          <el-button type="primary" @click.stop="showSP">发布</el-button>
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
    <div @click="hideSP">
      <md-editor :content.sync="mdEditorObj.content" :extraStyle.sync="mdEditorObj.extraStyle">
      </md-editor>
    </div>

    <div class="editor-tip-bar">
      <div class="lb-tips">
        字数：{{mdEditorObj.content.split(' ').join('').length}}
        &nbsp;&nbsp;&nbsp;
        行数：{{mdEditorObj.content == ""? 0: mdEditorObj.content.trim().split('\n').length}}
      </div>
      <div class="rb-btns">
        <div>
          <span class="spec-span"><input type="checkbox" checked readonly unselectable='true'></span>
          <span class="spec-span2">同步滚动</span></div>
        <a href="javascript:window.scrollTo(0,0)"><div>回到顶部</div></a>
      </div>
    </div>

    <!-- 提交面板 -->
    <submit-panel class="sub-panel" v-if="showSubmitPanel" tabindex="111" ref="sp" :content="mdEditorObj.content"
      :articleTitle="mdEditorObj.title" :submitType="'markdown'" />


  </div>
</template>

<script>

import { marked } from 'marked'

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
      circleUrl: require('@/assets/头像.jpg'),
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
    handleUploadImage(){
      console.log("upload file")
    },
    saveArticle() {
      if (!this.$route.params.postId) {
        this.$parent.refreshLock = true;
        // 生成postid
        const postId = this.makePostId();
        // 跳转
        this.$router.push('/editor/' + postId)
        // 判断postid
        console.log(this.$route.params.postId);
        // 延迟解锁
        const _self = this;
        setTimeout(function () {
          _self.$parent.refreshLock = false;
        }, 500)
      } else {
        // 开始保存到 vuex draft
        this.headerTip = "保存中..."
        const newDraft = {
          "postId": this.$route.params.postId,
          "title": this.mdEditorObj.title,
          "content": this.mdEditorObj.content,
          "contentHTML": marked(this.mdEditorObj.content),
          "editor": 'markdown',
          "username": "admin",
          "status": 0
        };
        const _self = this;
        this.$store.commit(
          "ADD_DRAFT", newDraft
        )
        // 延迟显示成功
        setTimeout(function () {
          _self.headerTip = "保存成功"
        }, 500)


        // test
        // console.log(marked(this.mdEditorObj.content));
      }
    },
    toRich() {
      this.$parent.transformEditor("富文本")
    },
    showSP() {
      this.showSubmitPanel = !this.showSubmitPanel;
    },
    hideSP() {
      this.showSubmitPanel = false;
    },
    makePostId() {
      let date = Date.now();
      let rund = Math.ceil(Math.random() * 1000000)
      let id = rund + '' + date;
      return id.split().reverse().join();
    }
  },
  created() {
    const pid = this.$route.params.postId;
    if (pid) {
      // 获取草稿箱的内容
      this.$store.commit('REFRESH_ARTICLE_DATA')
      this.$store.commit("GET_DRAFT_ITEM",pid);
      let draftMsg = this.$store.state.editorModule.activeDraft;
      //const draftMsg = this.$store.state.editorModule.draft["draft" + pid]
      // console.log(draftMsg);
      if (draftMsg && draftMsg.username == "admin") {
        // 显示在界面
        this.mdEditorObj.title = draftMsg.title;
        this.mdEditorObj.content = draftMsg.content;
      } else {
        this.$router.push('/editor')
      }

    } else {
      // 清空界面内容
      this.mdEditorObj.title = '';
      this.mdEditorObj.content = '';
    }
  }
}
</script>

<style scoped>
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

.editor-tip-bar {
  height: 24px;
  position: fixed;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.699);
  width: 100vw;
  border-top: 1px rgb(226, 226, 226) solid;
  padding: 0 20px;
  font-size: 12px;
  line-height: 24px;
}
.lb-tips {
  float: left;
}

.rb-btns {
  float: right;
  margin-right: 60px;
}

.rb-btns div {
  float: left;
  margin-left: 20px;
  color: black;
  height: 24px;
}

.spec-span {
  display: inline-block;
}
.spec-span2 {
  display: inline-block;
  height: 24px;
}
</style>
