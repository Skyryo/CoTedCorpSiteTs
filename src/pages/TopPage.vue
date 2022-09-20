<script setup lang="ts">
import TheHeader from '../components/TheHeader.vue';
import TheFooter from '../components/TheFooter.vue';
import MainVisual from '../components/MainVisual.vue';
import CorporatePhilosophy from '../components/CorporatePhilosophy.vue';
import SectionTitle from '../components/SectionTitle.vue';
import RepresentiveMessage from '../components/RepresentiveMessage.vue';
import BusinessContent from '../components/BusinessContent.vue';

</script>
<template>
    <div>
        <TheHeader />
        <MainVisual />
        <CorporatePhilosophy />
        <RepresentiveMessage>代表メッセージ</RepresentiveMessage>
        <BusinessContent>事業内容</BusinessContent>
        <TheFooter />
    </div>
</template>