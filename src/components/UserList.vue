<template>
    <div class="UserList">        
        <UserCard
			v-for="(user, index) in users"
			:user="user"
			:index="index"
			:key="user.id"
		/>
    </div>
</template>

<script>
import UserCard from './UserCard'

export default {
    components: { UserCard },
    props:{
        users:{
            type: Array
        },
        totalCount:{
            type: Number,
            default: 0
        },
        searchText: {
            type: String,
            dafault: ''
        }
    },
    }
}  
</script>
<style>
.UserList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>