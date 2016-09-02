<template>
	<div class="contain">
		<h2>{{title}}对话框</h2>
		<ul class="show">
			<li v-for='list in all'>
				<p class="time">{{list.time}}</p>
				<p class="content">{{list.content}}</p>
			</li>
		</ul>
	</div>
	
	
</template>
<script>
	export default{
		props:['title','all'],
		
	}

</script>
<style>
	.contain{background-color: #fff;height: 360px;border-bottom:1px solid #c7c7c7;padding:30px;position: relative;padding-top:40px;overflow-y:scroll;}
	h2{position: absolute;margin:0;top:5px;left:270px;}
	ul.show{padding:0;}
	ul li{list-style: none;}
	.time{color:#777;font-size: 10px}
	.content{font-size: 16px;color:red;padding-left:12px;}


</style>