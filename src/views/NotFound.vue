<template>
    <div class="not-found">
      <h1>404</h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <router-link to="/">volver a la página principal</router-link>
    </div>
</template>

<script>
export default {
    name: 'NotFound',
    // props: {},
    /* data() {
        return {}
    }, */
    // computed: {},
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
};
</script>

<style scoped>
@font-face {
  font-family: 'StarJedi';
  src: url('@/assets/fonts/Starjedi.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
.not-found {
  font-family: 'StarJedi';
  text-align: center;
  color: yellow;
  background-color: black;
  margin: 20px;
  padding: 30px;
  width: 90%; 
  max-width: 800px; /* limitar la anchura máxima en pantallas grandes */
  height: 400px;
  border: 2px solid white;
  border-radius: 10px;
  box-sizing: border-box; /* incluye padding en el tamaño total */
  margin: 10% auto; /* centra vertical y horizontalmente */
}
h1 {
  font-size: 3em;
  margin-bottom: 20px;
}
p {
  font-size: 1.2em;
  margin-bottom: 20px;
}
a {
  display: inline-block;
  color: yellow;
  text-decoration: none;
  font-size: 1em;
  border: 1px solid yellow;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}
a:hover {
  background-color: yellow;
  color: black;
}

/* para pantallas más grandes */
@media (min-width: 768px) {
  .not-found {
    padding: 50px;
    width: 100%;
    height: 500px;
    margin: 5% auto;
  }
  h1 {
    font-size: 5em;
  }
  p {
    font-size: 1.5em;
  }
  a {
    font-size: 1.2em;
  }
}
</style>