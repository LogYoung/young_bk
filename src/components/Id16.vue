<template>
	<div id="id16">
        <h1>在上一篇文章中，我们有详细的介绍如何把本地文件挂载到局域网当中，以及如何去做ajax访问和返回。那么我们今天就不做多余的废话去重复哪些内容我们今天主要要说的是如何设置多个文件目录为项目的更目录这样就能做到直接通过我们svn上的目录格式去启动我们的项目，从而和后端一起同步调试</h1>
        <h2>server.js文件内容如下:</h2>
        <pre>
<code>都知道我们的正常文件启动的时候代码可以如，</code>
let express = require("express");
let app = express();
 
app.use(express.static("html"));//关键是这一句，我的目录是html的目录
 
app.listen(8888, ()=>{
    console.log("服务启动成功。");
})
<code>这样我们就指定了当前server.js 同级的文件夹html为项目根目录，显然这些方式肯定是不符合我们的需求</code>
<code>其实方法也是非常的简单，如下</code>
var express = require('express');
var path = require('path');
var app = express();

var projectPath = "C:\\Users\\Administrator\\Desktop\\新建文件夹 (4)\\src\\main\\resources";
app.use(express.static(path.join(projectPath, 'static')));
app.use(express.static(path.join(projectPath, 'views')));

app.listen(8077,function(){
	console.log("启动成功，端口号8077");
});
<code>通过 projectPath 
我们可以保存我们svn中存放外部资源js，css等文件的目录和html页面目录的同一父级目录</code>
<code>再通过 app.use(express.static(path.join(projectPath, 'static'))); 
指向我们的文件根目录,有几个就可以直接指向几个。也是非常的方便实用了。</code>
        </pre>
        <br>
    	<p>好了，我们今天的内容不是很多，但是是我在项目中实际遇到的。也简单的记录一下方便以后参考</p>
    </div>
</template>

<script>
	export default{
		name:"Id16",
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="scss">
	#id16{
		color: black;
		text-align: left;
		a{
			color: red;
		}
		a:hover{
			text-decoration:underline;
		}
		h1{
			font-size: 20px;
			font-weight: 600;
			padding: 5px 0;
		}
		h3{
			color: #255
		}
		h4 {
			span{
				font-size: 16px;
				font-weight:600;
				color: red
			}
		}
		.red{
			color: red !important;
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