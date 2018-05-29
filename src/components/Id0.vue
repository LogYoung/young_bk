<template>
	<div class="id0">
				<p class="h1">1.用<span class="redfont">vue-cli</span>脚手架工具创建一个基于webpack的Vue项目</p>
			<p>前提：安装node环境</p>
			<p>首先全局安装： <code>npm install -g vue-cli</code>,然后创建一个项目文件夹，进入项目目录执行：
				<code>vue init webpack my-project</code>(my-project是项目名)。安装完成之后可以执行 <code>npm install</code> 安装依赖，执行 
				<code>npm run dev</code>进行开发时调试。
			</p>
			<p>安装 <code>vue-resource</code>依赖,一种安装方式先在package.json中对应地方添加，然后执行<code>npm install</code></p>
<pre>
<code class="json">
<span class="hljs-string">"dependencies"</span>: {
    <span class="hljs-attr">"vue"</span>: <span class="hljs-string">"^2.1.0"</span>,
    <span class="hljs-attr">"vue-router"</span>: <span class="hljs-string">"^2.0.3"</span>,
    <span class="hljs-attr">"vue-resource"</span>: <span class="hljs-string">"^1.0.3"</span>
  },
</code>
</pre>
			<p class="h1">2.添加Express服务端目录。</p>
			<p>前提：电脑安装mysql数据库</p>
			<p>在项目根文件夹下创建一个server文件夹。然后里面创建下面三个文件：</p>
			<p>db.js----用来添加mysql配置</p>
<pre><code class="javascript"><span class="hljs-comment">// 数据库连接配置</span>
<span class="hljs-built_in">module</span>.exports = {
    <span class="hljs-attr">mysql</span>: {
        <span class="hljs-attr">host</span>: <span class="hljs-string">'localhost'</span>,
        <span class="hljs-attr">user</span>: <span class="hljs-string">'root'</span>,
        <span class="hljs-attr">password</span>: <span class="hljs-string">''</span>,
        <span class="hljs-attr">database</span>: <span class="hljs-string">'test'</span>,
        <span class="hljs-attr">port</span>: <span class="hljs-string">'3306'</span>
    }
}</code></pre>
			<p>index.js----Express服务器入口文件</p>
<pre><code class="javascript"><span class="hljs-comment">// node 后端服务器</span>

<span class="hljs-keyword">const</span> userApi = <span class="hljs-built_in">require</span>(<span class="hljs-string">'./api/userApi'</span>);
<span class="hljs-keyword">const</span> fs = <span class="hljs-built_in">require</span>(<span class="hljs-string">'fs'</span>);
<span class="hljs-keyword">const</span> path = <span class="hljs-built_in">require</span>(<span class="hljs-string">'path'</span>);
<span class="hljs-keyword">const</span> bodyParser = <span class="hljs-built_in">require</span>(<span class="hljs-string">'body-parser'</span>);
<span class="hljs-keyword">const</span> express = <span class="hljs-built_in">require</span>(<span class="hljs-string">'express'</span>);
<span class="hljs-keyword">const</span> app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({<span class="hljs-attr">extended</span>: <span class="hljs-literal">false</span>}));

<span class="hljs-comment">// 后端api路由</span>
app.use(<span class="hljs-string">'/api/user'</span>, userApi);

<span class="hljs-comment">// 监听端口</span>
app.listen(<span class="hljs-number">3000</span>);
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">'success listen at port:3000......'</span>);</code></pre>
<p>sqlMap.js----SQL语句映射文件，以供api逻辑调用</p>
<pre><code class="javascript"><span class="hljs-comment">// sql语句</span>
<span class="hljs-keyword">var</span> sqlMap = {
    <span class="hljs-comment">// 用户</span>
    user: {
        <span class="hljs-attr">add</span>: <span class="hljs-string">'insert into user(id, name, age) values (0, ?, ?)'</span>
    }
}

<span class="hljs-built_in">module</span>.exports = sqlMap;</code></pre>
			<p>api/userApi.js ---- 测试用api示例</p>
