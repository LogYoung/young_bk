<template>
	<div id="logoin">
		请登陆您的账号
		<form>
	      <input type="text" name="username" v-model="userName"> <br>
	      <input type="password" name="password" v-model="password"> <br>
	      <a href="javascript:;" @click="logoin">登陆</a>
	      <p>没有账号？<router-link to="register">立即注册</router-link></p>
	    </form>
	</div>
</template>

<script>
import {delCookie,getCookie,setCookie} from '@/unti/unti.js'
	
	export default{
		name:"Logoin",
		data(){
			return{
				userName:"",
				password:""
			}
		},
		methods:{
			logoin(){
				var _username=this.userName;
				var _password=this.password;
				this.$http.post("/api/user/selectUser",
					{
						username:_username,
						password:_password
					}
				,{}).then((res) =>{
					if(res.body == "-1"){
						alert("用户名不存在")
					}
					if(res.body == "0"){
						alert("密码错误")
					}
					if(res.body == "1"){
						setCookie("username",_username,1)
						this.$router.push("/")
					}
				})
			}
		}
	}
</script>

<style>
</style>