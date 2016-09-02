<template>
	<div class="qqbox">
		<div class="left">
			<message :info='info'></message>
			<search :contacts='contacts'></search>
		</div>
		
	</div>
	
	
</template>
<script>
	export default {
		data(){
			return {
				val:'',
				info:{
					name:'张三',
					age:24,
					sex:'男'
				},
				contacts:[
					{
						name:'李四',
						age:25,
						sex:'男',
					},
					{
						name:'王五',
						age:24,
						sex:'女'
					},
					{
						name:'方六',
						age:22,
						sex:'女'
					},
					{
						name:"小吴",
						age:15,
						sex:"男",
					},
					{
						name:"王艳",
						age:20,
						sex:"女",
					},
					{
						name:"沃野",
						age:24,
						sex:"男",
					}
				]
			}
		},
		route(transition){
			console.log(transition.to.params.id)
			transition.next()
		},
		components:{
			message:require('../components/message.vue'),
			search:require('../components/search.vue'),
		}
	}
</script>
<style scoped>
	.qqbox{width:1000px;margin:20px auto;overflow: hidden;border:1px solid #c7c7c7;background-color:#f8f8f8;}
	.left{width:30%;float:left;background-color: #c7c7c7;overflow: hidden;height: 590px}
	.right{width:70%;float: left}
	.words{margin:20px;background-color: #fff;font-size: 20px;outline:none;height: 100px;padding:10px 20px; }
</style>