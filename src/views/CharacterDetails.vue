<template>
    <div class="character-details">
      <h1>Detalles del Personaje</h1>
      <table class="character-table">
        <tbody>
          <tr>
            <th><strong>Nombre:</strong> </th>
            <td>{{ character.name }}</td>
          </tr>
          <tr>
            <th>Género:</th>
            <td>{{ character.gender }}</td>
          </tr>
          <tr>
            <th>Altura:</th>
            <td>{{ character.height }} cm</td>
          </tr>
          <tr>
            <th>Número de películas:</th>
            <td>{{ character.films ? character.films.length : 0 }}</td>
          </tr>
        </tbody>
      </table>
<!--       <strong></strong>
      <strong></strong>
      <strong></strong> -->
    </div>
</template>
  
<script>
export default {
  name: 'CharacterDetails',
  // props: {},
  data() {
    return {
      character: {},
    };
  },
  async created() {
    const id = this.$route.params.id; // Obtenemos el ID desde la URL
    try {
      const response = await fetch(`https://swapi.dev/api/people/${id}`);
      this.character = await response.json();
    } catch (error) {
      console.error("Error al obtener el personaje:", error);
    }
  },
};
</script>

<style scoped>
.character-details {
  max-width: 600px;
  margin: 20px auto;
  text-align: left;
  background-color: #000;
  color: yellow;
  padding: 20px;
  border: 2px solid white;
  border-radius: 10px;
}
.character-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed; /* hace que todas las columnas tengan el mismo ancho */
}
.character-table th,
.character-table td {
  border: 1px solid white;
  padding: 10px;
  text-align: left;
  width: 50%; /* cada celda ocupa la mitad del ancho */
  box-sizing: border-box; /* incluye el padding y border en el ancho total */
}
.character-table th {
  background-color: #333;
  color: white;
}
.character-table td {
  background-color: #111;
}

/* Media query para pantallas más pequeñas */
@media (max-width: 600px) {
  .character-table th,
  .character-table td {
    display: block; /* Apila las celdas verticalmente */
    width: 100%; /* Ocupan todo el ancho disponible */
  }
}
</style>