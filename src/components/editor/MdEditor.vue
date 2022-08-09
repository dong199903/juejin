<template>
    <div>
        <v-md-editor v-model="editorValue" :disabled-menus="[]" @upload-image="handleUploadImage" :style="extraStyle">
        </v-md-editor >
    </div>
</template>

<script>
import services from "@/utils/service"
export default {
    name: 'mdEditor',
    data() {
        return {
            editorValue: this.content != null ? this.content : "",
        }
    },
    props: {
        // 接收值父组件传递值
        content: String,
        extraStyle: String
    },
    // created() {
    //     console.log("--------加载md编辑器")
    // },
    methods: {
        // v-md-editor 文件上传
        async handleUploadImage(event, insertImage, files) {
            // 上传
            for (let i = 0; i < files.length; i++) {
              const formDate = new FormData();
              formDate.append('file', files[i], files[i].name)
              let info = await services.post('upload/file',formDate,{
                Headers:{
                  "Content-type":"multipart/form-data"
                }
              })
              insertImage({
                url: info.data,
                desc: info.data
              });
            }
        },
    },
    watch: {
        editorValue: function (newNum, oldNum) {
            // 修改调用者传入的值
            this.$emit('update:content', newNum)
        }
    },
}
</script>

<style scoped>
</style>
