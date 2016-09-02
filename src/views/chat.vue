<template>
	<div class="qqbox">
		<div class="left">
			<message :info='info'></message>
			<search :contacts='contacts'></search>
		</div>
		<div class="right" v-if='!$loadingRouterData'>
			<dialog :title='title' :all='all' value="{{title}}"></dialog>
			<div class="words" contenteditable="true" @keyup.13='enter(e)' id="words">
				
			</div>
		</div>
	</div>
	
	
</template>
<script>
	export default {
		data(){
			return {
				val:'',
				title:'',
				info:{
					name:'张三',
					age:24,
					sex:'男'
				},
				text:[],
				all:[],
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
		route:{
			data(transition){
				this.title=transition.to.params.id;
				this.all=this.getData();
				this.text=this.all
				this.$loadingRouterData=false;
			}
		},
		methods:{
			enter(e){
				var content=this.getVal();
				var time=this.getTime();
				this.text.push({
					time:time,
					content:content
				})
				sessionStorage[this.title]=JSON.stringify(this.text);
				this.all=JSON.parse(sessionStorage[this.title])
				document.getElementById('words').innerText=null;
			},
			getVal(){
				return document.getElementById('words').innerText;
				
			},
			getData(){
				console.log(sessionStorage[this.title]);
				if(!sessionStorage[this.title]){
					return []
				}else{
					return JSON.parse(sessionStorage[this.title])
				}
			},
			getTime(){
				var now=new Date();
				return now.getFullYear()+','+now.getMonth()+','+now.getDate()+now.getHours()+":"+now.getMinutes()+":"+now.getSeconds()
			}
		},
		components:{
			message:require('../components/message.vue'),
			search:require('../components/search.vue'),
			dialog:require('../components/dialog.vue'),
		}
	}
</script>
<style scoped>
	.qqbox{width:1000px;margin:20px auto;overflow: hidden;border:1px solid #c7c7c7;background-color:#f8f8f8;}
	.left{width:30%;float:left;background-color: #c7c7c7;overflow: hidden;height: 590px}
	.right{width:70%;float: left}
	.words{margin:20px;background-color: #fff;font-size: 20px;outline:none;height: 100px;padding:10px 20px; }
</style>