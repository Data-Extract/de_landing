<script setup lang="ts">
import { useRouter } from "vue-router";

interface Servicio {
  titulo: string;
  subtitulo: string;
  imgURL: string;
  id: number;
  descripcion: string;
}

const data = () => {
  return {
    servicios: [
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
    ],
  };
};

const { servicios } = data();
const router = useRouter();

const viewDetails = (id: number) => {
  router.push({ name: "services-id", params: { id } }); // Redirigir a la ruta usando el nombre correcto
};
</script>

<template>
  <div>
    <h1>{{ $t("servicesTitle") }}</h1>
    <GridServices :servicios="servicios" @viewDetails="viewDetails" />
  </div>
</template>
