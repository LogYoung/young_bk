<template>
	<div id="index">
		首页的内容
		<div v-if="username" >
		 hallo欢迎回来 {{username}}
		</div>
		<div v-if="!username">
			<router-link to="/logoin">请登陆</router-link>
		</div>
	</div>
</template>

<script>
import {delCookie,getCookie} from '@/unti/unti.js'

	export default{
		name:"Myindex",
		mounted(){
			var _cookie=getCookie("username")
			this.username=_cookie
		},
		data(){
			return {
				username:"",
				name:"",
				tel:"",
				ly:""
			}
		},
		components:{
		},
		methods:{
			btnform(){
				var _name=this.name,
					_tel=this.tel,
					_ly=this.ly,
					_time=new Date();
					_time += ""
				this.$http.post("/api/form/btnform",{
					 name:_name,
					 tel:_tel,
					 ly:_ly,
					 time:_time
				},{}).then((res) =>{
					 if(res.body == "1"){
					 	alert("留言成功")
					 	this.name=""
					 	this.tel=""
					 	this.ly=""
					 	
					 }
				})
				
			}
		}
	}
	
</script>

<style>
	#index{
		width: 100%;
		height: 1000px;
	}
</style>