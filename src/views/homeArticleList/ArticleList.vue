<template>
  <div class="articlelist">
    <nav>
      <ul class="rec-title">
        <li>
          <a href="#" class="active">推荐</a
          ><span style="color: #f1f1f1">|</span>
        </li>
        <li><a href="#">最新</a><span style="color: #f1f1f1">|</span></li>
        <li><a href="#">热榜</a></li>
      </ul>
    </nav>
    <div class="contain">
      <ul>
        <li v-for="(item, index) in articlelist" :key="index">
          <Item :source="item"></Item>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Item from "./Item.vue";
export default {
  data() {
    return {
      items: [
        { uid: "1", text: "abc" },
        { uid: "2", text: "xyz" },
        { uid: "3", text: "abc" },
        { uid: "4", text: "xyz" },
        { uid: "5", text: "abc" },
        { uid: "6", text: "xyz" },
        { uid: "7", text: "abc" },
        { uid: "8", text: "xyz" },
        { uid: "9", text: "abc" },
        { uid: "10", text: "xyz" },
        { uid: "11", text: "abc" },
        { uid: "12", text: "xyz" },
      ],
      articlelist: [
        {
          nickname: "饭店前端",
          avater: require("./img/qianDuanLanBo.jpg"),
          created_at: "1天前",
          tags: [
            {
              tag_id: "123",
              tag_name: "前端",
            },
            {
              tag_id: "124",
              tag_name: "JavaScript",
            },
          ],
          article_id: "abcdefg",
          title: "啊对对对的掘金|青训营笔记",
          describe: "啊对对对对",
          view: "123",
          up_num: "999",
          up_status: false,
          coppent_num: "999",
          img: require("@/assets/imgs/duiduidui.jpg"),
        },
        {
          nickname: "饭店前端",
          avater: require("./img/qianDuanLanBo.jpg"),
          created_at: "1天前",
          tags: [
            {
              tag_id: "123",
              tag_name: "前端",
            },
            {
              tag_id: "124",
              tag_name: "JavaScript",
            },
          ],
          article_id: "abcdefg",
          title: "啊对对对的掘金|青训营笔记",
          describe: "啊对对对对",
          view: "123",
          up_num: "999",
          up_status: false,
          coppent_num: "999",
          img: require("@/assets/imgs/duiduidui.jpg"),
        },
        {
          nickname: "饭店前端",
          avater: require("./img/qianDuanLanBo.jpg"),
          created_at: "1天前",
          tags: [
            {
              tag_id: "123",
              tag_name: "前端",
            },
            {
              tag_id: "124",
              tag_name: "JavaScript",
            },
          ],
          article_id: "abcdefg",
          title: "啊对对对的掘金|青训营笔记",
          describe: "啊对对对对",
          view: "123",
          up_num: "999",
          up_status: false,
          coppent_num: "999",
          img: require("@/assets/imgs/duiduidui.jpg"),
        },
      ],
    };
  },
  components: {
    Item,
  },
};
</script>

<style scoped>
.articlelist {
  width: 700px;
  background-color: #fff;
}
.articlelist nav {
  border-bottom: 1px solid #f4f4f4;
  height: 30px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
}
.articlelist nav ul {
  display: flex;
  justify-content: space-between;
}
.articlelist nav ul li {
}
.articlelist nav ul li a {
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  color: #333;
  padding: 14px;
}
.articlelist nav ul li a:hover {
  color: #1e80ff;
}
.articlelist nav ul li a.active {
  color: #1e80ff;
}
.contain {
  padding: 0 15px;
}
</style>