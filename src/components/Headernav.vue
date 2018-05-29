<template>
	<div id="headernav"   >
		<img src="@/assets/young.jpg" class="navlogo" alt="" />
		<ul>
			<li>
				 <router-link to="/"><span>首页</span><span>Index</span></router-link>
			</li>
			<li>
				<router-link to="/nbook"><span>笔记</span><span>Nbook</span></router-link>
			</li>
			<li>
				<router-link to="/talk"><span>杂谈</span><span>Talk</span></router-link>
			</li>
			<li>
				<router-link to="/myself"><span>个人</span><span>Myself</span></router-link>
			</li>
		</ul>
		<div class="logo">
			<img src="@/assets/tx.png"/>
			<div class="nameAndqq">
				<p class="name">{{name}}</p>
				<p class="qq">QQ:{{QQ}}</p>
			</div>
		</div>
		<div id="scrollnav" :class="scrollflag">
			<ul>
				<li>
					 <router-link to="/"><span>首页</span></router-link>
				</li>
				<li>
					<router-link to="/nbook"><span>笔记</span></router-link>
				</li>
				<li>
					<router-link to="/talk"><span>杂谈</span></router-link>
				</li>
				<li>
					<router-link to="/myself"><span>个人</span></router-link>
				</li>
			</ul>
			<div class="backtop" >
				<a href="#headernav">
					<img src="@/assets/back.png" class="icon" alt="" />
					<p>返回顶部</p>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"Headernav",
		mounted () {
	      window.addEventListener('scroll', this.handleScroll)
	   },
		data(){
			return {
				name:"杨佳鑫",
				QQ:"944925883",
				scrollflag:"fistScroll"
			}
		},
		methods:{
			handleScroll(e){
				var sc=0
				if(window.scrollY >= 50){
					sc=window.scrollY
					this.scrollflag="handleScroll"
				}
				if(window.scrollY <50 && [sc-window.scrollY]>=0){
					this.scrollflag="reScroll"
				}
			}
		}
	}
</script>

<style lang="scss">
	#scrollnav{
		width: 100%;
		height: 40px;
		position: fixed;
		top: 0;
		left: 0;
		background:#BCD3F5;
		animation-fill-mode:forwards;
		z-index: 999;
		ul{
			height: 40px !important;
			li{
				width: 125px;
				border-right: 1px solid #000000;
			}
		}
		.backtop{
			position: fixed;
			right: 5px;
			bottom: 150px;
			img{
				width: 40px;
				height: 40px;
			}
		}
	}
	.handleScroll{
		animation:navshow 1s 1;
	}
	.reScroll{
		animation:resshow 1s 1;
	}
	.fistScroll{
		display: none;
	}
	#headernav{
		width: 100%;
		height: 60px;
		border-top: 3px solid #8BA7E3;
		background: #BCD3F5;
		.navlogo{
			float: left;
			width: 65px;
			height: 64px;
			margin-left: 2%;
			margin-top: -4px;
		}
		.logo{
			float: right;
			overflow: hidden;
			margin-top: 4px;
			display: flex;
			margin-right: 5%;
			img{
				border: 1px solid #FFFFFF;
				border-radius: 100%;
				width: 50px;
				height: 50px;
			}
			.nameAndqq{
				font-size: 14px;
				text-align: left;
				margin-left: 10px;
				margin-top: 5px;
				.qq{
					margin-top: 5px;
				}
			}
		}
		ul{
			float: left;
			font-size: 18px;
			margin-left: 2%;
			width: 500px;
			display: flex;
			justify-content: space-around;
			align-items: center;
			height: 60px;
			li{
				a{
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					span:nth-child(2){
						font-size: 14px;
						color: #97928a;
					}
					
				}
			}
		}
	}
	
	
	
	/*动画*/
	@keyframes navshow{
		from{opacity: 0;}
		to{opacity: 1;visibility: inherit;}
	}
	@keyframes resshow{
		from{opacity: 1;}
		to{opacity: 0;visibility: hidden;}
	}
</style>