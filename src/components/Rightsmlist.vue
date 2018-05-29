<template>
	<div>
		<router-link :to="info" >
			▶{{this.listdata.smtitle}}
		</router-link>
	</div>
</template>

<script>
	export default{
		name:"Rightsmlist",
		props:["listdata"],
		data(){
			return{
				info:{
					path:'/nbook/nbooktext',
					query:{data:this.listdata.textdata.id}
				}
			}
		}
	}
</script>

<style>
</style>