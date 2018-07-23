<template>
	<div id="id14">
		<h2>首先还是先来个官方文档链接(<a href="http://echarts.baidu.com/index.html">Echarts.js</a>),文档和api在官方网站已经写得比较详细了。</h2>
		<h2>我能整理的东西不多，我这边整理的东西更偏向个人在学习中所整理的笔记。方便我查阅。</h2>
		<h1>Echarts 的配置项简单介绍</h1>
		<h4><span>1.title</span>  ---- 标题组件，包含主标题和副标题。</h4>
		<h2>title配置是echarts的标题组件。title里面有很多详细的配置如下：</h2>
		<h3>id: (string) 组件 ID。默认不指定。指定则可用于在 option 或者 API 中引用组件。</h3>
		<h3>show: (true/false) 是否显示标题组件。</h3>
		<h3>text: (string)  主标题文本，支持使用 \n 换行。</h3>
		<h3>link: (string)  主标题文本超链接。</h3>
		<h3>target: ("self"/"blank")  指定窗口打开主标题超链接。</h3>
		<h3>textStyle:{}  标题的文字样式设置，参数很多 列如:color,fonStyle,fontWeight,fontFamily,fontSize</h3>
		<h3>left:("auto"/"25px"/"25%") grid 组件离容器左侧的距离。</h3>
		<h3>top:("auto"/"25px"/"25%") grid 组件离容器上侧的距离。</h3>
		<h3>itemGap:("12px")  主副标题之间的间距。</h3>
		<h3>subtextStyle:{}  副标题样式。参数很多。。。</h3>
		<pre>
列子：
title : {
        text: '雨量流量关系图',
        subtext: '数据来自西安兰特水电测控技术有限公司',
        x: 'center',
        align: 'right'
    },
		</pre>
		<h4><span>2.legend</span>  ---- 图例组件。 也就是图形的小图标列表</h4>
		<h3>type:('plain'/'scroll')  图列的类型 普通图列，滚动翻页图列</h3>
		<pre>
列子：
legend: {
    data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
},
		</pre>
		<h4><span>3.grid</span>  ---- 直角坐标系内绘图网格，单个 grid 内最多可以放置上下两个 X 轴，左右两个 Y 轴。可以在网格上绘制折线图，柱状图，散点图（气泡图）。可以设置多个网格</h4>
		<pre>
列子：
grid: [
        {x: '7%', y: '7%', width: '38%', height: '38%'},
        {x2: '7%', y: '7%', width: '38%', height: '38%'},
        {x: '7%', y2: '7%', width: '38%', height: '38%'},
        {x2: '7%', y2: '7%', width: '38%', height: '38%'}
    ],
		</pre>
		<h4><span>4.xAxis</span>  ---- 直角坐标系 grid 中的 x 轴，一般情况下单个 grid 组件最多只能放上下两个 x 轴，多于两个 x 轴需要通过配置 offset 属性防止同个位置多个 x 轴的重叠</h4>
		<h4><span>5.yAxis</span>  ---- 直角坐标系 grid 中的 y 轴，一般情况下单个 grid 组件最多只能放左右两个 y 轴，多于两个 y 轴需要通过配置 offset 属性防止同个位置多个 Y 轴的重叠。</h4>
		<h4><span>6.polar</span>  ----极坐标系，可以用于散点图和折线图。每个极坐标系拥有一个角度轴和一个半径轴。</h4>
		<img src="@/assets/charts.png">
		<h4><span>7.radiusAxis</span>  ---- 极坐标系的径向轴。</h4>
		<pre>
列子：
如上面的，
radiusAxis: {
        type: 'category',  //类型category 适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
        data: days,  //数据。就是图中的时间数组
        axisLine: {  //轴线设置。
            show: false  //隐藏
        },
        axisLabel: {  //坐标轴刻度标签的相关设置。
            rotate: 45  //旋转角度
        }
    },
		</pre>
		<h4><span>8.angleAxis</span>  ---- 极坐标系的角度轴。</h4>
		<pre>
