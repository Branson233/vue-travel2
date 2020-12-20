<template>
  <div class="login-container">
    <el-form ref="user" :model="user" class="login-form">
      <div class="form">
      <el-form-item  prop="name">
        <el-input v-model="user.name" placeholder="请输入用户名"></el-input>
      </el-form-item> 
      <el-form-item  prop="password">
        <el-input v-model="user.password" placeholder="请输入密码"></el-input>
      </el-form-item> 
      <el-form-item prop="checked">
        <el-checkbox v-model="checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
      </el-form-item> 
      <el-form-item>
        <el-button type="primary" @click="onLogin" class="login-button">登录</el-button>
      </el-form-item>
      </div>
    </el-form>
    <el-dialog
      :modal=false
      title="提示"
      :visible.sync="dialogVisible"
      width="50%">
      <span>用户名或密码不正确</span>
      <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
let userInfo = require('../../public/mock/login.json')
export default {
  name: 'Login',
  components:{
  },
  data() {
      return {
        user: {
          name: '',
          password: ''
        },
        checked: false,
        dialogVisible: false
      }
    },
    methods: {
      restForm(refname) {
        this.$refs[refname].resetFields()
      },
      onLogin(res) {
        res=userInfo
        if(res.ret && res.data) {
          const data =res.data
          if(this.user.name in data) {
            if (this.user.password==data[this.user.name]){
              this.$router.push('/home')
            }else{
              this.dialogVisible = true
              this.restForm("user")
              this.checked=false
            }
          }else{
            this.dialogVisible = true
            this.restForm("user")
            this.checked=false
          }
        }
      }
    }
}
</script>

<style lang="stylus">
  .login-container
    position: fixed
    left:0
    top:0
    right:0
    bottom:0
    display: flex
    justify-content:center
    align-items:center
    .login-form
      background-color:white
      padding: 1rem;
      .form
        marigin: auto
        .login-button
          width:100%
</style>
