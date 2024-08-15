<script setup>
  import { useRoute } from 'vue-router';

  const props = defineProps(['id', 'nameRu', 'posterUrl'])
  const movieName = props.nameRu;
  const poster = props.posterUrl;
</script>

<template>
  <div class="container">
    <article class="film">
      <figure class="film__posterbox">
        <img class="film__poster" :src="`${poster}`" alt="@">
      </figure>
      <div class="film-info">
        <div class="film-info__main">
          <h1 class="film__name">{{ movieName }}  </h1>
        </div>

        <h2 class="film-info__title">О фильме</h2>
        <ul class="film-info__list">

        </ul>
      </div>
    </article>
    
  </div>
</template>

<style lang="scss" scoped>
  .film{
    display: grid;
    grid-template-columns: 400px 1fr;
    gap: 50px;
    &__posterbox{
      border-radius: 10px;
      overflow: hidden;
    }
    &__poster{
      width: 100%;
    }
    &__name{
      font-size: 40px;
    }
    &-info{
      padding-top: 30px;
      &__main{
        margin-bottom: 50px;
      }
    }
  }
</style>

