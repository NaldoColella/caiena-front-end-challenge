<template>
    <div class="UserList">        
        <UserCard
			v-for="(user, index) in users"
			:user="user"
			:index="index"
			:key="user.id"
		/>
        <BasePagination
            :current-page="currentPage"
            :page-count="pageCount"
            class="articles-list__pagination"
            @nextPage="pageChangeHandle('next')"
            @previousPage="pageChangeHandle('previous')"
            @loadPage="pageChangeHandle"
        />
    </div>
</template>

<script>
import UserCard from './UserCard'
import BasePagination from './BasePagination'

export default {
    components: { UserCard, BasePagination },
    props:{
        users:{
            type: Array
        },
        pageCount:{
            type: Number,
            default: 0
        },
        searchText: {
            type: String,
            dafault: ''
        }
    },
    data: () =>	({ 
		currentPage: 1
	}),
    computed:{
        validSearchText(){
            return this.searchText !== '';
        }
    },
    methods: {
        pageChangeHandle(value){
            switch (value) {
                case 'next':
                    this.currentPage += 1
                    break
                case 'previous':
                    this.currentPage -= 1
                    break
                default:
                    this.currentPage = value
            }
            this.$emit('pageChange', this.searchText, this.currentPage);
        }
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