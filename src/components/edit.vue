<template>
		<div class="dialogbg" @click='close'></div>
		<div class="dialogs">
			<h3>编辑</h3>
			<div class="group">
				<span>姓名</span>
				<input type="text" class="form-control" v-model='name'></div>
			<div class="group">
				<span>年龄</span>
				<input type="text" class="form-control" v-model='age'></div>
			<div class="group">
				<span>性别</span>
				<select v-model='sex'>
					<option value='男'>男</option>
					<option value="女">女</option>
				</select>
			</div>
			<button @click="save">保存</button>
			<button @click="close">关闭</button>
	</template>
<script>
	export default{
		data(){
			return{
				name:this.info.name,
				age:this.info.age,
				sex:this.info.sex
			}
			
		},
		methods:{
			close(){
				this.show=true
			},
			save(){
				this.info.name=this.name;
				this.info.age=this.age;
				this.info.sex=this.sex;
				this.show=true
			}
		},
		props:['show','info']
	}
</script>
	<style scoped>
.dialogbg{content: "";position: fixed;top: 0;left: 0;right: 0;bottom: 0;z-index: 1000;opacity: 0;background: rgba(0, 0, 0, 0.5);opacity: 1;}

.dialogs{position: absolute;z-index:9999;width:250px;top:0;left:0;top:30%;left:30%;border-radius: 6px;background-color: #fff;padding:0 40px;padding-bottom:40px;}
button{margin-top:20px;}
.group{margin:10px;}
</style>