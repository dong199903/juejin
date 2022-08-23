<template>
  <div class="list-item">
    <div class="list-item-top">
      <span>{{source.username}}</span>
      <span>|</span>
      <span>{{timeDeal(source.date).year}}-{{timeDeal(source.date).month}}-{{timeDeal(source.date).day}}</span>
      <span>|</span>
      <span>{{source.tag[0]}}</span>
    </div>

    <div class="list-item-bot">
      <div class="list-item-content">
        <div class="title">{{source.title}}</div>
        <div class="content">{{source.content}}</div>
        <div class="other">
          <div><i class="iconfont icon-kanguo"></i><span>{{source.watched}}</span></div>
          <div><i class="iconfont icon-dianzan" :class="source.love?'actived':''" ></i><span>{{source.likes}}</span></div>
          <div><i class="iconfont icon-huifu"></i><span>{{source.comments}}</span></div>
        </div>
      </div>

      <img v-if="source.coverUrl" :src="source.coverUrl"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "item-component",
  props: {
    source: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods:{
    timeDeal(time) {
      /**返回年月日,时分秒 */
      let date = new Date(time)
      let year = date.getFullYear()
      let month = date.getMonth()+1
      let day = date.getDate()
      let hour = date.getHours()
      let minutes = date.getMinutes()
      let second = date.getSeconds()
      return {
        year,month,day,hour,minutes,second
      }
    }
  }
};
</script>

<style scoped>
.list-item{
  border-bottom: 1px solid #e5e6eb;
  padding: 10px 0;
}
.list-item-top{
  display: flex;
  
}
.list-item-top span{
  padding-right: 8px;
  line-height: 22px;
  font-size: 15px;
  color:#86909c;
}
.list-item-bot{
  display: flex;
  justify-content: space-between;
}
.title{
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #1d2129;
    width: 100%;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    margin: 10px 0;
}
.content{
    color: #86909c;
    font-size: 13px;
    line-height: 22px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
}
img{
  width: 120px;
  height: 80px;
  margin-left: 24px;
  background-color: #fff;
  border-radius: 2px;
}
.other{
  display: flex;
}
.other>div{
  margin-right: 12px;
  font-size: 13px;
  line-height: 30px;
  color: #4e5969;
}
.other i{
  margin-right: 4px;
  font-size: 19px;
}
.actived{
  color: blue!important;
  font-weight: bolder;
}
</style>