<template>
    <div class='UserCard'>
        <img v-bind:src="user.avatar_url"/>
        <div class="UserInfo">
            <a v-bind:href="user.html_url">{{user.login}}</a>
        </div>
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
        /* padding: 2%; */
        box-sizing: border-box;
        /* background: #666; */
        text-align: center;
        position: relative;
    }
    .UserCard:hover .UserInfo{
        opacity: 1;
    }
    .UserCard:hover::after{
        opacity: 0.6;
        z-index: 7;
    }
    .UserCard:after{
        background:rgb(125 125 125);
        opacity: 0;
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0px;
        transition: 0.3s;
        top: 0px;
    }
    .UserCard img{
        width:100%;
    }
    .UserInfo{
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        z-index: 8;
        height: 100%;
        opacity: 0;
        transition: 0.3s;
    }
    .UserInfo a{
        text-decoration: none;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        height: 100%;
        align-items: center;
        font-family: fantasy;
        color: #fff;
        font-size: 20px;
        letter-spacing: 2px;
        padding: 0px 20px;
        word-break: break-word;
    }
</style>