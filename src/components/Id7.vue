<template>
	<div id="id7">
		<h4>ES6标准新增了一种新的函数：Arrow Function（箭头函数）。<br />为什么叫Arrow Function？因为它的定义用的就是一个箭头：</h4>
<pre><code class="ini"><span class="setting">x =<span class="value">&gt; x * x</span></span>
</code></pre>
		<h4>上面的箭头函数相当于：</h4>
<pre><code class="javascript"><span class="function"><span class="keyword">function</span> <span class="params">(x)</span> {</span>
    <span class="keyword">return</span> x * x;
}
</code></pre>
		<h4>箭头函数有两种格式，一种像上面的，只包含一个表达式，连{ ... }和return都省略掉了。还有一种可以包含多条语句，这时候就不能省略{ ... }和return：</h4>
<pre><code class="php">x =&gt; {
    <span class="keyword">if</span> (x &gt; <span class="number">0</span>) {
        <span class="keyword">return</span> x * x;
    }
    <span class="keyword">else</span> {
        <span class="keyword">return</span> - x * x;
    }
}
</code></pre>
		<h4>如果参数不是一个，就需要用括号()括起来：</h4>
<pre><code class="php"><span class="comment">// 两个参数:</span>
(x, y) =&gt; x * x + y * y

<span class="comment">// 无参数:</span>
() =&gt; <span class="number">3.14</span>

<span class="comment">// 可变参数:</span>
(x, y, ...rest) =&gt; {
    <span class="keyword">var</span> i, sum = x + y;
    <span class="keyword">for</span> (i=<span class="number">0</span>; i&lt;rest.length; i++) {
        sum += rest[i];
    }
    <span class="keyword">return</span> sum;
}
</code></pre>
		<h4>如果要返回一个对象，就要注意，如果是单表达式，这么写的话会报错：</h4>
<pre><code class="php"><span class="comment">// SyntaxError:</span>
x =&gt; { foo: x }
</code></pre>
		<h4>因为和函数体的{ ... }有语法冲突，所以要改为：</h4>
<pre><code class="php"><span class="comment">// ok:</span>
x =&gt; ({ foo: x })
</code></pre>
		<h3>this 指向的问题</h3>
		<h4>箭头函数看上去是匿名函数的一种简写，但实际上，箭头函数和匿名函数有个明显的区别：箭头函数内部的this是词法作用域，由上下文确定。<br />回顾前面的例子，由于JavaScript函数对this绑定的错误处理，下面的例子无法得到预期结果：</h4>
<pre><code class="javascript"><span class="keyword">var</span> obj = {
    birth: <span class="number">1990</span>,
    getAge: <span class="function"><span class="keyword">function</span> <span class="params">()</span> {</span>
        <span class="keyword">var</span> b = <span class="keyword">this</span>.birth; <span class="comment">// 1990</span>
        <span class="keyword">var</span> fn = <span class="function"><span class="keyword">function</span> <span class="params">()</span> {</span>
            <span class="keyword">return</span> <span class="keyword">new</span> Date().getFullYear() - <span class="keyword">this</span>.birth; <span class="comment">// this指向window或undefined</span>
        };
        <span class="keyword">return</span> fn();
    }
};
</code></pre>
		<h4>现在，箭头函数完全修复了this的指向，this总是指向词法作用域，也就是外层调用者obj：</h4>
<pre><code class="php"><span class="keyword">var</span> obj = {
    birth: <span class="number">1990</span>,
    getAge: <span class="function"><span class="keyword">function</span> <span class="params">()</span> {</span>
        <span class="keyword">var</span> b = <span class="keyword">this</span>.birth; <span class="comment">// 1990</span>
        <span class="keyword">var</span> fn = () =&gt; <span class="keyword">new</span> Date().getFullYear() - <span class="keyword">this</span>.birth; <span class="comment">// this指向obj对象</span>
        <span class="keyword">return</span> fn();
    }
};
obj.getAge(); <span class="comment">// 25</span>
</code></pre>
		<h4>如果使用箭头函数，以前的那种hack写法：</h4>
<pre><code class="javascript"><span class="keyword">var</span> that = <span class="keyword">this</span>;
</code></pre>
		<h4>就不需要了</h4>
		<h4>由于this在箭头函数中已经按照词法作用域绑定了，所以，用call()或者apply()调用箭头函数时，无法对this进行绑定，即传入的第一个参数被忽略：</h4>
<pre><code class="php"><span class="keyword">var</span> obj = {
    birth: <span class="number">1990</span>,
    getAge: <span class="function"><span class="keyword">function</span> <span class="params">(year)</span> {</span>
        <span class="keyword">var</span> b = <span class="keyword">this</span>.birth; <span class="comment">// 1990</span>
        <span class="keyword">var</span> fn = (y) =&gt; y - <span class="keyword">this</span>.birth; <span class="comment">// this.birth仍是1990</span>
        <span class="keyword">return</span> fn.call({birth:<span class="number">2000</span>}, year);
    }
};
obj.getAge(<span class="number">2015</span>); <span class="comment">// 25</span>
</code></pre>
	</div>
</template>

<script>export default {
	name: "Id7",
	data() {
		return {

		}
	}
}</script>

<style lang="scss">
 #id7 {
	text-align: left;
	pre.highlight,
	pre.highlight code {
		display: block;
		padding: 0.5em;
		color: #333;
		background: #f8f8ff
	}
	pre{
    padding: 10px;
    background: #fafafa;
    font: 12px / 18px Consolas,monospace,serif;
    color: #444;
    -moz-tab-size: 4;
    tab-size: 4;
    overflow: auto;
    border: 1px solid #ddd;
    border-radius: 3px;
    margin-top: 10px;
    margin-bottom: 10px;
	}
	pre .keyword, pre .css .rule .keyword, pre .winutils, pre .javascript .title, pre .nginx .title, pre .subst, pre .request, pre .status {
    color: #333;
    font-weight: bold;
	}
	pre .comment, pre .template_comment, pre .diff .header, pre .javadoc {
    color: #998;
    font-style: italic;
}
}
</style>