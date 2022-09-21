<script setup>
import { ref } from "vue";

const BusiContentItems = ref([
  {
    id: 1,
    bcName: "コンサルティング事業",
    bcSubTitle:
      "各分野のトップコンサルタントがお客様の悩み発見から解決まで伴走型で承ります。",
    bcDescriptonLists: [
      "新規事業コンサルティング",
      "戦略コンサルティング",
      "ブランドコンサルティング",
      "マーケティングコンサルティング",
      "業務改善コンサルティング",
      "ＧＸコンサルティング",
    ],
    bcDescripton: "",
  },
  {
    id: 2,
    bcName: "リスクマネジメント事業",
    bcSubTitle:
      "昨今、環境問題や自然災害、経済安全保障等、企業を取り巻く環境はより一層厳しくなりました。当社ではそのようなお客様をサポートするために会社全体から部門単位での支援を行っております。",
    bcDescriptonLists: [
      "全社的リスクマネジメント（ERM）",
      "事業継続計画（BCP）",
      "サイバーセキュリティ",
      "ESG/CSR",
      "経済安全保障",
    ],
    bcDescripton: "",
  },
  {
    id: 3,
    bcName: "教育事業",
    bcSubTitle:
      "国際情勢・外交・安全保障の勉強やニュース、セミナー等の情報をWebサイト内にてワンストップで確認できるオンライン学習プラットフォーム「OASIS」を運営しております。",
    bcDescriptonLists: [],
    bcDescripton:
      "国際情勢、外交、安全保障を学ぶオンラインプラットフォーム「OASIS」",
  },
]);
</script>
<template>
  <section id="section-03" class="container-1280">
    <div class="section-title-container">
      <h2 class="section-title"><slot /></h2>
    </div>
    <div class="bc-container">
      <div
        class="busi-content-container"
        :class="'bc-' + BusiContentItem.id"
        v-for="BusiContentItem in BusiContentItems"
      >
        <h3 class="bc-name">{{ BusiContentItem.bcName }}</h3>
        <h4 class="bc-subtitle">{{ BusiContentItem.bcSubTitle }}</h4>
        <li
          class="bc-list"
          v-if="BusiContentItem.bcDescriptonLists != null"
          v-for="bcDescriptonList in BusiContentItem.bcDescriptonLists"
        >
          {{ bcDescriptonList.valueOf() }}
        </li>
        <p class="bc-p">{{ BusiContentItem.bcDescripton }}</p>
      </div>
    </div>
  </section>
</template>
<style scoped>
@media screen and (min-width: 1024px) {
  .bc-container {
    display: flex;
  }
  .busi-content-container {
    width: 30%;
  }
}
.bc-1,
.bc-2,
.bc-3 {
  background-color: rgba(255, 255, 255, 0.8);
  background-blend-mode: lighten;
  background-size: cover;
}
.bc-1 {
  background-image: url(../assets/img/コンサルティング事業.png);
  background-position: 28%;
  
}
.bc-2 {
  background-image: url(../assets/img/リスクマネジメント事業.png);
  background-position: 50%;
}
.bc-3 {
  background-image: url(../assets/img/教育事業.png);
  background-position: 50%;
}
.busi-content-container {
  /* color:aliceblue; */
  padding: 2rem 1rem;
  line-height: 1.8;
  letter-spacing: 1.2px;
  text-align: center;
  margin: 40px auto;
  min-height: 250px;
  display: flex;
  flex-direction: column;
}
.bc-name {
  font-size: 1.5rem;
}
.bc-subtitle {
  font-size: 0.9rem;
  margin-bottom: 2rem;
}
</style>
