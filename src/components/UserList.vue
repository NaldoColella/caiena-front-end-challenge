<template>
    <div class="UserList">    
        <user-card
			v-for="(user, index) in users"
			:user="user"
			:index="index"
			:key="user.id"
		></user-card>
    </div>
</template>

<script>
import UserCard from './UserCard'

export default {
    components: { UserCard },
    props:{
        users: { required: true }
    }
}  
</script>
<style>
#app {
  
}
</style>