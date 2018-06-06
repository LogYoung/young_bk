<template>
	<div id="id11">
		<h1>既然说到了跨域问题,那么我们就来聊聊什么叫做跨域？什么时候需要跨域？</h1>
		<h2>跨域：当我们所访问的域名连接：</h2>
		<h2>如：http// (协议) + www.(子域名) + baidu:(主域名) + 8080 (端口)  </h2>
		<h2>当协议，域名，端口其中任意一项不相同时候，就存在跨域。这也是浏览器默认的同源策略.</h2>
		<h2>从而可以看出，当我们页面繁多的时候，不可避免会触及到ajax跨域等问题。</h2>
		<h3>当然，跨域的方式也有很多种下面我们就列举几种常用的跨域方式.</h3>
		<h1>(一) Script 标签 JSONP 跨域</h1>
		<h2>浏览器的"同源策略"，只是阻止了通过ajax技术跨域获取资源，而并没有禁止跨域获取资源这件事本身。那么，我们就可以通过这个的基础来转而使用<b>< link ></b>标签，
		<b>< img ></b>标签以及<b>< script ></b>标签中的<span class="redfont"> href </span>或者是<span class="redfont"> src </span>属性去获取异域的css，js资源和图片.</h2>
		<h3><b>< script ></b>标签获取js文件的原理其实很简单，他就相当于，把我们获取到的js代码，直接放置在我们当前页面中一样。</h3>
		<pre>
如：
//我们引入了一个a.js文件，a.js文件内容如下
console.log(a.js)

//当我们的浏览器加载运行到这个a.js的时候就相当于.
页面：
< script src="a.js">
	console.log(a.js)
</ script>
		</pre>
		<h2>既然都是在同一个页面上放置，那么意味着，他也共享同一个全局作用域。也就意味着<b>< script ></b>标签加载到的资源是可以被全局作用域下的函数所使用的!</h2>
		<h2>那么JSONP 就随即诞生而出了，我们规定script标签所获取，传递的数据为JSON格式，那么我们需要吧我们获取到的数据存在一个变量或者一个函数当中。</h2>
		<pre>
例子:
1.    function handleResponse(response) {
2.        alert(`You get the data : ${response}`)
3.    }
4.    const script = document.createElement('script')
5.    script.src = 'http://somesite.com/json/?callback=handleResponse'
6.    document.body.insertBefore(script, document.body.firstChild)
		</pre>
		<h3>上面的例子中，我们可以看到，我们创建了一个script标签，设定了标签的src,我们又设定了一个 ,<b>handleResponse</b>函数,函数中第一个参数是<span class="redfont">response</span>
,我们的src连接<span class="redfont">'http://somesite.com/json/?callback=handleResponse'</span>我们设定了一个callback=handleResponse,相信大家看到这里都能明白了，
			通过设定callback命名为我们需要的函数名。再通过函数的 response ，我们就可以拿到我们script标签所拿到的json资源啦。这就是我们的jsonp 跨域获取资源。
		</h3>
		<pre>
JSPNP:
1.JSONP技术与AJAX技术无关：虽然同样牵扯到跨域获取资源这个主题，但我们应该已经清楚的看到，
	JSONP的本质是绕过AJAX获取资源的机制，使用原始的src属性获取异域资源；
2.JSONP技术存在一下三点缺陷：
	(1).无法发送POST请求，也就是说JSONP技术只能用于请求异域资源，
		无法上传数据或修改异域数据；
	(2).无法监测JSONP请求是否失败；
	(3).可能存在安全隐患：别忘了，JSONP之所以能成功获取异域服务器资源，
		靠的是服务器动态生成了回调函数，并在页面中执行，那么如果服务器
		在原有的回调函数下再添加些别的恶意JavaScript代码会怎样？当然也
		会被执行！所以在使用JSONP技术时，一定要确保请求资源的服务器是值
		得信赖的；
		</pre>
		<h1>(二) 官方推荐的跨域资源共享方案：CORS</h1>
		<h2>CORS是W3C颁布的一个浏览器技术规范，其全称为“跨域资源共享”（Cross-origin resource sharing），它的意义在于，它是由W3C官方推广的允许通过AJAX技术跨域获取资源的规范，因此相较于JSONP而言，功能更加强大，使用起来也没有了hack的味道。</h2>
		<h2>关于CORS的具体细节，我建议你可以移步<a href="http://www.ruanyifeng.com/blog/2016/04/cors.html">阮一峰的同主题博客阅读</a>，我认为该文章已经将这个主题讲解的十分透彻了。</h2>
		<h2>CORS的东西我也就不说太多了，在阮大大的博客中写的已经很详细了，我个人对于这个的理解就是，通过nodejs给浏览器设置一个请求头，ajax受同源策略的根本原因也就是当你在跨域访问时，浏览器会问你要一个请求头，如果你返回数据中没有请求头，那么浏览器将会阻止你的跨域请求.我们通过nodejs配置文件设置访问请求头，就能解决这个最根本的原因</h2>
		<h2>那么。我们在平时工作中总不能随时都去配置一个nodejs吧。所以，我这里从github上找到了一个cors的插件，我们可以通过这个老哥自己配置的node去做到一个跨域，不过缺点也是蛮明显的，访问速度是个问题，而且稳定性可能不能保证.根据自己需求去决定使用把。
		<a href="https://github.com/Rob--W/cors-anywhere">github链接在此</a>,
		也可以直接这样使用.
		</h2>
		<pre>
列子：
CORS Anywhere
CORS Anywhere是一个Node.js的代理它增加了CORS标头的代理请求。
要使用API，只是前缀与API网址的URL。（支持HTTPS：见GitHub的库）
如果你想在需要时自动启用跨域请求，使用下面的代码片段：

$.ajaxPrefilter( function (options) {
  if (options.crossDomain && jQuery.support.cors) {
    var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
    options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
    //options.url = "http://cors.corsproxy.io/url=" + options.url;
  }
});
配置好上面的代码后，直接使用$.get等就可以进行跨域访问了
$.get(
    'http://en.wikipedia.org/wiki/Cross-origin_resource_sharing',
    function (response) {
        console.log("> ", response);
        $("#viewer").html(response);
});
		</pre>
		<h2>这个代理我们当然也可以自己在本地服务器上进行启动这样，就不用怕访问别人的服务器会出现问题。首先在github上下载<b>cors-anywhere-master</b>项目下来，
	打开项目中的server文件，</h2>
	<pre>
接下来我们可以看到抬头的俩个变量代码
var host = process.env.HOST || '192.168.0.6';   //输入我们需要作为服务器的主机ip

var port = process.env.PORT || 8099;   //需要作为服务器的主机端口

可以像我这样去填写好自己的服务器ip和想要使用的端口，
填写之后node server 启动服务器。这样你的服务器已经启动起来了，
我们就可以直接连接到服务器上进行一个中转跨域的操作了。
上面的代码就应该写成
$.ajaxPrefilter( function (options) {
  if (options.crossDomain && jQuery.support.cors) {
    var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
    options.url = http + '//192.168.0.6:8099/' + options.url;
    //  填写上自己设置的服务器地址后，就可以完美运行了
  }
});
配置好上面的代码后，直接使用$.get等就可以进行跨域访问了
$.get(
    'http://en.wikipedia.org/wiki/Cross-origin_resource_sharing',
    function (response) {
        console.log("> ", response);
        $("#viewer").html(response);
});
	</pre>
		
	</div>
</template>

<script>
	export default{
		name:"Id11",
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="scss">
	#id11{
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