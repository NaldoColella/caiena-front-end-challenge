<template>
	<div id="app">
		<user-list :users="users"/>
		
		<button @click="get()">
			Get
		</button>
	</div>
</template>

<script>

import Api from './services/api'
import UserList from '@/components/UserList.vue'

export default {
	components: { 'user-list' : UserList },
	data() {
		return {
			message: 'Setting up project structure.',
			users: []
		};
	},
	methods: {
		get (){
			Api.getUsers().then((res) => {
				this.users = res.items;
			});
		}
	}
};
</script>

<style>
#app {
	
}
</style>