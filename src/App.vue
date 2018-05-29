<template>
  <div id="app">
  	<Headernav></Headernav>
    <div id="main">
    	<router-view/>
    	<Mainright></Mainright>
    </div>
    <Mfooter></Mfooter>
  </div>
</template>

<script>
import Headernav from "@/components/Headernav.vue"
import Mfooter from "@/components/Mfooter.vue"
import Mainright from "@/components/Mainright.vue"

export default {
  name: 'App',
  components:{
  	 Headernav,Mfooter,Mainright
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/*重置样式*/
html, body, div, span, object, iframe,
		h1, h2, h3, h4, h5, h6, p, blockquote, pre,
		abbr, address, cite, code,
		del, dfn, em, img, ins, kbd, q, samp,
		small, strong, sub, sup, var,
		b, i,
		dl, dt, dd, ol, ul, li,
		fieldset, form, label, legend,
		table, caption, tbody, tfoot, thead, tr, th, td,
		article, aside, canvas, details, figcaption, figure, 
		footer, header, hgroup, menu, nav, section, summary,
		time, mark, audio, video {
		    margin:0;
		    padding:0;
		    border:0;
		    outline:0;
		    font-size:100%;
		    vertical-align:baseline;
		    background:transparent;
		}
		body,html{
			font-size: 16px
		}
		h1,h2,h3,h4,h5,h6,em,i {
		    font-weight: 100;
		    font-style: normal
		}
		ul,ol,li {
		    list-style-type: none
		}
		a {
		    color: #666;
		    text-decoration: none;
		    outline: 0
		}
		a:hover {
		    text-decoration: none
		}
		#main{
			display: flex;

		}

</style>
