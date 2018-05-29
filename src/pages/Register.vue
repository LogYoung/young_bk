<template>
	<div>
	请注册您的账号
	<form>
	      <input type="text" name="username" v-model="userName"> <br>
	      <input type="password" name="password" v-model="password"> <br>
	      <a href="javascript:;" @click="register">注册</a>
	      <p>我已有账号<router-link to="logoin">立即登陆</router-link></p>
	</form>
	</div>
</template>

<script>
	export default{
		name:"Register",
		data(){
			return{
				userName:"",
				password:""
			}
		},
		methods:{
			register(){
				var _username=this.userName;
				var _password=this.password;
				this.$http.post("/api/user/addUser",{
					username:_username,
					password:_password
				},{}).then((res)=>{
					if(res.body == "-1"){
						alert("用户名已经存在")
					}
					if(res.body == "1"){
						alert("注册成功")
						this.$router.push("/logoin")
					}
				})
			}
		}
	}
</script>

<style>
</style>