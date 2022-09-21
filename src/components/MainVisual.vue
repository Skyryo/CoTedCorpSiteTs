<template>
    <div class="mv-container">
        <div class="mv-img" id="section-0">
            <img src="../assets/img/mv_photo_pc.png" alt="日本を挑戦できる社会に">
        </div>
        <h1 class="mv-h1">Co-ted</h1>
        <p class="mv-p">日本を強くし、挑戦できる社会に</p>
    </div>
</template>
<style scoped>
    .mv-container {
        position: relative;
        display: flex;
        justify-content: center;
        width: 100%;
    }
    .mv-img img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
        object-position: 75%;
    }
    .mv-h1, .mv-p {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
    .mv-h1 {
        right: 0;
        font-size: calc(100vw/3.2);
        color: #2D042523;
        font-weight: bold;
    }
    .mv-p {
        font-size: 18px;
        font-weight: bold;
    }
    @media screen and (min-width:1280px) {
        .mv-container {
            display: block;
       }
        .mv-h1 {
            font-size: 340px;
            font-weight: bold;
        }
        .mv-p {
            right: 3rem;
            transform: translateY(-220px);
            font-size: 40px;
        }
    }
</style>