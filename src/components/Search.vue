<template>
	<form v-on:submit.prevent="searchUsers">
    <label for="name">Nome</label>
    <input
      v-model="searchText"
      id="name"
      placeholder="Digite um nome"
    />
    <button>Pesquisar</button>
  </form>
</template>

<script>
export default {
	data: () =>	({ 
		searchText: '' 
	}),
	methods:{
		searchUsers() {
			this.$emit('search', this.searchText);
		}
	}
}  
</script>