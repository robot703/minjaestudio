<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@800&family=Roboto+Mono:wght@600&display=swap" rel="stylesheet">
    
    <div class="center-content">
        <div class="center-navbar" style="font-size: 5vh;">
            <b>JOMINJAE STUDIO</b>
        </div>
        
        <div class="center-navbar">
            <ul class="nav justify-content-end" style="font-size: 2.5vh;">
                <li class="nav-item">
                    <router-link to="/" class="nav-link" id="navcolor">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="Project1" class="nav-link" id="navcolor">Project#1</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="Project2" class="nav-link" id="navcolor">Project#2</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="Project3" class="nav-link" id="navcolor">Project#3</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="etc" class="nav-link" id="navcolor">etc</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'navbar',
}
</script>

<style>

    .center-content {
        font-family: 'Nanum Gothic', sans-serif;
        font-family: 'Roboto Mono', monospace;
        display: flex;
        justify-content: center;
    }

    .center-navbar {
        float: left;
        margin: 25px 60px; /* 여백 조정 */
    }
    .nav-link{
        margin: 10px 30px 0 30px;
    }
    
    #navcolor{
        color: black;
    }
    #navcolor:hover{
        color: rgb(219, 200, 200);
    }
</style>
