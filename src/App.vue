<template>
	<div id="app">
		<button @click="get()">
			Get
		</button>
	</div>
</template>

<script>

import Api from './services/api'

export default {
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