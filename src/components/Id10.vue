<template>
	<div id="id10">
		<h1>首先来整理一下数组的属性:</h1>
		<table class="reference">
		  <tbody>
		  <tr>
		    <th style="width:20%">属性</th>
		    <th>描述</th>
		  </tr>
		  <tr>
		    <td>constructor</td>
		    <td>返回创建数组对象的原型函数。</td>
		  </tr>
		 
		  <tr>
		    <td>length</td>
		    <td>设置或返回数组元素的个数。</td>
		  </tr>
		  <tr>
		    <td>prototype</td>
		    <td>允许你向数组对象添加属性或方法。</td>
		  </tr>
		 </tbody>
		</table>
		<h1>接下来是我们的重点Array 对象属性：</h1>
		<table class="reference">
		  <tbody><tr>
		    <th style="width:20%">方法</th>
		    <th>描述</th>
		  </tr>
		  <tr>
		    <td><a href="javascript:viod(0)">concat()</a></td>
		    <td>连接两个或更多的数组，并返回结果。</td>
		  </tr>
		 <tr>
		    <td><a href="javascript:viod(0)">copyWithin()</a></td>
		    <td>从数组的指定位置拷贝元素到数组的另一个指定位置中。</td>
		  </tr>
		
		<tr>
		    <td><a href="javascript:viod(0)">entries()</a></td>
		    <td>返回数组的可迭代对象。</td>
		    </tr>
		
		  <tr>
		    <td><a href="javascript:viod(0)">every()</a></td>
		    <td>检测数值元素的每个元素是否都符合条件。</td>
		    </tr>
		<tr>
		    <td><a href="javascript:viod(0)">fill()</a></td>
		    <td>使用一个固定值来填充数组。</td>
		    </tr>
		  <tr>
		    <td><a href="javascript:viod(0)">filter()</a></td>
		    <td>检测数值元素，并返回符合条件所有元素的数组。</td>
		    </tr>
		 <tr>
		    <td><a href="javascript:viod(0)"> find()</a></td>
		    <td>返回符合传入测试（函数）条件的数组元素。</td>
		    </tr>
		  <tr>
		 </tr><tr>
		    <td><a href="javascript:viod(0)"> findIndex()</a></td>
		    <td>返回符合传入测试（函数）条件的数组元素索引。</td>
		    </tr>
		  <tr>
		 </tr><tr>
		    <td><a href="javascript:viod(0)"> forEach()</a></td>
		    <td>数组每个元素都执行一次回调函数。</td>
		    </tr>
		 <tr>
		    <td><a href="javascript:viod(0)"> from()</a></td>
		    <td>通过给定的对象中创建一个数组。</td>
		    </tr>
		
		
		  <tr>
		  </tr><tr>
		    <td><a href="javascript:viod(0)">includes()</a></td>
		    <td>判断一个数组是否包含一个指定的值。</td>
		    </tr>
		  <tr>
		    <td><a href="javascript:viod(0)">indexOf()</a></td>
		    <td>搜索数组中的元素，并返回它所在的位置。</td>
		    </tr>
		
		  <tr>
		    <td><a href="javascript:viod(0)">isArray()</a></td>
		    <td>判断对象是否为数组。</td>
		    </tr>
		  <tr>
		    <td><a href="javascript:viod(0)">join()</a></td>
		    <td>把数组的所有元素放入一个字符串。</td>
		    </tr>
		 <tr>
		    <td><a href="javascript:viod(0)">keys()</a></td>
		    <td>返回数组的可迭代对象，包含原始数组的键(key)。</td>
		    </tr>
		
		  <tr>
		    <td><a href="javascript:viod(0)">lastIndexOf()</a></td>
		    <td>返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。</td>
		    </tr>
		    <tr>
		    <td><a href="javascript:viod(0)">map()</a></td>
		    <td>通过指定函数处理数组的每个元素，并返回处理后的数组。</td>
		    </tr>
		  <tr>
		    <td><a href="javascript:viod(0)">pop()</a></td>
		    <td>删除数组的最后一个元素并返回删除的元素。</td>
		    </tr>
		  <tr>
		    <td><a href="javascript:viod(0)">push()</a></td>
		    <td>向数组的末尾添加一个或更多元素，并返回新的长度。</td>
		    </tr>
		  <tr>
		 </tr><tr>
		    <td><a href="javascript:viod(0)">reduce()</a></td>
		    <td>将数组元素计算为一个值（从左到右）。</td>
		    </tr>
		  <tr>
		 </tr><tr>
		    <td><a href="javascript:viod(0)">reduceRight()</a></td>
		    <td>将数组元素计算为一个值（从右到左）。</td>
		    </tr>
		  <tr>
		    <td><a href="javascript:viod(0)">reverse()</a></td>
		    <td>反转数组的元素顺序。</td>
		    </tr>
		  <tr>
		    <td><a href="javascript:viod(0)">shift()</a></td>
		    <td>删除并返回数组的第一个元素。</td>
		    </tr>
		  <tr>
		    <td><a href="javascript:viod(0)">slice()</a></td>
		    <td>选取数组的的一部分，并返回一个新数组。</td>
		    </tr>
		  <tr>
		    <td><a href="javascript:viod(0)">some()</a></td>
		    <td>检测数组元素中是否有元素符合指定条件。</td>
		    </tr>
		  <tr>
		    <td><a href="javascript:viod(0)">sort()</a></td>
		    <td>对数组的元素进行排序。</td>
		    </tr>
		  <tr>
		    <td><a href="javascript:viod(0)">splice()</a></td>
		    <td>从数组中添加或删除元素。</td>
		    </tr>
		  <tr>
		    <td><a href="javascript:viod(0)">toString()</a></td>
		    <td>把数组转换为字符串，并返回结果。</td>
		    </tr>
		  <tr>
		    <td><a href="javascript:viod(0)">unshift()</a></td>
		    <td>向数组的开头添加一个或更多元素，并返回新的长度。</td>
		    </tr>
		  <tr>
		    <td><a href="javascript:viod(0)">valueOf()</a></td>
		    <td>返回数组对象的原始值。</td>
		    </tr>
		</tbody>
		</table>
		<h4 style="color: red;">由于Array 数组的属性实在是有点多于是乎我选几个我个人常用的出来详细分析一下。</h4>
		<h3>concat() 方法</h3>
		<h4>定义和用法：</h4>
		<h4>concat() 方法用于连接两个或多个数组。<br />该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。</h4>
