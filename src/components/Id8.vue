<template>
	<div id="id8">
		<h4>我们先复习函数的概念。一个函数是一段完整的代码，调用一个函数就是传入参数，然后返回结果：</h4>
<pre><code class="javascript"><span class="function"><span class="keyword">function</span> <span class="">foo</span><span class="params">(x)</span> {</span>
    <span class="keyword">return</span> x + x;
}

<span class="keyword">var</span> r = foo(<span class="number">1</span>); <span class="comment">// 调用foo函数</span>
</code></pre>
	  	<h4>函数在执行过程中，如果没有遇到return语句（函数末尾如果没有return，就是隐含的return undefined;），控制权无法交回被调用的代码。</h4>
	  	<h4>generator跟函数很像，定义如下：</h4>
<pre><code class="javascript"><span class="keyword">function</span>* foo(x) {
    <span class="keyword">yield</span> x + <span class="number">1</span>;
    <span class="keyword">yield</span> x + <span class="number">2</span>;
    <span class="keyword">return</span> x + <span class="number">3</span>;
}
</code></pre>
		<h4>generator和函数不同的是，generator由function*定义（注意多出的*号），并且，除了return语句，还可以用yield返回多次。<br />

大多数同学立刻就晕了，generator就是能够返回多次的“函数”？返回多次有啥用？<br />

还是举个栗子吧。<br />

我们以一个著名的斐波那契数列为例，它由0，1开头：</h4>
<pre><code class="undefined">0 1 1 2 3 5 8 13 21 34 ...
</code></pre>
		<h4>要编写一个产生斐波那契数列的函数，可以这么写：</h4>
<pre><code class="javascript"><span class="function"><span class="keyword">function</span> <span class="title">fib</span><span class="params">(max)</span> {</span>
    <span class="keyword">var</span>
        t,
        a = <span class="number">0</span>,
        b = <span class="number">1</span>,
        arr = [<span class="number">0</span>, <span class="number">1</span>];
    <span class="keyword">while</span> (arr.length &lt; max) {
        [a, b] = [b, a + b];
        arr.push(b);
    }
    <span class="keyword">return</span> arr;
}

<span class="comment">// 测试:</span>
fib(<span class="number">5</span>); <span class="comment">// [0, 1, 1, 2, 3]</span>
fib(<span class="number">10</span>); <span class="comment">// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]</span>
</code></pre>
		<h4>函数只能返回一次，所以必须返回一个Array。但是，如果换成generator，就可以一次返回一个数，不断返回多次。用generator改写如下：</h4>
<pre><code class="javascript"><span class="keyword">function</span>* fib(max) {
    <span class="keyword">var</span>
        t,
        a = <span class="number">0</span>,
        b = <span class="number">1</span>,
        n = <span class="number">0</span>;
    <span class="keyword">while</span> (n &lt; max) {
        <span class="keyword">yield</span> a;
        [a, b] = [b, a + b];
        n ++;
    }
    <span class="keyword">return</span>;
}
</code></pre>
		<h4>直接调用试试：</h4>
<pre><code class="ruby">fib(<span class="number">5</span>); <span class="regexp">//</span> fib {[[<span class="constant">GeneratorStatus</span>]]<span class="symbol">:</span> <span class="string">"suspended"</span>, [[<span class="constant">GeneratorReceiver</span>]]<span class="symbol">:</span> <span class="constant">Window</span>}
</code></pre>
		<h4>直接调用一个generator和调用函数不一样，fib(5)仅仅是创建了一个generator对象，还没有去执行它。<br />

调用generator对象有两个方法，一是不断地调用generator对象的next()方法：</h4>
<pre><code class="ruby">var f = fib(<span class="number">5</span>);
f.<span class="keyword">next</span>(); <span class="regexp">//</span> {<span class="symbol">value:</span> <span class="number">0</span>, <span class="symbol">done:</span> <span class="keyword">false</span>}
f.<span class="keyword">next</span>(); <span class="regexp">//</span> {<span class="symbol">value:</span> <span class="number">1</span>, <span class="symbol">done:</span> <span class="keyword">false</span>}
f.<span class="keyword">next</span>(); <span class="regexp">//</span> {<span class="symbol">value:</span> <span class="number">1</span>, <span class="symbol">done:</span> <span class="keyword">false</span>}
f.<span class="keyword">next</span>(); <span class="regexp">//</span> {<span class="symbol">value:</span> <span class="number">2</span>, <span class="symbol">done:</span> <span class="keyword">false</span>}
f.<span class="keyword">next</span>(); <span class="regexp">//</span> {<span class="symbol">value:</span> <span class="number">3</span>, <span class="symbol">done:</span> <span class="keyword">false</span>}
f.<span class="keyword">next</span>(); <span class="regexp">//</span> {<span class="symbol">value:</span> undefined, <span class="symbol">done:</span> <span class="keyword">true</span>}
</code></pre>
		<h4>next()方法会执行generator的代码，然后，每次遇到yield x;就返回一个对象{value: x, done: true/false}，然后“暂停”。返回的value就是yield的返回值，done表示这个generator是否已经执行结束了。如果done为true，则value就是return的返回值。</h4>
		<h4>当执行到done为true时，这个generator对象就已经全部执行完毕，不要再继续调用next()了。</h4>
		<h4>第二个方法是直接用for ... of循环迭代generator对象，这种方式不需要我们自己判断done：</h4>
