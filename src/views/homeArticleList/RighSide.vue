<template>
  <div class="rightside">
    <!-- 签到 -->
    <div class="signin">
      <div class="firstline">
        <div class="date">
          <i class="iconfont icon-rili"></i>
          <span>{{ dateTime }}!</span>
        </div>
        <el-button round>去签到</el-button>
      </div>
      <div class="secondline">点亮你在社区的每一天</div>
    </div>
    <!-- 广告区 -->
    <ul class="advlist">
      <li v-for="(item, index) in advList" :key="index">
        <span class="iconfont icon-close2"></span>
        <a href="#"> <span class="inco">投放</span><span>广告</span> </a>
        <img :src="item.src" alt="" />
      </li>
    </ul>
    <!-- 下载app -->
    <div class="downloadapp">
      <a class="app-link">
        <div class="appcode">
          <img src="./img/appcode.png" alt="" />
        </div>
        <div class="content">
          <p class="headline">下载稀土掘金APP</p>
          <p class="desc">一个帮助开发者成长的社区</p>
        </div>
      </a>
    </div>
    <!-- 作者榜 -->
    <div class="recommend-author">
      <header>🎖️作者榜</header>
      <ul class="authorlist">
        <li class="authoritem" v-for="(item, index) in authorList" :key="index">
          <a href="#">
            <div class="item">
              <div class="item-header">
                <img :src="item.avatar" alt="" />
              </div>
              <div class="item-info">
                <a href="#" class="item-name">
                  <span>{{ item.authorName }}</span>
                  <span class="rank"><i :class="item.rank"></i></span>
                </a>
                <div class="position">{{ item.position }}</div>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <footer>
        <a href="#"> 完整榜单 <i class="iconfont icon-xiangyoujiantou"></i> </a>
      </footer>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      advList: [
        {
          src: require("./img/guanggao1.png"),
        },
        {
          src: require("./img/guanggao2.png"),
        },
      ],
      authorList: [
        {
          authorName: "前端兰博",
          authorId: "1",
          avatar: require("./img/qianDuanLanBo.jpg"),
          rank: "iconfont icon-icon-test1",
          position: "社区签到榜第一",
        },
        {
          authorName: "Mo_Rijiu",
          authorId: "2",
          avatar: require("./img/Mo_Rijio.jpg"),
          rank: "iconfont icon-icon-test1",
          position: "技术专家",
        },
        {
          authorName: "瞅瞅猜猜",
          authorId: "3",
          avatar: require("./img/chouchoucaicai.jpg"),
          rank: "iconfont	icon-icon-test1",
          position: "全栈工程师 @稀土掘金",
        },
      ],
    };
  },
  computed: {
    dateTime() {
      const houer = new Date().getHours();
      if (houer >= 20 || houer < 6) {
        return "晚上好";
      } else if (houer >= 6 && houer < 12) {
        return "上午好";
      } else if (houer >= 12 && houer < 20) {
        return "下午好";
      }
    },
  },
};
</script>

