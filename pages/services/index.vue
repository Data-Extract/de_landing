<script setup lang="ts">
interface Servicio {
  titulo: string;
  subtitulo: string;
  imgURL: string;
}
const data = () => {
  // defino la funcion data que devuelve un objeto que tiene un arreglo
  return {
    servicios: [
      {
        titulo: "Data Consulting",
        subtitulo: "Unlock the Power of Your Data!",
        imgURL:
          "https://firebasestorage.googleapis.com/v0/b/dataextractco.appspot.com/o/dataconsulting-home.gif?alt=media&token=2c1ab8b6-d4fa-4293-beea-4741bb2e1aa7",
      },
      {
        titulo: "Web Scraping",
        subtitulo: "Harness the Power of Web Data!",
        imgURL:
          "https://firebasestorage.googleapis.com/v0/b/dataextractco.appspot.com/o/webscraping-home.gif?alt=media&token=8c24861f-1ac6-4447-92bc-db8347214645",
      },
      {
        titulo: "Bussines Intelligence",
        subtitulo: "Unlock Insights for Smarter Decisions!",
        imgURL:
          "https://firebasestorage.googleapis.com/v0/b/dataextractco.appspot.com/o/bi-home.gif?alt=media&token=ae918c15-bc2b-443b-abac-db8a85c3fe9f",
      },
      {
        titulo: "Cloud storage",
        subtitulo: "Secure, Scalable, and Effortless Storage!",
        imgURL:
          "https://firebasestorage.googleapis.com/v0/b/dataextractco.appspot.com/o/storage-home.gif?alt=media&token=f0262eca-fa3c-428c-a7a5-76cf12c25173",
      },
    ],
  };
};

const { servicios } = data(); // desestructurara la funcion data, tomamos la propiedad servicio que devuelve data y le asigna una constante servicios
</script>

<template>
  <div>
    <h1>
      {{ $t("servicesTitle") }}
    </h1>
    <GridServices :servicios="servicios" />
  </div>
</template>