<pre id="pre-online-run-code-1" style="font-size: 14px; margin-bottom: 0px; border-bottom: none; padding: 6px; border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;">'use strict'

function* fib(max) {
    var
        t,
        a = 0,
        b = 1,
        n = 0;
    while (n &lt; max) {
        yield a;
        [a, b] = [b, a + b];
        n ++;
    }
    return;
}

for (var x of fib(10)) {
    console.log(x); // 依次输出0, 1, 1, 2, 3, ...
}
</pre>
		<h4>generator和普通函数相比，有什么用？</h4>
		<h4>因为generator可以在执行过程中多次返回，所以它看上去就像一个可以记住执行状态的函数，利用这一点，写一个generator就可以实现需要用面向对象才能实现的功能。例如，用一个对象来保存状态，得这么写：</h4>
<pre><code class="javascript"><span class="keyword">var</span> fib = {
    a: <span class="number">0</span>,
    b: <span class="number">1</span>,
    n: <span class="number">0</span>,
    max: <span class="number">5</span>,
    next: <span class="function"><span class="keyword">function</span> <span class="params">()</span> {</span>
        <span class="keyword">var</span>
            r = <span class="keyword">this</span>.a,
            t = <span class="keyword">this</span>.a + <span class="keyword">this</span>.b;
        <span class="keyword">this</span>.a = <span class="keyword">this</span>.b;
        <span class="keyword">this</span>.b = t;
        <span class="keyword">if</span> (<span class="keyword">this</span>.n &lt; <span class="keyword">this</span>.max) {
            <span class="keyword">this</span>.n ++;
            <span class="keyword">return</span> r;
        } <span class="keyword">else</span> {
            <span class="keyword">return</span> <span class="literal">undefined</span>;
        }
    }
};
</code></pre>
		<h4>用对象的属性来保存状态，相当繁琐。</h4>
		<h4>generator还有另一个巨大的好处，就是把异步回调代码变成“同步”代码。要使用AJAX以后才能体会到。<br />
没有generator之前的黑暗时代，用AJAX时需要这么写代码：</h4>
<pre><code class="javascript">ajax(<span class="string">'http://url-1'</span>, data1, <span class="function"><span class="keyword">function</span> <span class="params">(err, result)</span> {</span>
    <span class="keyword">if</span> (err) {
        <span class="keyword">return</span> handle(err);
    }
    ajax(<span class="string">'http://url-2'</span>, data2, <span class="function"><span class="keyword">function</span> <span class="params">(err, result)</span> {</span>
        <span class="keyword">if</span> (err) {
            <span class="keyword">return</span> handle(err);
        }
        ajax(<span class="string">'http://url-3'</span>, data3, <span class="function"><span class="keyword">function</span> <span class="params">(err, result)</span> {</span>
            <span class="keyword">if</span> (err) {
                <span class="keyword">return</span> handle(err);
            }
            <span class="keyword">return</span> success(result);
        });
    });
});
</code></pre>
		<h4>有了generator的美好时代，用AJAX时可以这么写：</h4>
<pre><code class="javascript"><span class="keyword">try</span> {
    r1 = <span class="keyword">yield</span> ajax(<span class="string">'http://url-1'</span>, data1);
    r2 = <span class="keyword">yield</span> ajax(<span class="string">'http://url-2'</span>, data2);
    r3 = <span class="keyword">yield</span> ajax(<span class="string">'http://url-3'</span>, data3);
    success(r3);
}
<span class="keyword">catch</span> (err) {
    handle(err);
}
</code></pre>
		<h4>看上去是同步的代码，实际执行是异步的。</h4>
		<h4>要生成一个自增的ID，可以编写一个next_id()函数：</h4>
<pre><code class="javascript"><span class="keyword">var</span> current_id = <span class="number">0</span>;

<span class="function"><span class="keyword">function</span> <span class="">next_id</span><span class="params">()</span> {</span>
    current_id ++;
    <span class="keyword">return</span> current_id;
}
</code></pre>
		<h4>不用闭包，试用generator改写：</h4>
<pre id="pre-online-run-code-2" style="font-size: 14px; margin-bottom: 0px; border-bottom: none; padding: 6px; border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;">'use strict';
function* next_id() {
	var a = 1;
    var b = 100;
    while ( a < b ){
        yield a;
        a++;
    }
    return;	
}
</pre>
<pre id="post-online-run-code-2" style="font-size: 14px; margin-top: 0; border-top: 0; padding: 6px; border-top-left-radius: 0; border-top-right-radius: 0;">}

// 测试:
var
    x,
    pass = true,
    g = next_id();
for (x = 1; x &lt; 100; x ++) {
    if (g.next().value !== x) {
        pass = false;
        console.log('测试失败!');
        break;
    }
}
if (pass) {
    console.log('测试通过!');
}
</pre>
		<h4>以上文章来自于：<a href="https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/00143450083887673122b45a4414333ac366c3c935125e7000">generator</a></h4>
	</div>
</template>

<script>
	export default{
		name:"Id8",
		data(){
			return {
				
			}
		}
	}
</script>

<style lang="scss">
 #id8 {
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