<pre>

例子：
var array1 = ["Cecilie", "Lone"];
var array2 = ["Emil", "Tobias", "Linus"];
var array3 = ["Robin"];

var children = hege.concat(array1,array2);
打印children 会出现结果：Cecilie,Lone,Emil,Tobias,Linus,Robin
</pre>
		<h3>entries() 方法</h3>
		<h4>定义和用法：</h4>
		<h4>entries() 方法返回一个数组的迭代对象，该对象包含数组的键值对 (key/value)。<br />迭代对象中数组的索引值作为 key， 数组元素作为 value。</h4>
		<pre>

例子：
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.entries();

document.getElementById("demo1").innerHTML = x.next().value; //输出0,Banana
document.getElementById("demo2").innerHTML = x.next().value; //输出1,Orange
document.getElementById("demo3").innerHTML = x.next().value; //输出2,Apple
 // x.next() 用来调用entrise返回的迭代对象。打印这个可以看到一个对象如
 console.log(x.next())  //打印结果 {done:false,value:[3,"Mango"]}
 //当我们再次调用next()方法时候
 x.next()
 console.log(x.next()) 
 //这时已经迭代到我们对象最后数值没有数值可以获取的时候 {done:true ,value:undefined} 
		</pre>
		<h3>every() 方法</h3>
		<h4>定义和用法：</h4>
		<h4>every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）。<br />
			every() 方法使用指定函数检测数组中的所有元素：<br />
			如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。<br />
			如果所有元素都满足条件，则返回 true。<br />
			注意： every() 不会对空数组进行检测。<br />
			注意： every() 不会改变原始数组。</h4>
		<pre>
			
