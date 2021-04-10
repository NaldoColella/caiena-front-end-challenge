<template>
	<div id="app">
		<UserList :users="users"/>
		
		<button @click="get()">
			Get
		</button>
	</div>
</template>

<script>
import UserList from '@/components/UserList.vue'

export default {
	components: { UserList },
	data() {
		return {
			message: 'Setting up project structure.',
			users: []
		};
	},
	methods: {
		
	}
};
</script>

<style>
#app {
	
}
</style>