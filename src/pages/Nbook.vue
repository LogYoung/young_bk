<template>
 	<div id="Nbook">
 		<div class="topshow" v-show="datafalg">
	 		<p class="h1">我的日常笔记，以及学习笔记</p>
	 		<p v-if="errinfo">
				{{errinfo}}
			</p>
	 		<div class="list" v-for="data in listdata">
	 			<Nbooklist :listdata="data" ></Nbooklist>
	 		</div>
 		</div>
 		<div ref="nbookchildren">
 			<router-view ></router-view>
 		</div>
 	</div>
</template>

<script>
import Nbooklist from "@/components/Nbooklist"
	export default {
		name:"Nbook",
		beforeRouteUpdate  (to,from,next){
				if(to.path !== "/nbook"){
					this.datafalg=false

				}else{
					this.datafalg=true
				}
//				if(to.path == from.path && to.query.data !== from.query.data){
//						location.reload()
//						this.listfalg=true
//				}					
			next()
		},
		beforeMount(){
			this.$axios.get("../static/json/Nbooklist.json").then((res) => {
				 if(res.status !== 200){
				 	 this.errinfo="数据请求错误，请尝试从新加载页面"
				 }else{
				 	this.listdata=res.data
				 }
			})
		},
		mounted(){
			if(this.$refs.nbookchildren.children.length !== 0){
				this.datafalg=false
			}
		},
		data(){
			return {
				listdata:"",
				errinfo:false,
				datafalg:true,
				listfalg:false,
			}
		},
		watch:{

		},
		components:{
			Nbooklist
		}
	}
	
	
</script>

<style lang="scss">
	#Nbook{
		width: 70%;
		padding-bottom: 100px;
		.topshow{
		 .h1{
			font-size: 22px;
			text-align: left;
			margin-left: 25px;
			margin-top: 35px;
			}
		}
		
	}
</style>