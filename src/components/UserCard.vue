<template>
    <div class='UserCard'>
        <img v-bind:src="user.avatar_url"/>
        <p>{{user.login}}</p>
        <a v-bind:href="user.html_url">Profile</a>
    </div>
</template>

<script>
export default {
    props:{
        user: { 
            type: Object,
            required: true
        }
    }
}  
</script>
<style>
    .UserCard {
        width: 20%;        
        padding: 0px 2% 0px 2%;
        box-sizing: border-box;
    }
    .UserCard img {
        border-radius: 50%;
    }
    .UserCard img, .UserCard p, .UserCard a {
        width:100%;
    }
</style>