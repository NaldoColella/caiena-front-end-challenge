<template>
    <div>
        <Search
            @search="getUsers"
        />
        <UserList
            :users="users"
            :pageCount="pageCount"
            :searchText="searchText"
            @pageChange="getUsers"
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
        pageCount: 0,
        searchText: ''
    }),
    methods:{
        getUsers(value, page = 1){
            this.searchText = value;
            Api.getUsers(value, page).then((res) => {
				this.users = res.items;
                this.pageCount = Math.ceil(res.total_count / 20);
			});
        }
    },
}  
</script>
<style>
</style>