<template>
	<div class="mess">
		<div class="img">
			<img src="../assets/image/dog.jpg" alt=""></div>
		<div class="detail">
			<p>姓名:{{info.name}}</p>
			<p>年龄:{{info.age}}</p>
			<p>性别:{{info.sex}}</p>
			
		</div>
		<button @click="edit">编辑</button>
	</div>
	<div class="edit" :class="{'edit-show':show}">
		<edit :show.sync='show' :info.sync='info'></edit>
	</div>
		

</template>
<script>
	export default{
		data(){
			return {
				show:true
			}
		},
		props:['info'],
		methods:{
			edit(){
				this.show=false
			}
		},
		components:{
			edit:require('./edit.vue')
		}

	}
</script>
<style scoped>
.mess{position: relative;}
	.img{float:left;border:1px solid black;border-radius:50px;width:100px;height: 100px;margin:10px;overflow: hidden;}
	img{width:100px;height: 100px;border-radius:3px;}
	.detail{float:left;height: 130px;}
	button{position: absolute;top:85px;left:216px;}
	.edit{overflow: hidden;}
	.edit-show{display: none}
</style>