列子：
如上图,
angleAxis: {
        type: 'category', //类型
        data: hours,  //参数
        boundaryGap: false,  //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样。
        splitLine: { //坐标轴在 grid 区域中的分隔线。
            show: true,  //显示
            lineStyle: {  //线条样式
                color: 'red',
                type: 'dashed'
            }
        },
        axisLine: { //坐标轴轴线相关设置。
            show: false  //不显示。如果显示。则是最外层坐标轴形成封闭圆圈
        }
    },
		</pre>
		<h4><span>9.radar</span>  ---- 雷达图坐标系组件，只适用于雷达图。该组件等同 ECharts 2 中的 polar 组件。因为 3 中的 polar 被重构为标准的极坐标组件，为避免混淆，雷达图使用 radar 组件作为其坐标系。</h4>
		<h4><span>10.dataZoom[i]</span> ---- dataZoom 组件 用于区域缩放，从而能自由关注细节的数据信息，或者概览数据整体，或者去除离群点的影响。</h4>
		<img src="@/assets/charts2.png">
		<pre>
如图：
 dataZoom: [
        {
            type: 'slider',  //滑动条型数据区域缩放组件（dataZoomSlider） 
            show: true,   //显示
            xAxisIndex: [0],  //设置 dataZoom-inside 组件控制的 x轴
            					（即xAxis，是直角坐标系中的概念，参见 grid）。
            start: 1,  //数据窗口范围的起始百分比。范围是：0 ~ 100。表示 0% ~ 100%。
            end: 35    //数据窗口范围的结束百分比。范围是：0 ~ 100。
        },
        {
            type: 'slider',
            show: true,
            yAxisIndex: [0],
            left: '93%',
            start: 29,
            end: 36
        },
        {
            type: 'inside', //内置型数据区域缩放组件（dataZoomInside）
            xAxisIndex: [0],
            start: 1,
            end: 35
        },
        {
            type: 'inside',
            yAxisIndex: [0],
            start: 29,
            end: 36
        }
    ],
		</pre>
		<h4><span>11.visualMap[i]</span>  ---- visualMap 是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）。</h4>
		<h3>inRange --- 定义 在选中范围中 的视觉元素。（用户可以和 visualMap 组件交互，用鼠标或触摸选择范围）</h3>
		<h3>inRange.symbolSize  -- 设置图元的大小</h3>
		<h3>参数很多我们看例子。视觉映射有俩种类型。1.type:continuous 连续型 2.type:piecewise 分段型</h3>
		如下面俩个图:
		<img src="@/assets/echarts3.png">
		<img src="@/assets/echarts4.png">
		<pre>
如图中第一种：
visualMap: {
        type: 'continuous',  //类型为 连续型
        min: 0,  //最小值
        max: 1000000,  //最大值
        text:['High','Low'],  //头尾文字。
        realtime: false, //拖拽的时候是否实时更新
        calculable : true,  //显示 拖动箭头
        color: ['orangered','yellow','lightskyblue']  //过度颜色
    },

如图中第二种：
visualMap: {
		type:"piecewise",
        min: 0, 
        max: 300,
        splitNumber: 5,  //对于连续型数据，自动平均切分成几段。
        默认为5段。 连续数据的范围需要 max 和 min 来指定。
        color: ['#d94e5d','#eac736','#50a3ba'], 
        textStyle: {
            color: '#fff'  //文字样式的文字颜色
        }
    },
		</pre>
		<h4><span>12.tooltip</span> ---- 提示框组件。</h4>
		<pre>
提示框组件的通用介绍：

提示框组件可以设置在多种地方：

可以设置在全局，即 tooltip

可以设置在坐标系中，即 grid.tooltip、polar.tooltip、single.tooltip

可以设置在系列中，即 series.tooltip

可以设置在系列的每个数据项中，即 series.data.tooltip

提示框也就是鼠标移动上去所显示的内容组件
		</pre>
		<h4><span>13.axisPointer</span>  ----这是坐标轴指示器（axisPointer）的全局公用设置。鼠标悬浮到图上，可以出现标线和刻度文本。</h4>
		如图：
		<img src="@/assets/charts5.png">
		<pre>
axisPointer: {
            link: {xAxisIndex: 'all'}, //所联动的轴 
            label: {  //提示框的样式设置
                backgroundColor: '#777'
            }
        },
		</pre>
		<h4><span>14.toolbox</span>  ---- 工具栏。内置有导出图片，数据视图，动态类型切换，数据区域缩放，重置五个工具。</h4>
		如图中的右上角的工具栏:
		<img src="@/assets/charts6.png">
		<pre>