例子：
var ages = [32, 33, 16, 40];

function checkAdult(age) {
    return age >= 18;
}

function myFunction() {
    document.getElementById("demo").innerHTML = ages.every(checkAdult); //返回结果为false
}
		</pre>
		<h3>find() 方法</h3>
		<h4>定义和用法：</h4>
		<h4>find() 方法返回通过测试（函数内判断）的数组的第一个元素的值。<br />
		find() 方法为数组中的每个元素都调用一次函数执行：<br />
		当数组中的元素在测试条件时返回 true 时, find() 返回符合条件的元素，之后的值不会再调用执行函数。<br />
		如果没有符合条件的元素返回 undefined<br />
		注意: find() 对于空数组，函数是不会执行的。<br />
		注意: find() 并没有改变数组的原始值。</h4>
		<pre>
例子：
var ages = [3, 10, 18, 20];
 
function checkAdult(age) {
    return age >= 18;
}
 
function myFunction() {
    document.getElementById("demo").innerHTML = ages.find(checkAdult); 
     //返回结果为18,检测到条件满足后将不会继续判断
}
		</pre>
		<h3>forEach() 方法</h3>
		<h4>定义和用法：</h4>
		<h4>forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。<br />注意: forEach() 对于空数组是不会执行回调函数的。</h4>
		<pre>
例子：
< button onclick="numbers.forEach(myFunction)">点我</ button >
< p id="demo"></ p >
 
< script >
demoP = document.getElementById("demo");
var numbers = [4, 9, 16, 25];
function myFunction(item, index) {
    demoP.innerHTML = demoP.innerHTML + "index[" + index + "]: " + item + "< br >";  
}
//打印结果
index[0]: 4
index[1]: 9
index[2]: 16
index[3]: 25
</ script >
		</pre>
		<h3>map() 方法</h3>
		<h4>定义和用法：</h4>
		<h4>map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。<br />
		map() 方法按照原始数组元素顺序依次处理元素。<br />
		注意： map() 不会对空数组进行检测。<br />
		注意： map() 不会改变原始数组。</h4>
		<pre>
例子：
var numbers = [4, 9, 16, 25];

var mapnum=numbers.map(function(num){
	console.log(num) //这个时候num就等于一次传入的参数4,9,16,25
	num=num+1
	return num   //记得return 操作后的数据
});
//这时 mapnum将会是一个全新的数组 [5,10,17,26]

		</pre>
		<h1>数组的方法还有很多很多，我只是举例了几种。剩下的都可以在最上面的表格中看见</h1>
	</div>
</template>

<script>
	export default{
		name:"Id10",
		data(){
			return {
				
			}
		}
	}
</script>

<style lang="scss">
	#id10{
		text-align: left;
		table.reference, table.tecspec{
		    border-collapse: collapse;
		    width: 100%;
		    margin-bottom: 4px;
		    margin-top: 4px;
		}
		table.reference tr:nth-child(odd) {
		    background-color: #f6f4f0;
		}
		table.reference tr:nth-child(even) {
		    background-color: #fff;
		}
		table.reference th {
		    color: #fff;
		    background-color: #555;
		    border: 1px solid #555;
		    font-size: 12px;
		    padding: 3px;
		    vertical-align: top;
		    text-align: left;
		}
		table.reference td {
		    line-height: 2em;
		    min-width: 24px;
		    border: 1px solid #d4d4d4;
		    padding: 5px;
		    padding-top: 7px;
		    padding-bottom: 7px;
		    vertical-align: top;
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
		h1{
			font-size: 20px;
			font-weight: 600;
			margin: 8px 0px;
		}
		h3{
			font-size: 20px;
			margin: 10px 0;
			color: #64854c;
		}
	}
</style>