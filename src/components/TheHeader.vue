<script setup lang="ts">
    import HambargerMenu from './HambargerMenu.vue';
    const navItems = [
        {
            value:'企業理念',
            href:'#section-01'
        },
        {
            value:'代表メッセージ',
            href:'#section-02'
        },
        {
            value:'事業内容',
            href:'#section-03'
        },
    ]
</script>
<template>
    <div class="header container-1280">
        <div class="header-img">
            <router-link to="/">
                <img src="./assets/img/headerLogo.png"  style="height:40px" alt="OASISロゴ">
            </router-link>
        </div>
        <hambarger-menu />
        <nav id="header-nav" class="header-nav">
            <li class="nav-item" v-for="navItem in navItems">
                <a class="nav-link" :href="navItem.href">{{navItem.value}}</a>
            </li>
            <li class="nav-item">
                <router-link to="/form">お問い合わせ</router-link>
            </li>
        </nav>
    </div>
</template>
<style scoped>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        width: 100%;
    }
    .header-img {
        height: 40px;
        padding: .5rem;
    }
    .header-nav {
        display: none;
    }
    .open {
        display: block;
        transition: .5s;
        position: absolute;
        top: 0;
        right: 0;
        height: 100vh;
        z-index: 50;
        width: 50%;
        background-color: aliceblue;
        color:#2d0425 ;
        padding: 60px 1rem;
        line-height: 3rem;
    }
    @media screen and (min-width: 720px) {
        .header {
            position: relative;
        }
        .header-nav {
            display: flex;
        }
        .nav-item {
            margin: 1rem;
        }
        .ham-btn {
            display: none;
        }
    }
</style>