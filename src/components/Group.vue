<template>
    <div class="group">
        <div class="title-box">目录</div>
        <div class="item-box" id="item-box">
            <div v-for="item in list" :key="item.id" :class="['item', item.isActivate ? 'activate' : '', 'level-' + item.level]" @click="toItem(item)">
                <div class="label"></div>
                <div class="text">{{item.title}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [],
                busy: false,
                total: 0,
                current: 0,
                begin:1
            }
        },
        mounted() {
            let container = document.querySelector('.container')

            let headers = Array.from(container.querySelectorAll("h2, h3"));
            console.log(headers)
            headers.forEach((item, index) => {
              item.setAttribute("id",'id'+this.begin)
                this.list.push({
                        title: item.innerHTML,
                        id: "id"+this.begin,
                        level: Number.parseInt(item.localName.slice(1)),
                        isActivate: false,
                        index: index
                    })
                    this.begin++
            });
            this.total = this.list.length;
            window.addEventListener('scroll', this.scrollPage)
        },
        beforeDestory() {
            window.removeEventListener("scroll", this.scrollPage)
        },
        methods: {
            toItem(item) {
                const windowTop = document.body.getBoundingClientRect().top;
                const toTopDistance = document.getElementById(item.id).getBoundingClientRect().top;
                window.scrollTo({
                  top: toTopDistance - windowTop,
                  behavior: 'smooth'
                })
                this.current = item.index;
                this.scrollListener();
            },
            scrollPage() {
                if (this.busy === true) {
                    return;
                }
                this.busy = true
                let container = document.querySelector('.container')
                let flag = false;
                const newWindowBoundTop = document.body.getBoundingClientRect().top;
                if(this.windowBoundTop > newWindowBoundTop)         
                    flag = false;
                else
                    flag = true;
                this.windowBoundTop = newWindowBoundTop;
                let headers = Array.from(container.querySelectorAll("h2, h3")); //获取所有标签为h1，h2的节点
                let allNum = headers.length;
                for (let i = 0; i < allNum; i++) {
                    if (headers[i].getBoundingClientRect().top > 110 && headers[i].getBoundingClientRect().top < 130) {
                        
                        this.list.forEach(item => item.isActivate = false)
                        let indexOfActivate = i;
                        if(flag){
                            indexOfActivate = (i === 0) ? 0 : i - 1;
                        }
                        this.list[indexOfActivate].isActivate = true
                        this.current = indexOfActivate;
                        break;
                    }
                }
                let itemBox = document.getElementById('item-box');
                if(this.current < 5){
                    itemBox.scrollTop = 0;
                }else if(this.current > this.total - 5){
                    itemBox.scrollTop = 45 * (this.total - 5);
                }else{
                    itemBox.scrollTop = 45 * (this.current - 5);
                }
                this.busy = false;
            },
        },
       
    }
</script>

<style  scoped>
.group {
  margin-top: 20px;
  width: 300px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
}
 .title-box {
  height: 55px;
  line-height: 55px;
  border-bottom: 1px solid #e4e6eb;
  display: flex;
  align-items: center;
  color: #1d2129;
  margin: 0 20px;
}
 .item-box {
  height: 360px;
  overflow-y: scroll;
  scrollbar-face-color: #E4E6EB;
}
.item-box .item {
  width: 100%;
  height: 45px;
  background-color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
 .item-box .item .label {
  width: 4px;
  height: 16px;
  border-radius: 0 4px 4px 0;
  left: 0;
  background-color: #FFF;
}
 .item-box .item .text {
  width: 100%;
}
 .item-box .item.level-1 .text {
  color: #000;
  padding-left: 16px;
}
 .item-box .item.level-2 .text {
  color: #333;
  padding-left: 30px;
}
 .item-box .item.activate {
  color: #1E80FF;
}
 .item-box .item.activate .label {
  background-color: #1E80FF;
}
 .item-box .item:hover {
  cursor: pointer;
  background-color: #F7F8FA;
}
.activate{
  color: #1E80FF;
}
.level-3{
  margin-left: 20px;
}

</style>