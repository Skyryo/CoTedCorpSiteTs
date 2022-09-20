<script setup></script>
<template>
  <section id="section-02" class="container-1280">
    <div class="section-title-container">
      <h2 class="section-title"><slot /></h2>
    </div>
    <div class="message-area">
      <div class="message-img">
        <img
          src="../assets/img/otani.png"
          alt="大谷取締役画像"
          style="width: 100%"
        />
      </div>
      <div class="message-text">
        <h3>「キョウソウ」と「シンカ」を続ける組織でありたい</h3>
        <p>
          株式会社ビズリーチは、Visionalの一員として、ITの力でHR領域の生産性向上を支え、
          日本の未来を活気あるものにすることを目指しています。私は、2017年にビズリーチ事業の事業部長に就任し、
          2020年から副社長を務めてまいりました。この度、2022年7月に株式会社ビズリーチの代表取締役社長に就任いたしました。
          当社はミッションに、「すべての人が『自分の可能性』を信じられる社会をつくる」と掲げています。このミッションの背景には、
          「少子高齢化が進む未来に対する強い危機感」と「働くことそのものの大きな変化」があります。労働力人口は、2065年には4,000万人弱になると予想されており、
          社会構造は激変していくはずです。また、働く期間が50年とも60年ともいわれる「人生100年時代」を生きる私たちにとって、「働くこと」は人生における大きなテーマであり、
          「キャリア」について常に考え続ける必要があります。
        </p>
        <p class="otani-title">
          代表取締役<br /><span class="oani-name">大谷 光輝</span>
        </p>
      </div>
    </div>
  </section>
</template>
<style scoped>
  #section-02 {
    background-image: url(/src/assets/img/otani.png);
    background-position: 25% 30%;
    background-color: rgba(255,255,255,0.9);
    background-blend-mode: lighten;    
  }
  .message-img {
    display: none;
  }
   .message-text {
    padding: 2rem 1rem;
    letter-spacing: 2px;
    line-height: 1.8;
    /* background-image: url(/src/assets/img/otani.png);
    background-position: 25% 30%;
    background-color: rgba(255,255,255,0.9);
    background-blend-mode: lighten; */
  }

@media screen and (min-width: 720px) {
  #section-02 {
    background-image: unset;
    background-position: unset;
    background-color: unset;
    background-blend-mode: unset;
    
  }
  .section-title {
    font-size: 1.5rem;
    margin: 80px 0;
  }

  .message-area {
    display: flex;
    position: relative;
    align-items: center;
  }
  .message-img {
    display: block;
    width: 70%;
    opacity: 0.6;
  }
  .message-text {
    width: 50%;
    text-align: left;
    line-height: 2;
    letter-spacing: 2px;
    background-color: white;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    padding: 2rem;
    position: absolute;
    left: 40%;
    background-image: unset;
    background-position: unset;
    background-blend-mode: unset;
  }
  .otani-title {
    text-align: end;
  }
}
</style>
