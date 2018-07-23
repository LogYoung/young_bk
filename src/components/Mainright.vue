<template>
	<div id="mainright">
		<div class="search">
			<input type="search" name="" id="" placeholder="全站搜索" />
			<span class="icon"></span>
		</div>
		<div class="tx">
			<img src="@/assets/bbtx.jpg"/>
		</div>
		<div class="text">
			<p class="title">学无止境，学海无涯</p>
		</div>
		<div class="fl">
			<p class="title">文章分类：</p>
			<ul class="list">
				<li   :style="{height:fsheight}">
					<span @click="handlrightnav">▶ 笔记</span>
					<ul class="smul">
						<li  v-for="(data,index) in listdata"  :key="index">
							<rightsmlist :listdata="data" ></rightsmlist>
						</li>
					</ul>
				</li>
				<li>
					<span >▶ 杂谈</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Rightsmlist from "@/components/Rightsmlist"
	
	export default{
		name:"Mainright",
		beforeMount(){
			this.$axios.get("../static/json/Nbooklist.json").then((res) => {
				 if(res.status !== 200){
				 	 this.errinfo="数据请求错误，请尝试从新加载页面"
				 }else{
				 	this.listdata=res.data
				 	var objectArraySort = function (keyName) {
			 		  return function (objectN, objectM) {
						  var valueN = objectN[keyName] 
						  var valueM = objectM[keyName] 
						  if (valueN < valueM) return 1 //从大到小排序
						  else if (valueN > valueM) return -1
						  else return 0
					 	}
					}
					this.listdata.sort(objectArraySort('id'))
				 	this.liheight=(res.data.length+1)*25+25+"px"
				 }
			})
		},
		data(){
			return{
				listdata:"",
				idx:'',
				fsheight:"25px",
				liheight:"",
				anclass:"",
				info:{
					path:'/nbook/nbooktext',
					query:{data:""}
				}
			}
		},
		methods:{
			handlrightnav(){
				if(this.fsheight == "25px"){
					this.fsheight=this.liheight
				}else{
					this.fsheight="25px"
				}
			}
		},
		components:{
			Rightsmlist
		}
	}
</script>

<style lang="scss">
	#mainright{
		width: 600px;
		border-left: 2px solid #000000;
		.search{
			display:flex;
			margin:0 auto;
			margin-top:50px;
			width:340px;
			input{
				width: 300px;
				height: 40px;
				font-size: 19px;
				border:none;
				outline:none;
				border: 1px solid #97928a;
				padding-left: 10px;
			}
			span{
				width: 40px;
				height: 40px;
				display: block;
				background: url("../assets/search.jpg")no-repeat center center;
				background-size: 100%;
				margin-left: 5px;
			}
			
		}
		.tx{
			margin: 0 auto;
			width: 400px;
			height: 400px;
			margin-top: 25px;
			border: 1px solid #000000;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.text{
			margin: 0 auto;
			margin-top: 50px;
			font-size: 22px;
			.title{
				-webkit-mask-image: linear-gradient(to right, red, orange, yellow, green, cyan, blue, purple); 
			    background-image: linear-gradient(to right, red, orange, yellow, green, yellow, orange, red, orange, yellow, green, yellow, orange, red);
			    -webkit-background-clip: text;
			    -webkit-text-fill-color: transparent;
			    -webkit-background-size: 200% 100%;
			    animation: bgp 5s infinite linear;
			}
		}
		.fl{
			width: 100%;
			margin-top: 25px;
			.title{
				font-size: 18px;
				text-align: left;
				margin-left: 20px;
			}
			.title:hover{
				color: red;
			}
			.list{
				width: 90%;
				margin: 0 auto;
				display: flex;
				justify-content: space-around;
				flex-wrap: wrap;
				>li span:hover{
					color: red;
				}
				>li{
					width: 45%;
					margin-top: 25px;
					text-align: left;
					height: 25px;
					overflow: hidden;
					transition:height 1s;
					-moz-transition:height 1s; /* Firefox 4 */
					-webkit-transition:height 1s; /* Safari and Chrome */
					-o-transition:height 1s; /* Opera */
					ul{
						font-size: 12px;
						margin-left: 25px;
						li{
							margin-top:2px;
						}
						li:hover a{
							color: red;
						}
					}
				}
				a {
				    color: #666;
				    text-decoration: none;
				    outline: 0;
				    text-align: left;
				    display: block;
				}
			}
		}
	}
	
	/*动画*/
	@keyframes bgp{
		0% {
		    background-position: 0 0;
		}
		100% {
		    background-position: -100% 0;
		}
	}
	@keyframes smnav{
		0% {
		    height: 25px;
		}
		100% {
		    height: 185px;
		}
	}
</style>