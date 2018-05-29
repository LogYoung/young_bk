import Vue from 'vue'
import Router from 'vue-router'
//import Myindex from '@/pages/Myindex'

const Myindex = r => require.ensure([],()=>r(require("@/pages/Myindex.vue")),"index")
const Nbook = r => require.ensure([],()=>r(require("@/pages/Nbook.vue")),"Nbook")
const Talk = r => require.ensure([],()=>r(require("@/pages/Talk.vue")),"Talk")
const Myself = r => require.ensure([],()=>r(require("@/pages/Myself.vue")),"Myself")
const test = r => require.ensure([],()=>r(require("@/pages/test.vue")),"test")
const Logoin = r => require.ensure([],()=>r(require("@/pages/Logoin.vue")),"Logoin")
const Register = r => require.ensure([],()=>r(require("@/pages/Register.vue")),"Register")
const Nbooktext = r => require.ensure([],()=>r(require("@/pages/Nbooktext.vue")),"Nbook")


Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path: '/',
      name: 'Myindex',
      component: Myindex
  	},
    {
      path: '/logoin',
      name: 'Logoin',
      component: Logoin
    },
    {
    	path:"/nbook",
    	name:"Nbook",
    	component: Nbook,
    	children:[
    					{
					    	path:"/nbook/Nbooktext",
					    	name:"Nbooktext",
					    	component: Nbooktext
					     }]
    },
    ,
    {
    	path:"/talk",
    	name:"Talk",
    	component: Talk
    },
     {
    	path:"/myself",
    	name:"Myself",
    	component: Myself
    },
    {
    	path:"/register",
    	name:"Register",
    	component:Register
    }
    
  ]
})
