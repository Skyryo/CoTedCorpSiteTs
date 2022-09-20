<script setup></script>
<template>
  <footer>
    <div class="footer-container container-1280">
      <nav class="footer-nav">
        <router-link to="/">ホーム</router-link>
        |
        <router-link to="/form">お問い合わせ</router-link>
      </nav>
      <small>©2022 Co-ted Inc.</small>
    </div>
  </footer>
</template>
<style scoped>
    footer {
        background-color: #2d0425;
        color: white;
        text-align: center;
        padding: 40px 0;
    }
</style>