toolbox: {
        show: true,  //是否显示
        feature: { //各工具配置项。
            dataZoom: { // 数据区域缩放。目前只支持直角坐标系的缩放。
                yAxisIndex: 'none' 
                //指定哪些 yAxis 被控制。如果缺省则控制所有的y轴。
                //如果设置为 false 则不控制任何y轴。
                //如果设置成 3 则控制 axisIndex 为 3 的y轴。如果设置为 [0, 3] 
                //则控制 axisIndex 为 0 和 3 的y轴。
            },
            //数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新。
            dataView: {readOnly: false}, //是否不可编辑（只读）。
            magicType: {type: ['line', 'bar']}, //动态类型切换
            restore: {}, //配置项还原。
            saveAsImage: {} //保存截图下载
        }
    },
		</pre>
		<h4><span>15.brush</span> ---- brush 是区域选择组件，用户可以选择图中一部分数据，从而便于向用户展示被选中数据，或者他们的一些统计计算结果。</h4>
		如图：
		<img src="@/assets/charts7.png">
		<pre>
brush: {
        outOfBrush: { //定义 在选中范围外 的视觉元素
//可选的视觉元素有：
//symbol: 图元的图形类别。
//symbolSize: 图元的大小。
//color: 图元的颜色。
//colorAlpha: 图元的颜色的透明度。
//opacity: 图元以及其附属物（如文字标签）的透明度。
//colorLightness: 颜色的明暗度，参见 HSL。
//colorSaturation: 颜色的饱和度，参见 HSL。
//colorHue: 颜色的色调，参见 HSL。
            color: '#abc'
        },
        brushStyle: { //选框的默认样式
            borderWidth: 2,
            color: 'rgba(0,0,0,0.2)',
            borderColor: 'rgba(0,0,0,0.5)',
        },
        seriesIndex: [0, 1], //指定哪些 series 可以被刷选，可取值为：
//'all': 所有 series
//'Array': series index 列表
//'number': 某个 series index
        throttleType: 'debounce', //默认情况，刷选或者移动选区的时候，
        //会不断得发 brushSelected 事件，从而告诉外界选中的内容。
//throttleType 取值可以是：
//'debounce'：表示只有停止动作了（即一段时间没有操作了），
才会触发事件。时间阈值由 brush.throttleDelay 指定。
//'fixRate'：表示按照一定的频率触发时间，时间间隔由 brush.throttleDelay 指定。
        throttleDelay: 300,  //默认为 0 表示不开启 throttle。刷新动画延迟
        geoIndex: 0 //指定哪些 geo 可以被刷选。
			//可以设置 brush 是『全局的』还是『属于坐标系的』。
    },
		</pre>
		<h4><span>16.geo</span>  ---- 地理坐标系组件。地理坐标系组件用于地图的绘制，支持在地理坐标系上绘制散点图，线集。</h4>
		<h3>这个略。。需要外部引入js配合地图js一起使用。详情请看官网api</h3>
		<h4><span>17.parallel</span> ---- 平行坐标系介绍,平行坐标系（Parallel Coordinates） 是一种常用的可视化高维数据的图表。</h4>
		<img src="@/assets/charts8.png">
		<h4><span>parallelAxis </span> ---- 这个组件是平行坐标系中的坐标轴。</h4>
		<pre>
这俩个属性一起讲;
  parallelAxis: [
        {dim: 0, name: schema[0].text, inverse: true, max: 31, nameLocation: 'start'},
        {dim: 1, name: schema[1].text},
        {dim: 2, name: schema[2].text},
        {dim: 3, name: schema[3].text},
        {dim: 4, name: schema[4].text},
        {dim: 5, name: schema[5].text},
        {dim: 6, name: schema[6].text},
        {dim: 7, name: schema[7].text,
        type: 'category', data: ['优', '良', '轻度污染', '中度污染', '重度污染', '严重污染']}
    ],
