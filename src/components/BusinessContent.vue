<script setup>
  import { ref } from 'vue';

  const BusiContentItems = ref([
    {
      bcName: 'コンサルティング事業',
      bcSubTitle: '各分野のトップコンサルタントがお客様の悩み発見から解決まで伴走型で承ります。',
      bcDescriptonLists:['新規事業コンサルティング', '戦略コンサルティング', 'ブランドコンサルティング', 'マーケティングコンサルティング', '業務改善コンサルティング', 'ＧＸコンサルティング'],
      bcDescripton:''
    },
    {
      bcName: 'リスクマネジメント事業',
      bcSubTitle: '昨今、環境問題や自然災害、経済安全保障等、企業を取り巻く環境はより一層厳しくなりました。当社ではそのようなお客様をサポートするために会社全体から部門単位での支援を行っております。',
      bcDescriptonLists:['全社的リスクマネジメント（ERM）', '事業継続計画（BCP）', 'サイバーセキュリティ', 'ESG/CSR', '経済安全保障'],
      bcDescripton:''
    },
    {
      bcName: '教育事業',
      bcSubTitle: '国際情勢・外交・安全保障の勉強やニュース、セミナー等の情報をWebサイト内にてワンストップで確認できるオンライン学習プラットフォーム「OASIS」を運営しております。',
      bcDescriptonLists:[],
      bcDescripton:'国際情勢、外交、安全保障を学ぶオンラインプラットフォーム「OASIS」'
    },
  ])
</script>
<template>
  <section id="section-03" class="container-1280">
    <div class="section-title-container">
      <h2 class="section-title"><slot /></h2>
    </div>
    <div class="busi-content-container" v-for="BusiContentItem in BusiContentItems">
      <h3>{{BusiContentItem.bcName}}</h3>
      <h4>{{BusiContentItem.bcSubTitle}}</h4>
      <li  class="bc-list" v-if="BusiContentItem.bcDescriptonLists != null" v-for="bcDescriptonList in BusiContentItem.bcDescriptonLists">
        {{bcDescriptonList.valueOf()}}
      </li>
      <p>{{BusiContentItem.bcDescripton}}</p>
    </div>
  </section>
</template>
<style scoped>
</style>