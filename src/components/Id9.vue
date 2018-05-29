<template>
	<div id="id9">
		<h1>ORDER BY 语句用于对结果集进行排序。</h1>
		<h3>假设我们现在有一个数据为Orders表：</h3>
		<table class="dataintable">
		  <tbody><tr>
		    <th>Company</th>
		    <th>OrderNumber</th>
		  </tr>
		  <tr>
		    <td>IBM</td>
		    <td>3532</td>
		  </tr>
		  <tr>
		    <td>W3School</td>
		    <td>2356</td>
		  </tr>
		  <tr>
		    <td>Apple</td>
		    <td>4698</td>
		  </tr>
		  <tr>
		    <td>W3School</td>
		    <td>6953</td>
		  </tr>
		</tbody></table>
		<p class="line"></p>
		<h1>实例1</h1>
		<h3>以字母顺序显示公司名称：</h3>
		<pre>SELECT Company, OrderNumber FROM Orders <code>ORDER BY Company</code></pre>
		<h1>结果：</h1>
		<table class="dataintable">
		  <tbody><tr>
		    <th>Company</th>
		    <th>OrderNumber</th>
		  </tr>
		  <tr>
		    <td>Apple</td>
		    <td>4698</td>
		  </tr>
		  <tr>
		    <td>IBM</td>
		    <td>3532</td>
		  </tr>
		  <tr>
		    <td>W3School</td>
		    <td>6953</td>
		  </tr>
		  <tr>
		    <td>W3School</td>
		    <td>2356</td>
		  </tr>
		</tbody></table>
		<p class="line"></p>
		<h1>实例2</h1>
		<h3>以字母顺序显示公司名称（Company），并以数字顺序显示顺序号（OrderNumber）：</h3>
		<pre>SELECT Company, OrderNumber FROM Orders <code>ORDER BY Company, OrderNumber</code></pre>
		<h1>结果:</h1>
		<table class="dataintable">
		  <tbody><tr>
		    <th>Company</th>
		    <th>OrderNumber</th>
		  </tr>
		  <tr>
		    <td>Apple</td>
		    <td>4698</td>
		  </tr>
		  <tr>
		    <td>IBM</td>
		    <td>3532</td>
		  </tr>
		  <tr>
		    <td>W3School</td>
		    <td>2356</td>
		  </tr>
		  <tr>
		    <td>W3School</td>
		    <td>6953</td>
		  </tr>
		</tbody></table>
		<p class="line"></p>
		<h1>实例3</h1>
		<h4>以逆字母顺序显示公司名称：</h4>
		<pre>SELECT Company, OrderNumber FROM Orders <code>ORDER BY Company DESC</code></pre>
		<h1>结果：</h1>
		<table class="dataintable">
		  <tbody><tr>
		    <th>Company</th>
		    <th>OrderNumber</th>
		  </tr>
		  <tr>
		    <td>W3School</td>
		    <td>6953</td>
		  </tr>
		  <tr>
		    <td>W3School</td>
		    <td>2356</td>
		  </tr>
		  <tr>
		    <td>IBM</td>
		    <td>3532</td>
		  </tr>
		  <tr>
		    <td>Apple</td>
		    <td>4698</td>
		  </tr>
		</tbody></table>
		<p class="line"></p>
		<h1>实例4</h1>
		<h4>以逆字母顺序显示公司名称，并以数字顺序显示顺序号：</h4>
		<pre>SELECT Company, OrderNumber FROM Orders <code>ORDER BY Company DESC, OrderNumber ASC</code></pre>
		<h1>结果：</h1>
		<table class="dataintable">
		  <tbody><tr>
		    <th>Company</th>
		    <th>OrderNumber</th>
		  </tr>
		  <tr>
		    <td>W3School</td>
		    <td>2356</td>
		  </tr>
		  <tr>
		    <td>W3School</td>
		    <td>6953</td>
		  </tr>
		  <tr>
		    <td>IBM</td>
		    <td>3532</td>
		  </tr>
		  <tr>
		    <td>Apple</td>
		    <td>4698</td>
		  </tr>
		</tbody></table>
		<p class="important"><span>注意：</span>在以上的结果中有两个相等的公司名称 (W3School)。只有这一次，在第一列中有相同的值时，第二列是以升序排列的。如果第一列中有些值为 nulls 时，情况也是这样的。</p>
		<p class="line"></p>
	</div>
</template>

<script>
	export default{
		name:"Id9",
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="scss">
	#id9{
		color: black;
		text-align: left;
		h1{
			font-size: 20px;
			font-weight: 600;
			padding: 5px 0;
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
			width:765px;
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