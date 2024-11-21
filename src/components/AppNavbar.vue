<template>
  <nav>
    <ul>
      <li><router-link to="/">Inicio |</router-link></li>
      <li><router-link to="/characters">Personajes |</router-link></li>
      <li><router-link to="/contact">Contacto |</router-link></li>
    </ul>
  </nav>
</template>
  
<style>
nav {
  width: 100%;
  background: #ffff00;
  padding: 10px;
}
ul {
    list-style: none;
    display: flex;
    gap: 5px;
}
/* 


} */
nav a {
  color: #222;
  text-decoration: none;
}
nav a.router-link-exact-active {
  color: #001231;
  font-weight: bolder;
}
nav a:hover {
  text-decoration: underline;
  background-color: #fff;
  font-weight: bolder;
}
</style>
  