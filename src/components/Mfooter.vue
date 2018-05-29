<template>
	<div id="mfooter">
		<div class="ewm">
			<div class="wx" @mouseenter="wxshowimg" @mouseleave="wxhideimg">
				<img src="@/assets/wx.png"/>
				<span>微信二维码</span>
				<div class="bgimg" v-show="wxbgimg">
					<img src="@/assets/wx.png"/>
				</div>
			</div>
			<div class="qq" @mouseenter="qqshowimg" @mouseleave="qqhideimg">
				<img src="@/assets/qq.jpg"/>
				<span>QQ二维码</span>
				<div class="bgimg" v-show="qqbgimg">
					<img src="@/assets/qq.jpg"/>
				</div>
			</div>
		</div>
		<div class="info">
			<p class="h1">本网站由：{{footertext}}</p>
			<p class="h1">网站版权归<span>young</span>所有</p>
		</div>
	</div>
</template>

<script>
	export default {
		name:"Mfooter",
		data(){
			return {
				footertext:"打不死的肥宅，和修不完的bug 提供",
				wxbgimg:false,
				qqbgimg:false
			}
		},
		methods:{
			wxshowimg(e){
				this.wxbgimg=true
			},
			wxhideimg(e){
				this.wxbgimg=false
			},
			qqshowimg(e){
				this.qqbgimg=true
			},
			qqhideimg(e){
				this.qqbgimg=false
			}
			
		}
	}
</script>

<style lang="scss">
	$background:#FFFFF;
	#mfooter{
		width: 100%;
		height: 100px;
		background: $background;
		padding-top: 10px ;
		border-top:2px solid #000000;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.info{
			width: 800px;
			margin: 0 auto;
			color: #000000;
			p{
				span{
					color: red;
				}
			}
		}
		.ewm{
			width: 265px;
			height:120px;
			display: flex;
			justify-content: space-around;
			.wx,.qq{
				width: 100px;
				height: 120px;
				position: relative;
				.bgimg{
					position: absolute;
					top: -200px;
					left: 0;
					img{
						width: 200px;
						height: 200px;
					}
				}
				img{
					width: 100px;
					height: 100px;
				}
				span{
					display: block;
					width: 100px;
					height: 20px;
					text-align: center;
					font-size: 16px;
					margin-top: -5px;
				}
			}
		}
	}
</style>