//schema 所对应的值是：
var schema = [
    {name: 'date', index: 0, text: '日期'},
    {name: 'AQIindex', index: 1, text: 'AQI'},
    {name: 'PM25', index: 2, text: 'PM2.5'},
    {name: 'PM10', index: 3, text: 'PM10'},
    {name: 'CO', index: 4, text: ' CO'},
    {name: 'NO2', index: 5, text: 'NO2'},
    {name: 'SO2', index: 6, text: 'SO2'},
    {name: '等级', index: 7, text: '等级'}
];

    parallel: {
        left: '5%',
        right: '13%',
        bottom: '10%',
        top: '20%',
        parallelAxisDefault: {
            type: 'value',
            name: 'AQI指数',
            nameLocation: 'end',
            nameGap: 20,
            nameTextStyle: {
                fontSize: 12
            }
        }
    },
		</pre>
		<h4><span>19.singleAxis</span>  ---- 单轴。可以被应用到散点图中展现一维数据，</h4>
		<img src="@/assets/echarts9.png">
		<pre>
//hours内容
//var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
//        '7a', '8a', '9a','10a','11a',
//        '12p', '1p', '2p', '3p', '4p', '5p',
//        '6p', '7p', '8p', '9p', '10p', '11p'];
option.singleAxis.push({
        left: 150,
        type: 'category', //类型为离散图
        boundaryGap: false, //两边留白
        data: hours,  //刻度内容
        top: (idx * 100 / 7 + 5) + '%',  //距离头部的位置
        height: (100 / 7 - 10) + '%',  //高度
        axisLabel: {  //坐标轴刻度标签的相关设置。
            interval: 2  //刻度间隔。假如写1 则每隔一个就显示一个刻度
        }
    });

    option.series.push({
        singleAxisIndex: idx, //图表所对应的每隔轴编号
        coordinateSystem: 'singleAxis', //坐标轴类型就要设置为singleAxis
        type: 'scatter',
        data: [], 
        symbolSize: function (dataItem) {
            return dataItem[1] * 4; //圆点大小
        }
    });
		</pre>
		<h4><span>20.timeline</span>  ---- timeline 组件，提供了在多个 ECharts option 间进行切换、播放等操作的功能。</h4>
		<img src="@/assets/charts10.png">
		<pre>
timeline: {
    // y: 0,
    axisType: 'category',  //轴类型为category类目轴，适用于离散的类目数据。
    // realtime: false,
    // loop: false,
    autoPlay: true, //自动轮播
    // currentIndex: 2,
    playInterval: 1000, //跳动速度
    // controlStyle: {
    //     position: 'left'
    // },
    data: [ //圆点内容
        '2002-01-01','2003-01-01','2004-01-01',
        {
            value: '2005-01-01',
            tooltip: {
                formatter: '{b} GDP达到一个高度'
            },
            symbol: 'diamond',
            symbolSize: 16
        },
        '2006-01-01', '2007-01-01','2008-01-01','2009-01-01','2010-01-01',
        {
            value: '2011-01-01',
            tooltip: {
                formatter: function (params) {
                    return params.name + 'GDP达到又一个高度';
                }
            },
            symbol: 'diamond',
            symbolSize: 18
        },
    ],
    label: {// hover提示内容
        formatter : function(s) {
            return (new Date(s)).getFullYear();
        }
    }
},
		</pre>
		<h4><span>21.graphic</span>  ---- graphic 是原生图形元素组件。可以支持的图形元素包括：image, text, circle, sector, ring, polygon, polyline, rect, line, bezierCurve, arc, group,</h4>
		<img src="@/assets/charts11.png">
		<pre>
