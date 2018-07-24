<template>
	<div id="id15">
        <h1>首先，我们来说一下如何把web页面通过nodejs挂载到服务器上吧</h1>
        <h2>前端页面如下:</h2>
        <pre>
html:
<code> < div onclick="longPolling()">点击刷新</ div></code>
script:
<code> function longPolling() {
    $.ajax({
        url: "http://192.168.10.141:8088/login",
        data:{},
        dataType: "json",
        type: "get",
        timeout: 20000,//设置为20s后断开连接
        error: function (XMLHttpRequest, textStatus, errorThrown) {//请求失败
            //如果返回错误，根据错误信息进行相应的处理
            //再次发起长连接
            longPolling();
            console.log(errorThrown)
        },
        success: function (data) {//请求成功
           console.log(data)
            setTimeout(function(){
                flag++
                longPolling()
            },1500) ;//刷新成功后发起新的长连接请求
        }
    });
}</code>
        </pre>
        <h2>可以看到前端页面东西都是很简单的一个ajax是为了后面后台服务器做的。可以忽略,文件目录我没整理html页面就是 
            <span class="redfont">index.html</span> node的服务器目录为server文件夹</h2>
        <img src="@/assets/node.png">
        <h3>那么重头戏就来了，如何设置node让我们的网页挂载到本地服务器上呢 文件为server.js。代码如下</h3>
        <pre>
<code>
var http = require('http');
var fs = require('fs');//引入文件读取模块

var documentRoot = 'C:/Users/Administrator/Desktop/echart-demo';
//需要访问的文件的存放目录

var server= http.createServer(function(req,res){

    var url = req.url; 
    //客户端输入的url，例如如果输入localhost:8888/index.html
    //那么这里的url == /index.html 

    var file = documentRoot + url;
    console.log(url);
    fs.readFile( file , function(err,data){
    /*
        一参为文件路径
        二参为回调函数
            回调函数的一参为读取错误返回的信息，返回空就没有错误
            二参为读取成功返回的文本内容
    */
        if(err){
            res.writeHeader(404,{
                'content-type' : 'text/html;charset="utf-8"'
            });
            res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
            res.end();
        }else{
            res.writeHeader(200,{
                'content-type' : 'text/html;charset="utf-8"'
            });
            res.write(data);//将index.html显示在客户端
            res.end();

        }

    });



}).listen(8888);

console.log('服务器开启成功');
</code>
        </pre>
        <h3>上面代码可以看见。我们是把<span class="redfont">C:/Users/Administrator/Desktop/echart-demo</span>作为文件根目录传入参数，这样我们的index自然就可以通过localhost:8888端口去访问，node启动结果为</h3>
        <img src="@/assets/node2.png">
        <h3>这样我们就已经把网页挂在上去了</h3>
        <h1>接下来，我们将要搭建一个node后台服务器给我们的前端ajax访问。我们创建文件 index.js 如下</h1>
        <pre>
<code>
var express = require('express'); //获取express构造函数
var querystring = require("querystring");
var bodyParser = require('body-parser'); //作为express的插件

var app = express(); 

app.use(bodyParser.json()) //告诉express你使用了插件
app.use(bodyParser.urlencoded({extended: true})) //处理通过表单提交的数据，放到req对象上面去了

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Content-Type,Authorization,Origin,
        Access-Control-Allow-Headers,
        Accept,Accept-Encoding,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
 

app.get('/login',function(req,res){
    res.json({
       code:1,
       msg:[{"name":"天正","value":555},
            {"name":"宏达","value":355},
            {"name":"万恩","value":233},
            {"name":"腾飞","value":554},]
    })
})

app.post('/login',function(req,res){
    
})

app.listen(8088,function(){
    console.log("创建成功！")
})
</code>
        </pre>
        <h3>就像代码中一样。我们使用 <span class="redfont">express 和 body-parser 插件</span>
            给了一个为 <span class="redfont">/login</span>的get接口. <br>
            <span class="redfont">注意：我们这个地方的接口，在html页面中需要写全本地ip地址+端口+接口，就像我们的html 文件中的： url: "http://192.168.10.141:8088/login", 一样，不能使用localhost </span>
        </h3>
        <h2>我们启动node 后效果如下</h2>
        <img src="@/assets/node3.png">
        <h2>我们就可以通过访问localhost:8888/index.html 点击发起ajax事件。向我们的后台发起请求获取到我们所返回的指定数据啦</h2>
	</div>
</template>

<script>
	export default{
		name:"Id15",
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="scss">
	#id15{
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