<pre><code class="javascript"><span class="hljs-keyword">var</span> models = <span class="hljs-built_in">require</span>(<span class="hljs-string">'../db'</span>);
<span class="hljs-keyword">var</span> express = <span class="hljs-built_in">require</span>(<span class="hljs-string">'express'</span>);
<span class="hljs-keyword">var</span> router = express.Router();
<span class="hljs-keyword">var</span> mysql = <span class="hljs-built_in">require</span>(<span class="hljs-string">'mysql'</span>);
<span class="hljs-keyword">var</span> $sql = <span class="hljs-built_in">require</span>(<span class="hljs-string">'../sqlMap'</span>);

<span class="hljs-comment">// 连接数据库</span>
<span class="hljs-keyword">var</span> conn = mysql.createConnection(models.mysql);

conn.connect();
<span class="hljs-keyword">var</span> jsonWrite = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">res, ret</span>) </span>{
    <span class="hljs-keyword">if</span>(<span class="hljs-keyword">typeof</span> ret === <span class="hljs-string">'undefined'</span>) {
        res.json({
            <span class="hljs-attr">code</span>: <span class="hljs-string">'1'</span>,
            <span class="hljs-attr">msg</span>: <span class="hljs-string">'操作失败'</span>
        });
    } <span class="hljs-keyword">else</span> {
        res.json(ret);
    }
};

<span class="hljs-comment">// 增加用户接口</span>
router.post(<span class="hljs-string">'/addUser'</span>, (req, res) =&gt; {
    <span class="hljs-keyword">var</span> sql = $sql.user.add;
    <span class="hljs-keyword">var</span> params = req.body;
    <span class="hljs-built_in">console</span>.log(params);
    conn.query(sql, [params.username, params.age], <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">err, result</span>) </span>{
        <span class="hljs-keyword">if</span> (err) {
            <span class="hljs-built_in">console</span>.log(err);
        }
        <span class="hljs-keyword">if</span> (result) {
            jsonWrite(res, result);
        }
    })
});

<span class="hljs-built_in">module</span>.exports = router;</code></pre>
			<p>编写完成之后，就可以在项目根目录下安装依赖<code>npm install express mysql body-parser</code>;</p>
			<p>此时在server文件夹下执行<code>node index</code>（这里也可以加载package.json中，然后使用npm执行）看到success listen at port:3000......即服务端启动成功。</p>
			<p>到这一步，我们的服务器js代码已经结束啦。现在来敲我们vue前端代码</p>
			<p class="h1">3.编写vue测试文件</p>
			<p>由于这里只是为了测试，所以直接在vue-cli生成的Hello.vue中编写即可。</p>
			<pre><code class="html">
