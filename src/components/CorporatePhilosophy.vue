<script setup>
    const mvvItems = [
        {
            id: 1,
            mvv: 'Mission',
            title:'日本を強くし、刺激のある社会にする',
            description: '日本国を経済、エネルギー、地政等の観点から強化し後世に戦うための資源と人材を遣す',
            mvvList:[],
            isList: false
        },
        {
            id: 2,
            mvv: 'Vission',
            title:'挑戦できる社会に',
            description: 'やるべきこと、やりたいこと、新しいことに挑戦できる社会に',
            mvvList:[],
            isList: false
        },
        {
            id: 3,
            mvv: 'Value',
            title:'「キョウソウ」と「シンカ」の追求',
            description: '',
            mvvList:['共創しているか 真価しているか', '競争しているか  深化しているか', '共想しているか  進化しているか'],
            isList: true
        }
    ]
</script>
<template>
    <section id="section-01" class="container-1280">
        <div class="mvv-container" :class="'mvv-' + mvvItem.id" v-for="mvvItem in mvvItems">
            <h2 class="mvv-h2">{{mvvItem.mvv}}</h2>
            <h3 class="mvv-title"><strong>{{mvvItem.title}}</strong></h3>
            <p class="mvv-description" v-if="!mvvItem.isList">{{mvvItem.description}}</p>
            <li class="mvv-list" v-for="mvvList in mvvItem.mvvList" v-if="mvvItem.isList">{{mvvList.valueOf()}}</li>
        </div>
    </section>
</template>
<style scoped>
    .mvv-container {
        padding: 0 1rem;
        margin: 40px 0;
    }
    .mvv-h2 {
        font-size: 2.5rem;
        font-weight: 900;
    }
    .mvv-2 {
        text-align: right;
    }
    .mvv-title {
        font-size: 1.2rem;
        line-height: 6rem;
    }
    .mvv-description, .mvv-list {
        line-height: 2rem;
        letter-spacing: 2px;
    }
    .mvv-1::before, .mvv-2::before,.mvv-3::before {
        content: "";
        border-bottom: 1px solid #2d0425;
        display: block;
        position: relative;
        top: 3rem;
    }
    @media screen and (min-width: 720px) {
        .mvv-h2 {
            font-size: 3rem;
            font-weight: 900;
        }
        .mvv-title {
            line-height: 6rem;
        }
        .mvv-2 {
            text-align: right;
        }
        .mvv-title {
            font-size: 1.6rem;
        }
        .mvv-1::before, .mvv-2::before,.mvv-3::before {
            width: 50%;
        }
        .mvv-2::before {
            left: 50%;
        }
    }
</style>