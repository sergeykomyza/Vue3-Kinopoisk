<script setup>
    import { ref, onMounted } from 'vue';
    import { useRouter } from 'vue-router'
    
    const router = useRouter()
    
    const movies = ref([])
    
    const getMovies = async()=>{
      return fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES&page=1', {
        method: "GET",
        headers: {
          'X-API-KEY': '07ca675a-db71-4e5b-8119-5618275b2fab',
          'Content-Type': 'application/json',
        }
      })
      .then(response=>response.json())
    }
    
    const goToProduct = (id, name, poster) => {
      getMovies().then(data=>{
        movies.value = data.items
      })
      router.push({ path: `/movie/${id}`, query: {name, poster} })
    }
    
    onMounted(()=>{
      getMovies().then(data=>{
        console.log(data.items)
        movies.value = data.items
      })
    })
    
</script>

<template>
  <div class="container">
    <h1 class="title">Top 250 фильмов всех времен</h1>
    <main class="preview-box">
      <article class="preview" 
        v-for="movie in movies" 
        :key="movie.kinopoiskId" 
        @click="goToProduct(movie.kinopoiskId, movie.nameRu, movie.posterUrl)"
      >
      <div class="preview-rating"> 
        <span class="preview-rating__num">Кинопоиск: {{ movie.ratingKinopoisk }}</span> 
        <span class="preview-rating__num">Imdb: {{ movie.ratingImdb }}</span>
      </div>
      <figure class="preview__posterbox">
        <img class="preview__poster" :src="`${movie.posterUrlPreview}`" :alt="`${movie.nameRu}`">
      </figure>
      <div class="preview__info">
        <h6 class="preview__name">{{ movie.nameRu }}</h6>
        <time class="preview__year">{{ movie.year }}</time>
      </div>
      </article>
    </main>
  </div>
</template>


<style lang="scss" scoped>
  .title{
    margin-bottom: 50px;
    font-family: "Montserrat", sans-serif;
    font-size: 40px;
    text-align: center;
    text-transform: uppercase;
  }
  .preview-box{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 30px 15px;
  }
  .preview{
    position: relative;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    &__posterbox{
      width: 100%;
      height: 425px;
      border-radius: 10px;
      overflow: hidden;
    }
    &__poster{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &__info{
      display: flex;
      flex-direction: column;
      flex: 1;
      padding-top: 20px;
    }
    &__name{
      margin-bottom: 10px;
      font-size: 20px;
    }
    &__year{
      margin-top: auto;
    }
    &-rating{
      position: absolute;
      top: 20px;
      left: 0;
      display: flex;
      justify-content: space-between;
      gap: 10px;
      width: 100%;
      padding: 5px 10px;
      background: rgba(255,255,255,0.9);
      &__num{
        font-size: 16px;
        color: #000;
      }
    }
  }
</style>