<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"hello"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>{ msg }<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">form</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"username"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"userName"</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"age"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"age"</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:;"</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">"addUser"</span>&gt;</span>提交<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">name</span>: <span class="hljs-string">'hello'</span>,
  data () {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">msg</span>: <span class="hljs-string">'Welcome to Your Vue.js App'</span>,
      <span class="hljs-attr">userName</span>: <span class="hljs-string">''</span>,
      <span class="hljs-attr">age</span>: <span class="hljs-string">''</span>
    }
  },
  <span class="hljs-attr">methods</span>: {
    addUser() {
      <span class="hljs-keyword">var</span> name = <span class="hljs-keyword">this</span>.userName;
      <span class="hljs-keyword">var</span> age = <span class="hljs-keyword">this</span>.age;
      <span class="hljs-keyword">this</span>.$http.post(<span class="hljs-string">'/api/user/addUser'</span>, {
        <span class="hljs-attr">username</span>: name,
        <span class="hljs-attr">age</span>: age
      },{}).then(<span class="hljs-function">(<span class="hljs-params">response</span>) =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(response);
      })
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre>
			<p class="h1">4.关于代理和跨域的问题</p>
			<p>完成上面3步之后，执行<code>npm run dev</code>，然后输入一组数据，点击保存，你会发现会报一个错误：vue-resource.common.js?e289:1071 POST <a href="http://localhost" rel="nofollow noreferrer" target="_blank">http://localhost</a>:8080/api/user/addUser 404 (Not Found).<br>这是由于直接访问8080端口，是访问不到的，所以这里需要设置一下代理转发映射.</p>
			<p>这里有俩种办法都可以解决跨域代理的问题：</p>
			<p>第一种办法：</p>
			<p>vue-cli的config文件中有一个<code>proxyTable</code>参数，用来设置地址映射表，可以添加到开发时配置（dev）中</p>
<pre><code class="javascript">dev: {
    <span class="hljs-comment">// ...</span>
    proxyTable: {
        <span class="hljs-string">'/api'</span>: {
            <span class="hljs-attr">target</span>: <span class="hljs-string">'http://127.0.0.1:3000/api/'</span>,
            <span class="hljs-attr">changeOrigin</span>: <span class="hljs-literal">true</span>,
            <span class="hljs-attr">pathRewrite</span>: {
                <span class="hljs-string">'^/api'</span>: <span class="hljs-string">''</span>
            }
        }
    },
    <span class="hljs-comment">// ...</span>
}</code></pre>
			<p>即请求<code>/api</code>时就代表<code>http://127.0.0.1:3000/api/</code>(这里要写ip，不要写localhost)，<br><code>changeOrigin</code>参数接收一个布尔值，如果为<code>true</code>，这样就不会有跨域问题了。</p>
			<p>第二种办法：</p>
			<p>在server文件夹下shift+右键 ，选择在此打开命令窗口</p>
			<p>输入 npm install -g nodemon 回车</p>
			<p>下载完成后使用 nodemon index 启动服务器</p>
			<p>这样就可以啦，写到这里今天的初学MySQL也差不多了。以上内容原文链接在如下：</p>
			<p><a style="color: green;" href="https://segmentfault.com/a/1190000008176208#articleHeader1">Vue+MySQL+Express小试牛刀(https://segmentfault.com/a/1190000008176208#articleHeader1)</a></p>
			<p>扩展内容：</p>
			<p>在sqlMap文件中还能加入</p>
<pre class="hljs n1ql"><code>var sqlMap = {
    user: {
        add: '<span class="hljs-keyword">insert</span> <span class="hljs-keyword">into</span> <span class="hljs-keyword">user</span>( username, <span class="hljs-keyword">password</span>) <span class="hljs-keyword">values</span> ( ?, ?)<span class="hljs-string">',
        select_name: '</span><span class="hljs-keyword">SELECT</span> * <span class="hljs-keyword">from</span> <span class="hljs-keyword">user</span> <span class="hljs-keyword">where</span> username = ?<span class="hljs-string">',    //查询 username
        select_password: '</span><span class="hljs-keyword">SELECT</span> * <span class="hljs-keyword">from</span> <span class="hljs-keyword">user</span> <span class="hljs-keyword">where</span> <span class="hljs-keyword">password</span> = ?<span class="hljs-string">'      //查询 password
    }
}
module.exports = sqlMap;</span></code></pre>
			<p>那么api/userApi.js文件即可写成</p>
<pre class="hljs javascript"><code><span class="hljs-keyword">var</span> models = <span class="hljs-built_in">require</span>(<span class="hljs-string">'../db'</span>);
<span class="hljs-keyword">var</span> express = <span class="hljs-built_in">require</span>(<span class="hljs-string">'express'</span>);
<span class="hljs-keyword">var</span> router = express.Router();
<span class="hljs-keyword">var</span> mysql = <span class="hljs-built_in">require</span>(<span class="hljs-string">'mysql'</span>);
<span class="hljs-keyword">var</span> $sql = <span class="hljs-built_in">require</span>(<span class="hljs-string">'../sqlMap'</span>);
<span class="hljs-comment">// 连接数据库</span>
<span class="hljs-keyword">var</span> conn = mysql.createConnection(models.mysql);
conn.connect();
<span class="hljs-keyword">var</span> jsonWrite = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">res, ret</span>) </span>{
    <span class="hljs-keyword">if</span>(<span class="hljs-keyword">typeof</span> ret === <span class="hljs-string">'undefined'</span>) {
        res.send(<span class="hljs-string">'err'</span>)
    } <span class="hljs-keyword">else</span> {
        <span class="hljs-comment">//res.json(ret);</span>
        res.send(<span class="hljs-string">'ok'</span>)
    }
};
<span class="hljs-comment">// 增加用户接口</span>
router.post(<span class="hljs-string">'/addUser'</span>, (req, res) =&gt; {
    <span class="hljs-keyword">var</span> sql_name = $sql.user.select_name
    <span class="hljs-keyword">var</span> sql = $sql.user.add;
    <span class="hljs-keyword">var</span> params = req.body;
    <span class="hljs-built_in">console</span>.log(params);
    conn.query(sql_name,params.username,<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">err,result</span>) </span>{
        <span class="hljs-keyword">if</span>(err) {
            <span class="hljs-built_in">console</span>.log(err)
        }
        <span class="hljs-keyword">if</span>(result[<span class="hljs-number">0</span>]===<span class="hljs-literal">undefined</span>) {
            conn.query(sql,[params.username,params.password], <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">err, result</span>) </span>{
                <span class="hljs-keyword">if</span>(err) {
                    <span class="hljs-built_in">console</span>.log(err)
                }
                <span class="hljs-keyword">if</span>(result) {
                    jsonWrite(res, result)
                }
            })
        }<span class="hljs-keyword">else</span> {
            res.send(<span class="hljs-string">'-1'</span>)    <span class="hljs-comment">//当前注册username与数据库重复时，data返回-1</span>
        }
    })
    
});

