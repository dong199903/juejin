<template>

    <div>
        <top-nav></top-nav>
        <div class="img-publish"></div>
        <div class="tips-publish">
            发布成功！有了你的分享，啊对对队的仿稀土掘金会变得更好！
        </div>
        <el-card class="box-card">
            <div class="post-link">
                <a :href="'/#/detail/' + postId">
                    {{ title }}
                </a>
            </div>
            <div class="about">
                <a href="https://juejin.cn/book/6844733795329900551/section/6876001660431400967" target="_blank">
                    如何玩转稀土掘金社区？点击了解
                </a>
            </div>
            <div class="share">
                分享到：
                <span><i class="iconfont">&#xe637;</i>微信</span>
                <span><i class="iconfont">&#xe667;</i>微博</span>
                <span><i class="iconfont">&#xeb31;</i>复制链接</span>
            </div>
        </el-card>
        <div class="to-home">
            <a href="/">回到首页</a>
        </div>
    </div>
</template>

<script>
import TopNav from '@/components/TopNav'
export default {
    data() {
        return {
            postId: 0,
            title: "title"
        }
    },
    components: {
        TopNav
    },
    created() {
        // 设置标题
        document.title = this.$route.meta.title;
        let query = this.$route.query;
        if (query.post) {
            this.postId = query.post;
        }
        if (query.title) {
            this.title = query.title;
        }

    },
}
</script>

<style>
.img-publish {
    background: url('~@/assets/published.svg') center center;
    background-size: contain;
    width: 142px;
    height: 142px;
    margin: 70px auto 0;
}

.tips-publish {
    width: 500px;
    margin: 40px auto;
    color: #707070;
    text-align: center;
}

.text {
    font-size: 14px;
}

.item {
    padding: 18px 0;
}

.box-card {
    width: 80%;
    margin: 0 auto;
    text-align: center;
}

.post-link {
    margin: 20px 0;
}

.post-link a {
    color: #333;
    font-size: 24px;
}

.about {
    margin: 40px 0;
}

.about a {
    color: rgb(40, 115, 255);
    text-decoration: none;
}

.share {
    margin: 30px 0;
}

.to-home {
    text-align: center;
    margin: 60px auto;
}

.to-home a {
    color: rgb(40, 115, 255);
    text-decoration: none;
}

.share span {
    display: inline-block;
    padding: 0 15px;
    height: 30px;
    border: 1px solid #aaa;
    text-align: center;
    line-height: 30px;
    margin-right: 10px;
    border-radius: 20px;
}

.share span i::after {
    content: "  ";
}

.share span:nth-child(1) i {
    color: rgb(0, 207, 0);
}

.share span:nth-child(2) i {
    color: rgb(255, 40, 40);
}

.share span:nth-child(3) i {
    color: rgb(41, 116, 255);
}
</style>