<style scoped>
.rightside {
  width: 240px;
}
/* 签到 */
.rightside .signin {
  box-sizing: border-box;
  width: 240px;
  height: 96px;
  margin-bottom: 16px;
  padding: 16px;
  background-color: #fff;
}
.rightside .signin .firstline {
  display: flex;
  justify-content: space-between;
}
.rightside .signin .firstline .date {
  height: 32px;
  font-size: 18px;
  display: flex;
}
.rightside .signin .firstline .date span {
  margin-left: 10px;
  margin-top: 2px;
}
.rightside .signin .firstline .date .icon-rili {
  color: #fa9201;
  font-size: 24px;
}
.rightside .signin .el-button {
  border: 1px solid #1e80ff;
  height: 32px;
  width: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1e80ff;
}
.rightside .signin .secondline {
  margin-top: 8px;
  text-align: center;
  font-size: 14px;
  color: #4e5969;
}
/* 广告 */
.advlist {
  padding: 0;
}
.advlist li {
  position: relative;
  height: 200px;
  width: 240px;
  margin-bottom: 16px;
  background-color: #fff;
}
.advlist li:hover .icon-close2 {
  visibility: visible;
}
.advlist li .icon-close2 {
  position: absolute;
  top: 5px;
  right: 5px;
  color: rgba(0, 0, 0, 0.3);
  font-weight: bold;
  visibility: hidden;
}
.advlist li .icon-close2:hover {
  color: rgba(0, 0, 0, 0.5);
}
.advlist li img {
  height: 200px;
  width: 240px;
}
.advlist li a {
  display: inline-block;
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 40px;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 3px;
  text-decoration: none;
  color: #fff;
  text-align: center;
  font-size: 12px;
  line-height: 20px;
  background-color: rgba(0, 0, 0, 0.2);
}
.advlist li a span {
  font-size: 12px;
  line-height: 20px;
}
.inco {
  display: none;
}
.advlist li a:hover {
  width: 70px;
  background-color: rgba(0, 0, 0, 0.3);
}
.advlist li a:hover .inco {
  display: inline-block;
}
/* 下载app */
.downloadapp {
  margin-bottom: 16px;
  width: 240px;
  height: 74px;
  background-color: #fff;
}
.downloadapp .app-link {
  display: flex;
  justify-content: space-between;
  padding: 12px;
}
.downloadapp .app-link .appcode {
  width: 50px;
  height: 50px;
}
.downloadapp .app-link .appcode img {
  width: 100%;
  height: 100%;
}
.downloadapp .app-link .content {
  font-size: 14px;
  color: #1d2129;
}
.downloadapp .app-link .content .headline {
  height: 22px;
  line-height: 22px;
}
.downloadapp .app-link .content .desc {
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  color: #86909c;
  margin-top: 6px;
}
/* 作者榜 */
.recommend-author {
  margin-bottom: 16px;
  background-color: #fff;
  color: #333;
}
.recommend-author a {
  text-decoration: none;
  color: #333;
}
.recommend-author header {
  font-size: 14px;
  padding: 16px;
  border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
}
.authorlist .authoritem {
  padding: 16px;
}
.authorlist .authoritem .item {
  display: flex;
}
.authorlist .authoritem .item .item-header {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 6px;
}
.authorlist .authoritem .item .item-header img {
  width: 100%;
  height: 100%;
}
.authorlist .authoritem .item .item-info .item-name {
  font-size: 14px;
  display: flex;
  justify-content: start;
  align-items: center;
}
.authorlist .authoritem .item .item-info .item-name .rank {
  margin-left: 4px;
}
.authorlist .authoritem .item .item-info .item-name .rank .icon-icon-test1 {
  font-size: 20px;
  color: #1e80ff;
}
.authorlist .authoritem .item .item-info .position {
  font-size: 12px;
  color: #909090;
  margin-top: 3px;
}
.recommend-author footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-top: 1px solid hsla(0, 0%, 59.2%, 0.1);
}
.recommend-author footer a {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #007fff;
  vertical-align: top;
}
.index-aside-footer {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.index-aside-footer .more-list {
  display: flex;
  align-items: center;
}
.index-aside-footer .more-list .item {
  margin-right: 10px;
}
.index-aside-footer .more-list .item a {
  font-size: 12px;
  color: #909090;
}
.index-aside-footer .more-list .item a:hover {
  color: #007fff;
}
.index-aside-footer .more-list:nth-child(4) {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.index-aside-footer .more-list:nth-child(4) li span {
  font-size: 12px;
  color: #909090;
}
.index-aside-footer .more-list:last-child {
  display: flex;
}
.index-aside-footer .more-list:last-child li {
  margin-top: 10px;
  position: relative;
}
.index-aside-footer .more-list:last-child li:hover .qr-panel {
  opacity: 1;
}
.index-aside-footer .more-list:last-child li img {
  width: 24px;
  height: 24px;
}
.qr-panel {
  position: absolute;
  top: 35px;
  left: -40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 146px;

  background-color: #fff;
  opacity: 0;
  transition: all 0.3s;
  border-radius: 4px;
}
.index-aside-footer .more-list:last-child li .qr-panel img {
  width: 120px;
  height: 120px;
}
.qr-panel .title {
  font-size: 12px;
  padding-top: 10px;
  padding-bottom: 3px;
  color: #909090;
}
</style>
