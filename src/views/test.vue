<template>
<div class="container">
        <input type="text" placeholder="手机号">
        <button>发送验证码</button>
        <input type="text" placeholder="验证码">
</div>
</template>

<style>
    .container{
        position: relative;
        width: 300px;
        background-color: #f1f1f1;
    }
    .container input{
        width: 100%;
        height: 30px;
    }
    .container button{
        position: absolute;
        top: 7px;
        right: 0;
        background-color: #fff;
        border: none;   
        outline: none;  
     }
</style>


