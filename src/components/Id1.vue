<template>
	<div class="id1">
		<p class="h1">生命周期简介</p>
		<img src="@/assets/vue.png" style="width: 60%;" class="img" alt="" />
		<img src="@/assets/vue2.png" class="img"/>
		<p class="text">从上面的俩个图就可以看到<span class="redfont">Vue2.0</span>的所有生命钩子函数</p>
		<p class="text">我们可以跟据代码来实现，进一步观看(ps:代码来源于 <a style="color: green;" href="https://segmentfault.com/a/1190000008010666">Vue2.0 探索之路——生命周期和钩子函数的一些理解</a>)</p>
		<p class="h1">Vue代码如下</p>
<pre class="hljs django"><code><span class="xml"><span class="hljs-meta">&lt;!DOCTYPE html&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">html</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text/javascript"</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://cdn.jsdelivr.net/vue/2.1.3/vue.js"</span>&gt;</span><span class="undefined"></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"app"</span>&gt;</span>
     <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span></span><span class="hljs-template-variable">{{ message }}</span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text/javascript"</span>&gt;</span><span class="javascript">
    
  <span class="hljs-keyword">var</span> app = <span class="hljs-keyword">new</span> Vue({
      <span class="hljs-attr">el</span>: <span class="hljs-string">'#app'</span>,
      <span class="hljs-attr">data</span>: {
          <span class="hljs-attr">message</span> : <span class="hljs-string">"xuxiao is boy"</span> 
      },
       <span class="hljs-attr">beforeCreate</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
                <span class="hljs-built_in">console</span>.group(<span class="hljs-string">'beforeCreate 创建前状态===============》'</span>);
               <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"%c%s"</span>, <span class="hljs-string">"color:red"</span> , <span class="hljs-string">"el     : "</span> + <span class="hljs-keyword">this</span>.$el); <span class="hljs-comment">//undefined</span>
               <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"%c%s"</span>, <span class="hljs-string">"color:red"</span>,<span class="hljs-string">"data   : "</span> + <span class="hljs-keyword">this</span>.$data); <span class="hljs-comment">//undefined </span>
               <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"%c%s"</span>, <span class="hljs-string">"color:red"</span>,<span class="hljs-string">"message: "</span> + <span class="hljs-keyword">this</span>.message)  
        },
        <span class="hljs-attr">created</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
            <span class="hljs-built_in">console</span>.group(<span class="hljs-string">'created 创建完毕状态===============》'</span>);
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"%c%s"</span>, <span class="hljs-string">"color:red"</span>,<span class="hljs-string">"el     : "</span> + <span class="hljs-keyword">this</span>.$el); <span class="hljs-comment">//undefined</span>
               <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"%c%s"</span>, <span class="hljs-string">"color:red"</span>,<span class="hljs-string">"data   : "</span> + <span class="hljs-keyword">this</span>.$data); <span class="hljs-comment">//已被初始化 </span>
               <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"%c%s"</span>, <span class="hljs-string">"color:red"</span>,<span class="hljs-string">"message: "</span> + <span class="hljs-keyword">this</span>.message); <span class="hljs-comment">//已被初始化</span>
        },
        <span class="hljs-attr">beforeMount</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
            <span class="hljs-built_in">console</span>.group(<span class="hljs-string">'beforeMount 挂载前状态===============》'</span>);
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"%c%s"</span>, <span class="hljs-string">"color:red"</span>,<span class="hljs-string">"el     : "</span> + (<span class="hljs-keyword">this</span>.$el)); <span class="hljs-comment">//已被初始化</span>
            <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>.$el);
               <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"%c%s"</span>, <span class="hljs-string">"color:red"</span>,<span class="hljs-string">"data   : "</span> + <span class="hljs-keyword">this</span>.$data); <span class="hljs-comment">//已被初始化  </span>
               <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"%c%s"</span>, <span class="hljs-string">"color:red"</span>,<span class="hljs-string">"message: "</span> + <span class="hljs-keyword">this</span>.message); <span class="hljs-comment">//已被初始化  </span>
        },
        <span class="hljs-attr">mounted</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
            <span class="hljs-built_in">console</span>.group(<span class="hljs-string">'mounted 挂载结束状态===============》'</span>);
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"%c%s"</span>, <span class="hljs-string">"color:red"</span>,<span class="hljs-string">"el     : "</span> + <span class="hljs-keyword">this</span>.$el); <span class="hljs-comment">//已被初始化</span>
            <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>.$el);    
               <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"%c%s"</span>, <span class="hljs-string">"color:red"</span>,<span class="hljs-string">"data   : "</span> + <span class="hljs-keyword">this</span>.$data); <span class="hljs-comment">//已被初始化</span>
               <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"%c%s"</span>, <span class="hljs-string">"color:red"</span>,<span class="hljs-string">"message: "</span> + <span class="hljs-keyword">this</span>.message); <span class="hljs-comment">//已被初始化 </span>
        },
        <span class="hljs-attr">beforeUpdate</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
            <span class="hljs-built_in">console</span>.group(<span class="hljs-string">'beforeUpdate 更新前状态===============》'</span>);
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"%c%s"</span>, <span class="hljs-string">"color:red"</span>,<span class="hljs-string">"el     : "</span> + <span class="hljs-keyword">this</span>.$el);
            <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>.$el);   
               <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"%c%s"</span>, <span class="hljs-string">"color:red"</span>,<span class="hljs-string">"data   : "</span> + <span class="hljs-keyword">this</span>.$data); 
               <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"%c%s"</span>, <span class="hljs-string">"color:red"</span>,<span class="hljs-string">"message: "</span> + <span class="hljs-keyword">this</span>.message); 
        },
        <span class="hljs-attr">updated</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
            <span class="hljs-built_in">console</span>.group(<span class="hljs-string">'updated 更新完成状态===============》'</span>);
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"%c%s"</span>, <span class="hljs-string">"color:red"</span>,<span class="hljs-string">"el     : "</span> + <span class="hljs-keyword">this</span>.$el);
            <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>.$el); 
               <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"%c%s"</span>, <span class="hljs-string">"color:red"</span>,<span class="hljs-string">"data   : "</span> + <span class="hljs-keyword">this</span>.$data); 
               <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"%c%s"</span>, <span class="hljs-string">"color:red"</span>,<span class="hljs-string">"message: "</span> + <span class="hljs-keyword">this</span>.message); 
        },
        <span class="hljs-attr">beforeDestroy</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
            <span class="hljs-built_in">console</span>.group(<span class="hljs-string">'beforeDestroy 销毁前状态===============》'</span>);
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"%c%s"</span>, <span class="hljs-string">"color:red"</span>,<span class="hljs-string">"el     : "</span> + <span class="hljs-keyword">this</span>.$el);
            <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>.$el);    
               <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"%c%s"</span>, <span class="hljs-string">"color:red"</span>,<span class="hljs-string">"data   : "</span> + <span class="hljs-keyword">this</span>.$data); 
               <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"%c%s"</span>, <span class="hljs-string">"color:red"</span>,<span class="hljs-string">"message: "</span> + <span class="hljs-keyword">this</span>.message); 
        },
        <span class="hljs-attr">destroyed</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
            <span class="hljs-built_in">console</span>.group(<span class="hljs-string">'destroyed 销毁完成状态===============》'</span>);
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"%c%s"</span>, <span class="hljs-string">"color:red"</span>,<span class="hljs-string">"el     : "</span> + <span class="hljs-keyword">this</span>.$el);
            <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>.$el);  
               <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"%c%s"</span>, <span class="hljs-string">"color:red"</span>,<span class="hljs-string">"data   : "</span> + <span class="hljs-keyword">this</span>.$data); 
               <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"%c%s"</span>, <span class="hljs-string">"color:red"</span>,<span class="hljs-string">"message: "</span> + <span class="hljs-keyword">this</span>.message)
        }
    })
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span></span></code></pre>
		<p class="h1">Create 和 Mounted 相关</p>
		<blockquote>
		<code>beforecreated</code>：el 和 data 并未初始化  <br><code>created</code>:完成了 data 数据的初始化，el没有<br><code>beforeMount</code>：完成了 el 和 data 初始化 <br><code>mounted</code> ：完成挂载<p>另外在标红处，我们能发现el还是 {{message}}，这里就是应用的 <code>Virtual DOM</code>（虚拟Dom）技术，先把坑占住了。到后面<code>mounted</code>挂载的时候再把值渲染进去。</p>
		</blockquote>
		<img src="@/assets/vue3.png" class="img" alt="" />
		<p class="h1">要测试update</p>
		<p class="text">在控制台输入 app.message= 'yes !! I do';</p>
		<p class="text">就能看到updata的操作了</p>
		<img src="@/assets/vue4.png" class="img" alt="" />
		<p class="h1">关于销毁 destroy</p>
		<p class="text">有关于销毁，暂时还不是很清楚。我们在console里执行下命令对 vue实例进行销毁。销毁完成后，我们再重新改变message的值，vue不再对此动作进行响应了。但是原先生成的dom元素还存在，可以这么理解，执行了destroy操作，后续就不再受vue控制了。</p>
		<p class="text">app.$destroy();</p>
		<img src="@/assets/vue5.png" class="img" alt="" />
	</div>
</template>
<script>
	export default{
		name:"Id1",
		data(){
			return{
				message:"{{ message }}"
			}
		}
	}
</script>

<style lang="scss">
	.id1{
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