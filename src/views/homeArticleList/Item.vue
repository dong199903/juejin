<template>
  <div class="entry">
    <div class="entry-header">
      <div class="user-Info">
        <el-popover
          width="270"
          placement="top"
          trigger="hover"
          popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
        >
          <template #reference>
            <div>
              <a>{{ source.nickname }} </a>
            </div>
          </template>
          <template #default>
            <div
              class="demo-rich-conent"
              style="display: flex; gap: 16px; flex-direction: column"
            >
              <div class="headerline" style="display: flex">
                <el-avatar
                  :size="60"
                  src="src / views / homeArticleList / img / qianDuanLanBo.jpg"
                  style="margin-bottom: 8px"
                />
                <div style="flex: 1">
                  <div
                    class="demo-rich-content__name"
                    style="margin: 10px 0; font-weight: 500; display: flex"
                  >
                    <p style="margin-right: 5px">{{ source.nickname }}</p>
                    <span class="iconfont icon-icon-test1"></span>
                  </div>
                  <p
                    class="demo-rich-content__mention ellipsis"
                    style="
                      width: 170px;
                      ,margin: 0;
                      font-size: 14px;
                      color: var(--el-color-info);
                    "
                  >
                    <span v-for="i in source.tags" :key="i.tag_id">{{
                      i.tag_name
                    }}</span>
                  </p>
                </div>
              </div>
              <div
                class="demo-rich-content__desc"
                style="margin: 0; display: flex; justify-content: space-between"
              >
                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                  "
                >
                  <span style="font-weight: 700; font-size: large">31</span
                  ><span style="color: var(--el-color-info)">关注</span>
                </div>
                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                  "
                >
                  <span style="font-weight: 700; font-size: large">31</span
                  ><span style="color: var(--el-color-info)">关注者</span>
                </div>
                <el-button
                  type="success"
                  plain
                  style="border-radius: 0; margin-top: 10px"
                  >关注</el-button
                >
              </div>
            </div>
          </template>
        </el-popover>
        <span>{{ source.created_at }}</span>
        <span v-for="(i, index2) in source.tags" :key="i.tag_id"
          >{{ i.tag_name }}
          <i v-if="index2 !== source.tags.length - 1">·</i></span
        >
      </div>
      <span class="closebtn">
        <i class="iconfont icon-close2"></i>
      </span>
    </div>
    <div class="entry-main">
      <div class="article-text">
        <h3 class="ellipsis">
          {{ source.title }}
        </h3>
        <p class="ellipsis">
          {{ source.describe }}
        </p>
        <div class="moren-btn">
          <span>
            <i class="iconfont icon-kanguo"></i>
            <span>{{ source.view > 0 ? source.view : 0 }}</span>
          </span>
          <span class="iconhouver">
            <i class="iconfont icon-dianzan" v-if="!source.upStatus"></i>
            <i class="iconfont icon-dianzan" v-else style="color: #1e80ff"></i>
            <span>{{ source.up > 0 ? source.up : "点赞" }}</span>
          </span>
          <span class="iconhouver"
            ><i class="iconfont icon-huifu"></i
            ><span>{{
              source.comment_num > 0 ? source.comment_num : "评论"
            }}</span></span
          >
        </div>
      </div>
      <div class="article-pic" v-if="source.img">
        <img :src="source.img" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "item-component",
  props: {
    source: {
      // here is: {uid: 'unique_1', text: 'abc'}
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
/* 文章列表 */
.entry {
  width: 100%;
  padding: 16px 0;
  border-bottom: 1px solid #f4f4f4;
}
.entry-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.entry-header .user-Info {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.entry-header .user-Info .el-popover {
  margin-right: 10px;
}
.entry-header .user-Info span {
  margin-left: 10px;
  font-size: 12px;
}
.entry-header .user-Info span a {
  font-size: 18px;
}
.entry-main {
  display: flex;
  margin-top: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
.entry-main .article-text {
  width: 500px;
  height: 97px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.entry-main .article-text .moren-btn {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.entry-main .article-text .moren-btn .iconhouver :hover {
  color: #1e80ff;
}
.entry-main .article-text .moren-btn span {
  margin-right: 10px;
  font-size: 12px;
}
.entry-main .article-text .moren-btn span .iconfont {
  display: inline-block;
  vertical-align: -5%;
  margin-right: 5px;
}
.article-pic {
  width: 120px;
  height: 80px;
}
.article-pic img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>