这是一个完整的js例子
 	var dom = document.getElementById("box");
	var myChart = echarts.init(dom);
 	var symbolSize = 20;
	// 这个 data 变量在这里单独声明，在后面也会用到。
	var data = [[15, 0], [-50, 10], [-56.5, 20], [-46.5, 30], [-22.1, 40]];
	myChart.setOption({
	    xAxis: {
	        min: -100,
	        max: 80,
	        type: 'value',
	        axisLine: {onZero: false}  //坐标轴轴线相关设置。设置轴线是否在0刻度上
	    },
	    dataZoom: [
	        {
	            type: 'slider',
	            xAxisIndex: 0,
	            filterMode: 'empty'
	        },
	        {
	            type: 'slider',
	            yAxisIndex: 0,
	            filterMode: 'empty'
	        },
	        {
	            type: 'inside',
	            xAxisIndex: 0,
	            filterMode: 'empty'
	        },
	        {
	            type: 'inside',
	            yAxisIndex: 0,
	            filterMode: 'empty'
	        }
	    ],
	    yAxis: {
	        min: -30,
	        max: 60,
	        type: 'value',
	        axisLine: {onZero: false}  
	    },
	    visualMap: {   //是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）
	        min: -150,   //右边的 树形拉条，也就是数据映射组件，设置最小值
	        max: 200,  //设置映射最大值
	        calculable: true,  //是否启用托条
	        inRange: {  //定义 在选中范围中 的视觉元素。 可以设置颜色。类型。透明度等
	            color: ['#50a3ba', '#eac736', 'red']  //设置视觉元素颜色
	        },
	        textStyle: { //设置组件的文字样式
	            color: 'red'  
	        }
	    },
	    tooltip: { //提示框设置
	        trigger: 'item',  //触发类型    item 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
	                        //'axis'    坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
	                        //'none'    什么都不触发
	        formatter: function (params) {  // hover触发的 提示框文本内容,params 是当前选中的图形内容
	            return params.data[0]+"/"+params.data[1];
	        }
	    },
	    series: [  //配置
	        {
	            id: 'a', //图形列表id号
	            type: 'line',
	            smooth: true,   //设置是否为平滑取曲线设置。
	            symbolSize: symbolSize*2, // 为了方便拖拽，把 symbolSize 尺寸设大了。
	            data: data  
	        }
	    ]
	});
    myChart.on('dataZoom', updatePosition); //监听视角拖动
	window.addEventListener('resize', updatePosition);  //浏览器窗口调整
	myChart.setOption({  //这个是在图表中申明多个图形元素，通过graphic来设置。
    // 声明一个 graphic component，里面有若干个 type 为 'circle' 的 graphic elements。
    // 这里使用了 echarts.util.map 这个帮助方法，其行为和 Array.prototype.map 一样，但是兼容 es5 以下的环境。
    // 用 map 方法遍历 data 的每项，为每项生成一个圆点。
    graphic: echarts.util.map(data, function (dataItem, dataIndex) { //通过mao遍历 data从而生成
        return {
            // 'circle' 表示这个 graphic element 的类型是圆点。
            type: 'circle',  //设置图片元素的类型

            shape: {
                // 圆点的半径。
                r: symbolSize / 2
            },
            // 用 transform 的方式对圆点进行定位。position: [x, y] 表示将圆点平移到 [x, y] 位置。
            // 这里使用了 convertToPixel 这个 API 来得到每个圆点的位置，下面介绍。
            position: myChart.convertToPixel('grid', dataItem),

            // 这个属性让圆点不可见（但是不影响他响应鼠标事件）。
            invisible: false,
            // 这个属性让圆点可以被拖拽。
            draggable: true,
            // 把 z 值设得比较大，表示这个圆点在最上方，能覆盖住已有的折线图的圆点。 z-index
            z: 100,
            // 此圆点的拖拽的响应事件，在拖拽过程中会不断被触发。下面介绍详情。
            // 这里使用了 echarts.util.curry 这个帮助方法，意思是生成一个与 onPointDragging
            // 功能一样的新的函数，只不过第一个参数永远为此时传入的 dataIndex 的值。
            ondrag: echarts.util.curry(onPointDragging, dataIndex)
        };

    })

});
	// myChart.convertFromPixel  这个为 myChart.convertToPixel 的逆向方法，
	// myChart.convertToPixel 是把data数值变成坐标轴定位。
	// myChart.convertFromPixel 是把坐标轴定位变成data数值
	 // 拖拽某个圆点的过程中会不断调用此函数。
	// 此函数中会根据拖拽后的新位置，改变 data 中的值，并用新的 data 值，重绘折线图，从而使折线图同步于被拖拽的隐藏圆点。
	function onPointDragging(dataIndex) {
	    // 这里的 data 就是本文最初的代码块中声明的 data，在这里会被更新。
	    // 这里的 this 就是被拖拽的圆点。this.position 就是圆点当前的位置。
	    data[dataIndex] = myChart.convertFromPixel('grid', this.position);
	    // 用更新后的 data，重绘折线图。
	    myChart.setOption({
	        series: [{
	            id: 'a',  //改变图形列表的id
	            data: data
	        }]
	    });
	}
     function updatePosition() {  //监听的是当缩放的时候重新设置远点的位置
	    // 对每个拖拽圆点重新计算位置，并用 setOption 更新。
	    myChart.setOption({
	        graphic: echarts.util.map(data, function (item, dataIndex) {
	            return {
	                position: myChart.convertToPixel('grid', item)
	            };
	        })
	    });
	}
		</pre>
		<h4><span>22.calendar </span> ---- 日历坐标系组件。</h4>
		<img src="@/assets/charts12.png">
		<pre>
 calendar: {
        top: 120, //margin-top距离
        left: 30,  //margin-left 距离
        right: 30, //margin-right 距离
        cellSize: ['auto', 15],  //日历大小。第一个参数是宽。第二个 是高
        range: '2018',  //日历年份
        itemStyle: {  //样式设置
            normal: {borderWidth: 0.5}
        },
        yearLabel: {show: false}  //设置日历坐标中 年的样式
    },
		</pre>
		<h4><span>23.dataset</span>  ---- ECharts 4 开始支持了 数据集（dataset）组件用于单独的数据集声明，从而数据可以单独管理，被多个组件复用，并且可以自由指定数据到视觉的映射。这在不少场景下能带来使用上的方便。</h4>
		<h4><span>24.aria</span>  ---- W3C 制定了无障碍富互联网应用规范集（WAI-ARIA，the Accessible Rich Internet Applications Suite），致力于使得网页内容和网页应用能够被更多残障人士访问。ECharts 4.0 遵从这一规范，支持自动根据图表配置项智能生成描述，使得盲人可以在朗读设备的帮助下了解图表内容，让图表可以被更多人群访问。</h4>
		<h4><span>25.series</span>系列列表。每个系列通过 type 决定自己的图表类型</h4>
		<h3>这个的列表内容太多了，首先要分十多种不一样的表格类型。然后每个表格类型中又有很多的参数。建议在官网上最对照查询。</h3>
		<pre>
