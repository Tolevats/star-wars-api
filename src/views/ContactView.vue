<template>
  <div class="contact-container">
    <h1>Contacto</h1>
    <p>¿Nos quieres comentar algo?</p>
    <form @submit.prevent="submitForm">
      <label for="name">Nombre Completo</label>
      <input type="text" id="name" v-model="name" required />
      
      <label for="email">Correo Electrónico</label>
      <input type="email" id="email" v-model="email" required />
      
      <label for="message">Mensaje</label>
      <textarea id="message" v-model="message" placeholder="¡Escribe tu mensaje aquí!" rows="10" required></textarea>

      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'contact-form',
  // props: {},
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  // computed: {},
  methods: {
    submitForm() {
      alert(`Gracias, ${this.name}. Hemos recibido tu mensaje. Nos pondremos en contacto contigo pronto.`);
    },
  },
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
/* Mobile-first */
.contact-container {
  max-width: 90%;
  height: 80vh;
  margin: 20px auto;
  padding: 15px;
  border-radius: 8px;
  color: #f9f9f9;
  background-color: #222;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.contact-container h1 {
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 20px;
  color: #f9f9f9;
}
form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 64vh;
}
label {
  font-size: 1rem;
  font-weight: bold;
  color: #f9f9f9;
}
input,
textarea {
  width: 95%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
input:focus,
textarea:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 3px rgba(0, 123, 255, 0.5);
}
textarea {
  resize: none;
}
button {
  padding: 12px 15px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}

/* for larger screens */
@media (min-width: 768px) {
  .contact-container {
    max-width: 900px;
    padding: 20px;
  }

  form {
    gap: 20px;
  }

  button {
    font-size: 1.1rem;
  }
}
</style>