<span class="hljs-comment">//查找用户接口</span>
router.post(<span class="hljs-string">'/selectUser'</span>, (req,res) =&gt; {
    <span class="hljs-keyword">var</span> sql_name = $sql.user.select_name;
    <span class="hljs-keyword">var</span> sql_password = $sql.user.select_password;
    <span class="hljs-keyword">var</span> params = req.body;
    conn.query(sql_name,params.username,<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">err, result</span>) </span>{
        <span class="hljs-keyword">if</span>(err) {
            <span class="hljs-built_in">console</span>.log(err)
        }
        <span class="hljs-keyword">if</span>(result[<span class="hljs-number">0</span>]===<span class="hljs-literal">undefined</span>) {
            res.send(<span class="hljs-string">'-1'</span>)    <span class="hljs-comment">//查询不出username，data返回-1</span>
        }<span class="hljs-keyword">else</span> {
            conn.query(sql_password,params.password, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">err, result</span>) </span>{
                <span class="hljs-keyword">if</span>(err) {
                    <span class="hljs-built_in">console</span>.log(err)
                }
                <span class="hljs-keyword">if</span>(result[<span class="hljs-number">0</span>]===<span class="hljs-literal">undefined</span>) {
                    res.send(<span class="hljs-string">'0'</span>)    <span class="hljs-comment">//username正确后，password错误，data返回 0</span>
                }<span class="hljs-keyword">else</span> {
                    jsonWrite(res, result);
                }
            })
        }
    })
});
<span class="hljs-built_in">module</span>.exports = router;</code></pre>
			<p>补充内容出自：<a style="color: green;" href="https://segmentfault.com/a/1190000011288053">Node+Mysql+Vue实现登录注册功能 - 入门(https://segmentfault.com/a/1190000011288053)</a></p>
		</div>
</template>

<script>
	export default{
		name:"Id0",
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="scss">
	.id0{
			text-align: left;
			width: 90%;
			margin: 0 auto;
			>.h1{
				font-size: 24px;
			}
			p{
				margin-top: 15px;
			}
			code{
				font-size: 16px;
				color:#c7254e ;
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
		}
</style>