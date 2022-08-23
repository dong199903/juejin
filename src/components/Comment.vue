<template>
  <div>
    <el-form :model="ruleForm"   label-width="100px" class="demo-ruleForm">
      <el-form-item label="评论" prop="desc">
      <el-input type="textarea" v-model="ruleForm.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">发表评论</el-button>
    </el-form-item>
    
    </el-form>
  </div>
</template>

<script>
import { Message } from 'element-ui'
export default{
  data(){
    return {
        ruleForm: {
        desc: ''
      }
    }
  },
  methods:{
    submitForm() {
      console.log(this.$route.params.id)
      this.$store.commit("COMMENT",{desc:{content:this.ruleForm.desc,date:Date.now()},pid:this.$route.params.id})
      Message.success("评论成功")
    }
  }
}
</script>

<style scoped>
  :deep(.el-form-item__label){
    font-size: 21px;
    font-weight: bold;
    color:#252933;
  }
  :deep(.el-form-item__label){
    text-align: left;
    width: 60px!important;
  }
</style>