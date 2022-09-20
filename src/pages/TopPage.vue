<script setup lang="ts">
import TheHeader from '../components/TheHeader.vue';
import TheFooter from '../components/TheFooter.vue';
import MainVisual from '../components/MainVisual.vue';
import CorporatePhilosophy from '../components/CorporatePhilosophy.vue';
import SectionTitle from '../components/SectionTitle.vue';
import RepresentiveMessage from '../components/RepresentiveMessage.vue';

</script>
<template>
    <div>
        <TheHeader />
        <MainVisual />
        <CorporatePhilosophy />
        <RepresentiveMessage>代表メッセージ</RepresentiveMessage>
        <TheFooter />
    </div>
</template>