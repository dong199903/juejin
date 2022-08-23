<template>
    <div class="panel">
        <div class="sj"></div>
        <div id="submit-panel">
            <!-- 内容 -->
            <!-- 卡片头 -->
            <div class="sp-title">发布文章</div>

            <div class="split-line"></div>
            <!-- 表单 -->
            <el-form label-position="right" label-width="100px" :model="formMsg" class="sp-form" size="mini"
                ref="formMsg" :rules="rules">
                <el-form-item label="分类:" prop="type">
                    <el-radio-group v-model="formMsg.type" class="sp-form-type">
                        <!-- 子选项 -->
                        <span v-for="(typeItem, index) in formLabel.type" :key="index">
                            <el-radio-button :label="typeItem"></el-radio-button>
                        </span>
                    </el-radio-group>
                </el-form-item>

                <el-form-item label="添加标签:" prop="tag">
                    <el-select v-model="formMsg.tag" filterable placeholder="请搜索添加标签" class="select-style" multiple>
                        <el-option v-for="item in formLabel.tags" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="文章封面:">
                    <el-upload class="avatar-uploader" action="http://127.0.0.1:9999/api/upload/file"
                        :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                        <img v-if="formMsg.imageUrl" :src="formMsg.imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        <div class="upload-img-tips" v-if="formMsg.imageUrl == ''">上传封面</div>
                    </el-upload>
                    <div class="cover-tips">建议尺寸：1303*734px</div>
                </el-form-item>
                <el-form-item label="收录至专栏:">
                    <el-select v-model="formMsg.collection" filterable placeholder="请搜索添加专栏，同一篇文章最多添加三个专栏"
                        class="select-style" multiple>
                        <el-option v-for="item in formLabel.collection" :key="item.value" :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="编辑摘要:" prop="abstract">
                    <el-input type="textarea" :rows="2" v-model="formMsg.abstract" rows="5" maxlength="100">
                    </el-input>
                    <div class="count-tip">{{ formLabel.countNum }}/100</div>
                </el-form-item>
            </el-form>
            <div class="split-line mt-20"></div>

            <!-- 底部按钮 -->
            <el-row class="mt20 f-right sp-submit-btns">
                <el-button plain @click="hideSP" size="mini">取消</el-button>
                <el-button type="primary" size="mini" @click="submitEditor('formMsg')">确定并发布</el-button>
            </el-row>
        </div>
    </div>
</template>

<script>
import { marked } from 'marked'

export default {
    data() {
        return {
            formLabel: {
                type: ["后端", "前端", "Android", "IOS", "人工智能", "开发工具", "代码人生", "阅读",],
                tags: [{
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
                collection: [{
                    value: '前端',
                    label: '前端'
                },],
                countNum: 0
            },
            formMsg: {
                type: '',
                tag: '',
                collection: '',
                imageUrl: '',
                abstract: '',
            },
            rules: {
                type: [
                    { required: true, message: '请选择一个分类', trigger: 'blur' },
                ],
                tag: [
                    { required: true, message: '至少添加一个标签', trigger: 'blur' }
                ],
                abstract: [
                    { required: true, message: '摘要不满足最低50字的要求', trigger: 'blur', min: 50 }
                ],
            },
        }
    },
    props: {
        content: String,
        articleTitle: String,
        submitType: String
    },
    methods: {
        hideSP() {
            this.$parent.showSP();
        },
        handleAvatarSuccess(res, file) {
            // console.log(res, file);
            this.formMsg.imageUrl = res.data;
            // this.formMsg.imageUrl = URL.createObjectURL(file.raw);
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
        },
        // 提交表单
        submitEditor(formMsg) {
            this.$refs[formMsg].validate((valid) => {
                if (valid) {
                    // 验证通过
                    const data = {
                        username: "掘金酱",
                        date: Date.now(),
                        tag: this.formMsg.tag,
                        title: this.articleTitle,
                        abstract: this.formMsg.abstract,
                        watched: 0,
                        likes: 0,
                        comments: 0,
                        coverUrl: this.formMsg.imageUrl,
                        postId: this.$route.params.postId,
                        content: this.content,
                        contentHTML: marked(this.content),
                        type: this.formMsg.type,
                        collection: this.formMsg.collection,
                        editor: this.submitType,
                        status: 1
                    }
                    // 提交后台！！！
                    console.log("后台提交",data);
                    // 简单调用 vuex
                    this.$store.commit("ADD_POST", data);
                    this.$router.push('/editor');

                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    },
    watch: {
        'formMsg.abstract': function () {
            this.formLabel.countNum = this.formMsg.abstract.length;
        },
    },
    created() {
        this.formMsg.abstract = this.content.replaceAll('\n', " ").slice(0, 100).trim();
    },
}
</script>

<style scoped>
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
    padding: 0;
    margin: 0px 8px 16px 0;
    font-size: 14px;
    color: grey;
    background-color: rgb(248, 248, 248);
    text-align: center;
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
    height: 100px;
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

.cover-tips {
    margin-top: -10px;
    color: grey;
}

.select-style {
    width: 350px;
}

.count-tip {
    color: red;
    font-size: 12px;
    position: absolute;
    bottom: 0;
    right: 10px;
}
</style>