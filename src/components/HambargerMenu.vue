<script setup>
    const hamOpen = () => {
        const toggle = document.getElementById('toggle')
        const headerNav = document.getElementById('header-nav')

        toggle.addEventListener('click', () => {
        // activeクラスの付け替え
        headerNav.classList.toggle('open')
    })
}

</script>
<template>
    <button type="button" class="ham-btn" id="toggle" @click="hamOpen()">
        <span class="ham-menu"></span>
    </button>
</template>
<style scoped>
    .ham-btn {
        background-color: #2d0425;
        width:56px;
        height: 56px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 100;
    }
    .ham-menu {
        height: 1px;
        width: 24px;
        background-color: white;
        position: relative;
    }
    .ham-menu::after, .ham-menu::before {
        content: "";
        height: 1px;
        width: 24px;
        background-color: white;
        position: absolute;       
    }
    .ham-menu::after {
        top:8px;
    }
    .ham-menu::before {
        top:-8px;
    }
</style>