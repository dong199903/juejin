<template>
    <div class="panel">
        <div class="sj"></div>
        <div id="submit-panel">
            <!-- 内容 -->
            <!-- 卡片头 -->
            <div class="sp-title">发布文章</div>

            <div class="split-line"></div>
            <!-- 表单 -->
            <el-form label-position="right" label-width="100px" :model="formLabelAlign" class="sp-form">
                <el-form-item label="分类:">
                    <el-radio-group v-model="formLabelAlign.type" class="sp-form-type">
                        <span>
                            <el-radio-button label="后端"></el-radio-button>
                        </span>
                        <span>
                            <el-radio-button label="前端"></el-radio-button>
                        </span>
                        <span>
                            <el-radio-button label="Android"></el-radio-button>
                        </span>
                        <span>
                            <el-radio-button label="IOS"></el-radio-button>
                        </span>
                        <span>
                            <el-radio-button label="人工智能"></el-radio-button>
                        </span>
                        <span>
                            <el-radio-button label="开发工具"></el-radio-button>
                        </span>
                        <span>
                            <el-radio-button label="代码人生"></el-radio-button>
                        </span>
                        <span>
                            <el-radio-button label="阅读"></el-radio-button>
                        </span>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="添加标签:">
                    <el-select v-model="formLabelAlign.labelValue" filterable placeholder="请搜索添加标签">
                        <el-option v-for="item in formLabelAlign.label" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="文章封面:">
                    <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                        <img v-if="formLabelAlign.imageUrl" :src="formLabelAlign.imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        <div class="upload-img-tips">上传封面</div>
                    </el-upload>
                </el-form-item>
                <el-form-item label="收录至专栏:">
                    <el-select v-model="formLabelAlign.labelValue" filterable placeholder="请搜索添加专栏，同一篇文章最多添加三个专栏">
                    </el-select>
                </el-form-item>
                <el-form-item label="编辑摘要:">
                    <el-input type="textarea" :rows="2" v-model="formLabelAlign.abstract">
                    </el-input>
                </el-form-item>
            </el-form>
            <div class="split-line mt-20"></div>

            <!-- 底部按钮 -->
            <el-row class="mt20 f-right sp-submit-btns">
                <el-button plain @click="hideSP">取消</el-button>
                <el-button type="primary">确定并发布</el-button>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formLabelAlign: {
                name: '',
                region: '',
                type: '',
                label: [{
                    value: '前端',
                    label: '前端'
                }, {
                    value: '后端',
                    label: '后端'
                }, {
                    value: 'JavaScript',
                    label: 'JavaScript'
                }, {
                    value: 'GitHub',
                    label: 'GitHub'
                }, {
                    value: '面试',
                    label: '面试'
                }, {
                    value: '架构',
                    label: '架构'
                }, {
                    value: 'Vue.js',
                    label: 'Vue.js'
                }, {
                    value: '算法',
                    label: '算法'
                }, {
                    value: '代码规范',
                    label: '代码规范'
                }, {
                    value: 'CSS',
                    label: 'CSS'
                }],
                labelValue: '',
                abstract: '',
                imageUrl: ''
            }
        }
    },
    methods: {
        hideSP() {
            this.$parent.showSP();
        },
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        }

    },
    created() { },
    mounted() { }
}
</script>

<style>
.sj {
    width: 12px;
    height: 12px;
    margin: 0 58px 0 auto;
    background-color: white;
    transform: rotate(45deg);
    position: absolute;
    top: 0;
    right: 0px;
    border-top: 1px solid rgb(224, 224, 224);
    border-left: 1px solid rgb(224, 224, 224);
    z-index: 99;
}

#submit-panel {
    width: 560px;
    background-color: white;
    position: absolute;
    top: 6px;
    right: 0px;
    border: 1px solid rgb(224, 224, 224);
}

.split-line {
    background-color: rgb(211, 211, 211);
    height: 1px;
}

.sp-title {
    padding: 26px 20px 20px;
    box-sizing: border-box;
    font-size: 18px;
}

.sp-form {
    padding: 20px;
    box-sizing: border-box;
}

.sp-form-type .el-radio-button__inner {
    width: 90px;
    height: 30px;
    padding-top: 6px;
    margin: 6px 8px 4px;
    font-size: 14px;
    color: grey;
    background-color: rgb(248, 248, 248);
}
.sp-form-type .el-radio-button__inner:nth-of-type(odd) {
    margin-right: 0;
}

.sp-form-type .el-radio-button__inner:hover {
    color: rgb(104, 104, 255);
}

/* 图片上传 */
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 30px;
    line-height: 178px;
    text-align: center;
    padding: 20px 0 0;
}

.avatar {
    width: 178px;
    height: 178px;
    display: block;
}

.upload-img-tips {
    padding-bottom: 10px;
    color: grey;
}

.mt-20 {
    margin-top: -20px;
}
.f-right {
    float: right;
}
.sp-submit-btns {
    padding: 20px;
}
</style>