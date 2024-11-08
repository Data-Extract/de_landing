<template>
  <div class="image-container">
    <v-img
      :width="279"
      aspect-ratio="16/9"
      cover
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    />
  </div>
  <div class="button-container">
    <v-btn to="/"> Inicio </v-btn>
  </div>
</template>

<script setup></script>

<style scoped>
.image-container {
  display: flex;
  justify-content: center;
  /* Centrar de manera horizontal */
  align-items: center;
  /* Centrar verticalmente */
  height: 60vh;
  /* Altura de la pantalla del contenedor */
}

.button-container {
  display: flex;
  justify-content: center;
  /* Centrar de manera horizontal */
  align-items: center;
  /* Centrar verticalmente */
  height: 20vh;
  /* Altura de la pantalla del contenedor */
}
</style>
