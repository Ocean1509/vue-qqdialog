export default(router)=>{
	router.map({
		'/':{
			name:'index',
			component:(resolve)=>{
				require(['./views/index.vue'],resolve)
			}
		},
		'/chat/:id':{
			name:'chat',
			component:(resolve)=>{
				require(['./views/chat.vue'],resolve)
			}
		}
	})
}