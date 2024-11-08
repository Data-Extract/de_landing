<script setup lang="ts">
const servicios = [
  {
    titulo: "Data Consulting",
    subtitulo: "Unlock the Power of Your Data!",
    imgURL:
      "https://firebasestorage.googleapis.com/v0/b/dataextractco.appspot.com/o/dataconsulting-home.gif?alt=media&token=2c1ab8b6-d4fa-4293-beea-4741bb2e1aa7",
    id: 1,
    descripcion: "Details",
  },
  {
    titulo: "Web Scraping",
    subtitulo: "Harness the Power of Web Data!",
    imgURL:
      "https://firebasestorage.googleapis.com/v0/b/dataextractco.appspot.com/o/webscraping-home.gif?alt=media&token=8c24861f-1ac6-4447-92bc-db8347214645",
    id: 2,
    descripcion: "Details",
  },
  {
    titulo: "Bussines Intelligence",
    subtitulo: "Unlock Insights for Smarter Decisions!",
    imgURL:
      "https://firebasestorage.googleapis.com/v0/b/dataextractco.appspot.com/o/bi-home.gif?alt=media&token=ae918c15-bc2b-443b-abac-db8a85c3fe9f",
    id: 3,
    descripcion: "Details",
  },
  {
    titulo: "Cloud storage",
    subtitulo: "Secure, Scalable, and Effortless Storage!",
    imgURL:
      "https://firebasestorage.googleapis.com/v0/b/dataextractco.appspot.com/o/storage-home.gif?alt=media&token=f0262eca-fa3c-428c-a7a5-76cf12c25173",
    id: 4,
    descripcion: "Details",
  },
];

const route = useRoute();
const id = Number(route.params.id);

const servicio = servicios.find((s) => s.id == id);
</script>

<template>
  <div v-if="servicio">
    <h1>{{ servicio.titulo }}</h1>
    <v-img :src="servicio.imgURL" height="300"></v-img>
    <h2>{{ servicio.subtitulo }}</h2>
    <p>{{ servicio.descripcion }}</p>
  </div>
  <div v-else>
    <p>Servicio no encontrado.</p>
  </div>
</template>