简单的说一下有哪些类型:
1. <code>series[i]-line</code>  折线图
2. <code>series[i]-bar</code>   柱状/条形图
3. <code>series[i]-pie</code>   饼图/南丁格尔图
4. <code>series[i]-scatter</code>   散点（气泡）图
5. <code>series[i]-effectScatter</code>  带有涟漪特效动画的散点（气泡）图。
6. <code>series[i]-radar</code>  雷达图
7. <code>series[i]-tree</code>   树图
8. <code>series[i]-treemap</code> 是一种常见的表达『层级数据』『树状数据』的可视化形式。它主要用面积的方式，
9. <code>series[i]-sunburst</code> 旭日图（Sunburst）由多层的环形图组成，
10. <code>series[i]-boxplot</code> 可以称为『箱形图』、『盒须图』、『盒式图』、『盒状图』、『箱线图』
11. <code>series[i]-candlestick</code>  K线图
12. <code>series[i]-heatmap</code>  热力图
13. <code>series[i]-map</code>  地图
14. <code>series[i]-parallel</code> 平行坐标系的系列。
15. <code>series[i]-lines</code>  用于带有起点和终点信息的线数据的绘制，主要用于地图上的航线，路线的可视化
16. <code>series[i]-graph</code> 关系图。流程图
17. <code>series[i]-sankey</code> 桑基图
18. <code>series[i]-funnel</code>  漏斗图
19. <code>series[i]-gauge</code>  仪表盘
20. <code>series[i]-pictorialBar</code>  象形柱图
21. <code>series[i]-themeRiver</code>  主题河流
22. <code>series[i]-custom</code>  自定义图
		</pre>
		<h1>剩下的配置还很多，由于文章长度关系就不一一列举了，echarts的 <a href="http://echarts.baidu.com/option.html#title"> 官方文档</a>写的很详细很全面，有什么不懂的可以在 <a href="http://echarts.baidu.com/option.html#title">官方文档</a>上查询</h1>
	</div>
</template>

<script>
	export default{
		name:"Id14",
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="scss">
	#id14{
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