<template>
	<div id="id13">
		<h1>第一种方式：通过import 去引入外部js</h1>
		<h3>大家肯定都知道我们可以通过<span class="red">import</span> ... <span class="red">form</span> "......";去引入一些外部的js。那么重点在我们的js文件需要怎么去编写。以下有俩种方式去编写；</h3>
		<h3>第一种方法：  列test.js文件如下</h3>
		<pre>
<span style="color: #008000">//</span><span style="color: #008000">常量的定义</span>
<span style="color: #000000">
const config </span>=<span style="color: #000000"> {
  baseurl:</span>'http://172.16.114.5:8088/MGT2'<span style="color: #000000">
}

</span><span style="color: #008000">//</span><span style="color: #008000">函数的定义</span>

<span style="color: #0000ff">function</span><span style="color: #000000"> formatXml(text) {
　　</span><span style="color: #0000ff">return</span><span style="color: #000000"> text
}

</span><span style="color: #008000">//</span><span style="color: #008000">导出 {常量名、函数名}</span>
export {config,formatXml}
	</pre><br />
		<h3>第二种方法：列test.js文件如下</h3>
		<pre>
<span style="color: #008000">//</span><span style="color: #008000">常量的定义</span>
<span style="color: #000000">
export const config </span>=<span style="color: #000000"> {
  baseurl:</span>'http://172.16.114.5:8088/MGT2'<span style="color: #000000">
}

</span><span style="color: #008000">//</span><span style="color: #008000">函数的定义</span>
<span style="color: #000000">
export </span><span style="color: #0000ff">function</span><span style="color: #000000"> formatXml(text) {
　　</span><span style="color: #0000ff">return</span><span style="color: #000000"> text
}</span>
		</pre>
		<h3>通过以上的test.js编写我们即可在我们需要的地方通过<span class="red">import</span>去引入文件了。操作如下</h3>
		<pre>  
import {config,formatXml} from '../config'<span style="color: #008000">//</span><span style="color: #008000">记得带上{}花括号</span>
		</pre>
		<h3><span class="red">注意：require / exports 和   import / export 都可以通过以上的操作去引入，只是写法稍微不一样而已。</span></h3>
		<h1>第二种方法：也是最简单粗暴的办法，如果你只是单纯的想要引入这个js，js会自动去运行的话。</h1>
		<h3>你只需要在你的 <span class="red">index.html</span>文件中直接引入js方法即可</h3>
	</div>
</template>

<script>
	export default{
		name:"Id13",
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="scss">
	#id13{
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