<template>
	<div class="search">
		<input type="text" placeholder='搜索搜索' v-model='search'>
		<ul>
			<li v-for="person in contacts | filterBy search" v-link="{name:'chat',params:{id:person.name}}">{{person.name}},{{person.age}},{{person.sex}}</li>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				search:''
			}
		},
		props:['contacts']
	}
</script>
<style scoped>
	.search{width:100%;float:left;margin-bottom:150px; }
	input{border-radius:5px;outline:0;border:0;display: inline-block;display: inline-block;height: 30px;padding:0 10px;width:200px;margin-left:40px;margin-bottom:12px;}
	ul{margin-top:0;}
	ul li{list-style: none;border:1px solid #c7c7c7;background-color: #fff;width:218px;border-radius:5px;line-height: 40px;color:#777;text-align: center;cursor:pointer;}
</style>