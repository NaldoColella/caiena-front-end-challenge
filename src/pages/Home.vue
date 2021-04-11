<template>
    <div>
        <Search
            @search="getUsers"
        />
        <UserList
            :users="users"
            :totalCount="totalCount"
            :searchText="searchText"
        />
    </div>
</template>

<script>
import Api from '@/services/api'
import Search from '@/components/Search'
import UserList from '@/components/UserList'

export default {   
    components: { Search, UserList },
    data:() => ({
        users: [],
        totalCount: 0,
        searchText: ''
    }),
    methods:{
        getUsers(value){
            this.searchText = value;
            Api.getUsers(value).then((res) => {
				this.users = res.items;
                this.totalCount = res.total_count
			});
        }
    },
}  
</script>
<style>
</style>