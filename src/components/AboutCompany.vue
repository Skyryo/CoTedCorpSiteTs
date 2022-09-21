<script setup>
  const TableItems = {
      会社名: '株式会社 Co-ted',
      所在地: '〒102-0072 東京都千代田区九段南1丁目5番6号 りそな九段ビル5F',
      設立日: '2022年3月1日',  
      資本金: '1,200,000円',
      代表取締役: '大谷 光輝' 
  }
</script>
<template>
  <section id="section-04" class="max-width-1280">
    <div class="section-title-container">
      <h2 class="section-title"><slot /></h2>
    </div>
    <div class="table-container">
      <table>
        <tr v-for="( TableItem, key ) in TableItems" :class="'table-' + key.length">
          <th>{{key}}</th>
          <td>{{TableItem}}</td>
        </tr>
        <!-- <tr>
          <th>所在地</th>
          <td>
            〒102-0072<br />東京都千代田区九段南1丁目5番6号 りそな九段ビル5F
            KSフロア
          </td>
        </tr>
        <tr>
          <th>設立日</th>
          <td>2022年3月1日</td>
        </tr>
        <tr>
          <th>資本金</th>
          <td>120万円</td>
        </tr>
        <tr>
          <th class="t-last">代表取締役</th>
          <td class="t-last">大谷 光輝</td> -->
        <!-- </tr> -->
      </table>
    </div>
  </section>
</template>
<style scoped>
.table-container {
  margin: 0 auto;
  text-align: left;
}
table {
  margin: 0 auto;
}
th,td {
  padding: 1rem;
  border-bottom: 1px solid #2d0425;
}
td {
  border-left: 1px solid #2d0425;
}
/*最後の1行は下線なし keyの文字数の違いで要素取得*/
.table-5 th, .table-5 td {
  border-bottom: unset;
}
</style>
