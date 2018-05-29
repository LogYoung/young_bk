<template>
		<div>
			<router-link :to="info" >
				<div id="Nbooklist" :data-value="this.listdata.textdata.id">
					<p class="img"><img :src="this.listdata.imgSrc" alt="" /></p>
					<div>
						<p class="title">{{this.listdata.title}}</p>
						<p class="h1">{{this.listdata.p}}</p>
						<p class="time">{{this.listdata.time}}</p>
					</div>
				</div>
			</router-link>
		</div>
</template>
<script>
	export default{
		name:"Nbooklist",
		props:["listdata"],
		data(){
			return{
				info:{
					path:'/nbook/nbooktext',
					query:{data:this.listdata.textdata.id}
				}
				
			}
		},
	}
</script>

<style lang="scss">
 #Nbooklist{
 	width: 90%;
 	display: flex;
 	margin: 0 auto;
 	margin-top: 35px;
 	position: relative;
 	.img{
 		width: 200px;
 		img{
 			width: 200px;
 		}
 	}
 	>div{
 		margin-left: 25px;
 		.title{
 			font-size: 22px;
 			color:#000000;
 			text-align: left;
 		}
 		.h1{
 			font-size: 18px;
 			text-align: left;
 			line-height: 150%;
 			margin-top: 25px;
 		}
 		.time{
 			font-size: 14px;
 			color: #4E4E4E;
 			text-align: right;
 			position: absolute;
 			bottom: 0;
 			right: 0;
 		}
 	}
 }
</style>