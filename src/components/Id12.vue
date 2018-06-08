<template>
	<div id="id12">
		<h1>1、web Storage</h1>
		<h3> web Storage 是HTML 5引入的一个重要的功能，在前端开发的过程中会经常用到，它可以在客户端本地存储数据，类似cookie，但其功能却比cookie强大的多。cookie的大小只有4Kb左右（浏览器不同，大小也不同），而web Storage的大小有5MB。其API提供的方法有以下几种：</h3>
		<pre>
        setItem (key, value) ——  保存数据，以键值对的方式储存信息。

        getItem (key) ——  获取数据，将键值传入，即可获取到对应的value值。

        removeItem (key) ——  删除单个数据，根据键值移除对应的信息。

        clear () ——  删除所有的数据

        key (index) —— 获取某个索引的key
		</pre>
		<h1>2、localStorage</h1>
		<h3> localStorage的生命周期是永久性的。假若使用localStorage存储数据，即使关闭浏览器，也不会让数据消失，除非主动的去删除数据，使用的方法如上所示。localStorage有length属性，可以查看其有多少条记录的数据。使用方法如下：</h3>
		<pre>
var storage = null;  
    if(window.localStorage){              //判断浏览器是否支持localStorage  
       storage = window.localStorage;       
       storage.setItem("name", "Rick");    //调用setItem方法，存储数据  
       alert(storage.getItem("name"));     //调用getItem方法，弹框显示 name 为 Rick  
       storage.removeItem("name");     //调用removeItem方法，移除数据  
       alert(storage.getItem("name"));   //调用getItem方法，弹框显示 name 为 null  
  
    }  
		</pre>
		<h3>localStorage 相对sessionStorage简单一点，需要注意的地方不是很多。</h3>
		<h1>3、sessionStorage</h1>
		<h3>sessionStorage 的生命周期是在浏览器关闭前。也就是说，在整个浏览器未关闭前，其数据一直都是存在的。sessionStorage也有length属性，其基本的判断和使用方法和localStorage的使用是一致的。需要注意的有以下几点：</h3>
		<h2><1>页面刷新不会消除数据</h2>
		<h2><2>只有在当前页面打开的链接，才可以访sessionStorage的数据</h2>
		<h2><3>使用window.open打开页面和改变localtion.href方式都可以获取到sessionStorage内部的数据</h2>
		<h1>最后做一个cookie和session的区别吧</h1>
		<pre>
cookie 和session 的区别：
1、cookie数据存放在客户的浏览器上，session数据放在服务器上。
2、cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗考虑到安全应当使用session。
3、session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的资源。考虑到减轻服务器负担，应当使用COOKIE。
4、单个cookie在客户端的限制是3K，就是说一个站点在客户端存放的COOKIE不能超过3K。
5、所以，将登陆信息等重要信息存放为SESSION，其他信息如果需要保留，可以放在COOKIE中。
		</pre>
	</div>
</template>

<script>
	export default{
		name:"Id12",
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="scss">
	#id12{
		color: black;
		text-align: left;
		a{
			color: red;
		}
		h1{
			font-size: 20px;
			font-weight: 600;
			padding: 5px 0;
		}
		h2{
			text-indent: 32px;
		}
		.line{
			width: 90%;
			height: 1px;
			border-bottom: 1px solid #CCCCCC;
			margin-bottom: 15px;
		}
		.important{
			
			margin-bottom: 15px;
		}
		.important span{
			color: red;
		}
		table.dataintable {
			margin-top:15px;
			border-collapse:collapse;
			border:1px solid #aaa;
			margin-bottom: 25px;
			width:60%;
			}
		
		table.dataintable th {
			vertical-align:baseline;
			padding:5px 15px 5px 6px;
			background-color:#3F3F3F;
			border:1px solid #3F3F3F;
			text-align:left;
			color:#fff;
			}
		
		table.dataintable td {
			vertical-align:text-top;
			padding:6px 15px 6px 6px;
			border:1px solid #aaa;
			}
		
		table.dataintable tr:nth-child(odd) {
			background-color:#F5F5F5;
		}
		
		table.dataintable tr:nth-child(even) {
			background-color:#fff;
		}
		
		table.dataintable pre {
			width:auto;
			margin:0;
			padding:0;
			border:0;
			background-color:transparent;
			}
		
		table.dataintable p {margin:0 0 2px 0;}
		
		div#maincontent table.dataintable ul, div#maincontent table.dataintable li {
			list-style-type:none;
			margin:0;
			padding:0;
			}
		
		table.dataintable td em
				{
				color:#0000ff;
				font-weight:normal;
				}
			
		table.dataintable .table_value {color:#0F93D2;}
		
		.no_wrap {white-space:nowrap;}
		
		div#maincontent table.dataintable ul.listintable {
			margin:20px;
			padding:0;
			}
		
		div#maincontent table.dataintable ul.listintable  li{
			list-style-type:disc;
			}
		
		
		table.dataintable td.html5_new {
			background: transparent url(/ui2017/table_bg_html5.png) top right no-repeat;
			}
		
		tr.notsupported {
			color:#999999;
			}
		pre	{
			width:90%;
			margin: 15px 0 0 0;
			padding: 20px;
			border: 0;
			border: 1px dotted #785;
			background: #f5f5f5;
			line-height:1.4;
			font-family:Consolas;
			}
		
		pre code {
			color:#0000dd;
			}
		
		pre span {
			color:#999;
			}
		
		pre span.code_comment {
			color:#999;
			}
		
		blockquote
			{
				margin:15px;
			}


	}
</style>