<template>
	<div class="id2">
		<p class="text">事情是这样的，我今天在做项目的时候发现一个问题。我需要更具一个路由跳转来判断我页面的某个区域的内容是否要显示。一开始我是使用vue的生命钩子函数去做的，可是效果不是让我很满意。大大小小有一些bug。于是乎我开始用路由的钩子函数去做。</p>
		<p class="text">经过一番尝试之后，我发现使用 <span class="redfont">beforeRouteUpdate</span> 函数即可在我点击跳转路由的时候切换 <span class="redfont"> router-view </span>的时候进行我们所需要的各种判断，从而修改<span class="redfont">data</span> 内部的数据去做到一个页面功能实现</p>
		<img src="@/assets/router.png" class="img" alt="" />
		<p class="text">代码如上，通过<span class="redfont">beforeRouteUpdate</span>函数判断我所跳转的也面是否为 "/nbook" 如果是的话就吧我们所设置的 <span class="redfont">datafalg</span>
			设置为true ，从而通过 <span class="redfont">V-show</span>或者<span class="redfont">v-if</span>去控制区域内容是否显示。这样操作起来就极其的简单了。
		</p>
		<p class="text">就像我在查阅资料时候看见的一位老哥所整理的一样：</p>
		<img src="@/assets/router2.png" class="img" alt="" />
		<p class="text">上面的代码非常清晰的解释了vue 路由钩子函数的详细介绍。</p>
		<p class="test">他有三个参数：</p>
		<p class="text"><span class="redfont">* to: (Route路由对象)</span> 即将要进入的目标 路由对象       to对象下面的属性： path   params  query   hash   fullPath    matched   name    meta（在matched下，但是本例可以直接用）</p>
		<p class="text"><span class="redfont">* from: (Route路由对象)</span>当前导航正要离开的路由，也就是当前的页面路由</p>
		<p class="text"><span class="redfont">* next: (Function函数)</span>一定要调用该方法来 resolve 这个钩子。  调用方法：next(参数或者空)   ***必须调用 ,这个参数也是必须要的不然将不会进行路由的跳转</p>
		<p class="text">让我们在控制台分别打印来看一下这三个参数到底是什么?</p>
		<p> to : </p>
		<img src="@/assets/router.to.png" class="img" alt="" />
		<p> form : </p>
		<img src="@/assets/router.from.png" class="img" alt="" />
		<p> next : </p>
		<img src="@/assets/router.next.png" class="img" alt="" />
		<p class="text">从上图我们不难看出，我们是从 <span class="redfont">"/nbook/nbooktext"</span>页面跳转到到<span class="redfont">"/nbook"</span>页面</p>
	</div>
</template>

<script>
	export default{
		name:"Id2",
		data(){
			return{
				message:"{{ message }}"
			}
		}
	}
</script>

<style lang="scss">
	.id2{
		width: 90%;
		text-align: left;
		margin: 0 auto;
		.h1{
			font-size: 24px;
			color: #000000;
			text-align: left;
		}
		.img{
			display: block;
			margin: 0 auto;
			max-width: 100%;
			margin-top: 10px;
		}
		.text{
			font-size: 18px;
			text-align: left;
			margin-top: 15px;
		}
		blockquote {
		    border-left: 2px solid #009A61;
		    background: #F6F6F6;
		    color: #555;
		    font-size: 1em;
		    padding: 10px 20px;
		    margin: 1.5em 0;
		    code {
			    padding: 2px 4px;
			    font-size: 90%;
			    color: #c7254e;
			    background-color: #f9f2f4;
			    border-radius: 4px;
			}
			p{
				 margin: 1.5em 0;
			}
		}
		pre{
				text-align: left;
				padding: 1em;
				border: 1px solid #ccc;
			    overflow: auto;
			    line-height: 1.45;
			    max-height: 35em;
			    position: relative;
			 	word-break: break-all;
			    word-wrap: break-word;
			    color: #333;
			    border-radius: 5px;
			    margin: 1.5em 0;
			    display: block;
			    code{
			    	 color: #333;
			    	 text-align: left;
			    }
			}
			.hljs-string, .hljs-doctag {
			    color: #d14;
			}
			.hljs-number, .hljs-literal, .hljs-variable, .hljs-template-variable, .hljs-tag .hljs-attr {
	   			 color: #008080;
	    	}
	    	.hljs-built_in, .hljs-builtin-name {
			    color: #0086b3;
			}
	}
</style>