<template>
	<div id="id6">
		<h3>首先 第一个，如何获取网页url 的search 参数，也就是？之后的参数，列入www.baidu.com?a=200</h3>
		<h4>想要获取到a=200这个参数，操作如下。</h4>
<pre><span style="color: #008000;">/*</span><span style="color: #008000;">*
 * 获取请求参数
 * @param key
 * @returns {*}
 </span><span style="color: #008000;">*/</span>
<span style="color: #0000ff;">function</span><span style="color: #000000;"> getRequestParameter(key){
    </span><span style="color: #0000ff;">var</span> params =<span style="color: #000000;"> getRequestParameters();
    </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> params[key];
}

</span><span style="color: #008000;">/*</span><span style="color: #008000;">*
 * 获取请求参数列表
 * @returns {{}}
 </span><span style="color: #008000;">*/</span>
<span style="color: #0000ff;">function</span><span style="color: #000000;"> getRequestParameters(){
    </span><span style="color: #0000ff;">var</span> arr = (location.search || "").replace(/^\?/,'').split("&amp;"<span style="color: #000000;">);
    </span><span style="color: #0000ff;">var</span> params =<span style="color: #000000;"> {};
    </span><span style="color: #0000ff;">for</span>(<span style="color: #0000ff;">var</span> i=0; i&lt;arr.length; i++<span style="color: #000000;">){
        </span><span style="color: #0000ff;">var</span> data = arr[i].split("="<span style="color: #000000;">);
        </span><span style="color: #0000ff;">if</span>(data.length == 2<span style="color: #000000;">){
            params[data[</span>0]] = data[1<span style="color: #000000;">];
        }
    }
    </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> params;
}
<h3>第二网页的hash参数  如何获取网页url 的hash参数，也就是#之后的参数，列入www.baidu.com#b=200</h3>
<h4>想要获取到b=200这个参数，操作如下。</h4>
</span><span style="color: #008000;">/*</span><span style="color: #008000;">*
 * 获取hash参数
 </span><span style="color: #008000;">*/</span>
<span style="color: #0000ff;">function</span><span style="color: #000000;"> getHashParameter(key){
    </span><span style="color: #0000ff;">var</span> params =<span style="color: #000000;"> getHashParameters();
    </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> params[key];
}

</span><span style="color: #0000ff;">function</span><span style="color: #000000;"> getHashParameters(){
    </span><span style="color: #0000ff;">var</span> arr = (location.hash || "").replace(/^\#/,'').split("&amp;"<span style="color: #000000;">);
    </span><span style="color: #0000ff;">var</span> params =<span style="color: #000000;"> {};
    </span><span style="color: #0000ff;">for</span>(<span style="color: #0000ff;">var</span> i=0; i&lt;arr.length; i++<span style="color: #000000;">){
        </span><span style="color: #0000ff;">var</span> data = arr[i].split("="<span style="color: #000000;">);
        </span><span style="color: #0000ff;">if</span>(data.length == 2<span style="color: #000000;">){
             params[data[</span>0]] = data[1<span style="color: #000000;">];
        }
    }
    </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> params;
}

</span><span style="color: #0000ff;">function</span><span style="color: #000000;"> getCookies(name){
    </span><span style="color: #0000ff;">var</span> arr, reg = <span style="color: #0000ff;">new</span> RegExp("(^| )" + name + "=([^;]*)(;|$)"<span style="color: #000000;">);
    </span><span style="color: #0000ff;">if</span> (arr =<span style="color: #000000;"> document.cookie.match(reg)) {
        </span><span style="color: #0000ff;">var</span> result = unescape(arr[2<span style="color: #000000;">]);
        result </span>= result.replace(/^\"|\"$/g, "").replace(/\\\"/g, "\""<span style="color: #000000;">);
        </span><span style="color: #0000ff;">try</span><span style="color: #000000;">{
            </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> JSON.parse(result);
        }
        </span><span style="color: #0000ff;">catch</span><span style="color: #000000;">(e){}
        </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> result;
    }
    </span><span style="color: #0000ff;">else</span><span style="color: #000000;"> {
        </span><span style="color: #0000ff;">return</span> <span style="color: #0000ff;">null</span><span style="color: #000000;">;
    }
}</span></pre>
 <h3>代码如上，也是比较实用的俩个方法。</h3>
	</div>
</template>

<script>
	export default{
		name:"Id6",
		data(){
			return{
				message:"{{ message }}"
			}
		}
	}
</script>

<style lang="scss">
	#id6{
		text-align: left;
		h3{
			text-align: left;
			margin-top: 15px;
			
		}
		h4{
			text-align: left;
		}
	}
</style>