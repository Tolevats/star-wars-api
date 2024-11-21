<template>
    <div class="characters-container">
      <h1>Personajes de Star Wars</h1>
      <button @click="loadMoreCharacters">Buscar más personajes</button>
      
      <div class="characters-grid">
        <div v-for="character in characters" :key="character.name" class="character-card">
            <router-link :to="'/characters/' + character.url.split('/').slice(-2, -1)">
                <p>{{ character.name }}</p>
            </router-link> 
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'CharactersView',
    // props: {},
    data() {
      return {
        characters: [],
        currentPage: 1,
      };
    },
    // computed: {},
    methods: {
      async loadMoreCharacters() {
        try {
            const response = await fetch(`https://swapi.dev/api/people?page=${this.currentPage}`);
            if (!response.ok) throw new Error("Error al cargar más personajes");
            const data = await response.json();

            // añadir los nuevos personajes al array existente
            this.characters.push(...data.results);
            this.currentPage++; // incrementar el número de página
        } catch (error) {
            console.error("Error al cargar más personajes:", error);
        }
      },
    },
    mounted() {
        this.loadMoreCharacters(); // cargar la primera página al montar el componente
  },
};
</script>

<style scoped>
.characters-container {
  max-width: 90%;
  margin: 20px auto;
  text-align: center;
}

h1 {
  font-size: 2rem;
  color: #fff;
  margin-bottom: 20px;
}

button {
  padding: 10px 15px;
  font-size: 1rem;
  font-weight: bold;
  color: #f3f3f3;
  background-color: #0056b3;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
}

button:hover {
  color: #333;
  background-color: #f3f3f3;
}

.characters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  justify-content: center;
}

.character-card {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  background-color: #000;
  color: yellow;
  border: 2px solid #fff;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  height: 50px;
}

</style>  