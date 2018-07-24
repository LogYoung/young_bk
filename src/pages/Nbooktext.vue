<template>
	<div id="Nbooktext">
		<p class="smnav"><router-link to="/nbook">笔记</router-link> >> {{this.textdatas.title}}</p>
		<p class="title">{{this.textdatas.title}}</p>
		<p class="author">作者： {{this.textdatas.author}} <span class="time">时间： {{this.textdatas.time}}</span></p>
		<div v-for="data in textdata.indp">
			<p class="indp">{{data}}</p>
		</div>
		<div class="idbox" v-if="idflag == 0">
			<id0></id0>
		</div>
		<div class="idbox" v-if="idflag == 1">
			<id1></id1>
		</div>
		<div class="idbox" v-if="idflag == 2">
			<id2></id2>
		</div>
		<div class="idbox" v-if="idflag == 6">
			<id6></id6>
		</div>
		<div class="idbox" v-if="idflag == 7">
			<id7></id7>
		</div>
		<div class="idbox" v-if="idflag == 8">
			<id8></id8>
		</div>
		<div class="idbox" v-if="idflag == 9">
			<id9></id9>
		</div>
		<div class="idbox" v-if="idflag == 10">
			<id10></id10>
		</div>
		<div class="idbox" v-if="idflag == 11">
			<id11></id11>
		</div>
		<div class="idbox" v-if="idflag == 12">
			<id12></id12>
		</div>
		<div class="idbox" v-if="idflag == 13">
			<id13></id13>
		</div>
		<div class="idbox" v-if="idflag == 14">
			<id14></id14>
		</div>
		<div class="idbox" v-if="idflag == 15">
			<id15></id15>
		</div>
	</div>
</template>

<script>
import Id0 from "@/components/Id0"
import Id1 from "@/components/Id1"
import Id2 from "@/components/Id2"
import Id6 from "@/components/Id6"
import Id7 from "@/components/Id7"
import Id8 from "@/components/Id8"
import Id9 from "@/components/Id9"
import Id10 from "@/components/Id10"
import Id11 from "@/components/Id11"
import Id12 from "@/components/Id12"
import Id13 from "@/components/Id13"
import Id14 from "@/components/Id14"
import Id15 from "@/components/Id15"
	export default{
		name:"Nbooktext",
		beforeRouteUpdate(to,from,next){
			this.idflag=to.query.data
			this.textdata=this.textall[this.idflag].textdata
			next()
		},
		created(){
			this.$axios.get("../static/json/Nbooklist.json").then((res) => {
				 if(res.status !== 200){
				 	 this.errinfo="数据请求错误，请尝试从新加载页面"
				 }else{
				 	this.idflag=this.$route.query.data
				 	this.textall=res.data
				 	this.textdata=this.textall[this.idflag].textdata
				 }
			})
		},
		props:["listdata"],
		mounted(){
		},
		data(){
			return{
				textall:{},
				textdata:{},
				idflag:"",
			}
		},
		computed:{
			textdatas:{
					 get: function () {
				      return this.textdata
				    },
				    // setter
				    set: function (newValue) {
				       
				    }
				}
			
		},
		components:{
			Id0,Id1,Id2,Id6,Id7,Id8,Id9,Id10,Id11,Id12,Id13,Id14,Id15
		}
	}
</script>

<style lang="scss">
	.redfont{
		color: #c7254e !important;
	}
	#Nbooktext{
		width: 90%;
		margin: 0 auto;
		padding-bottom: 45px;
		.idbox{
			margin-top: 25px;
			padding-top: 10px;
			border-top: 1px solid #CCCCCC;
		}
		.smnav{
			text-align: left;
			font-size: 16px;
			color: #000000;
			margin-top:35px;
			a{
				color: #000000;
			}
			a:hover{
				color: red;
			}
		}
		.title{
			font-size: 30px;
			color: #000000;
			margin-top: 50px;
			font-weight: 600;
			letter-spacing:3px;
		}
		.author{
			font-size: 16px;
			color: #4E4E4E;
			margin-left: 300px;
			margin-top: 18px;
			.time{
				margin-left: 25px;
			}
		}
		.indp{
			font-size: 16px;
			color: #000000;
			text-align: left;
			text-indent: 40px;
			width: 90%;
			margin: 0 auto;
			line-height: 150%;
			margin-top: 15px;
		}
		
	}
</style>