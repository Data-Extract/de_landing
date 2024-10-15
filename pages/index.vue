import { Hero } from '../.nuxt/components';
<template>
  <Hero />
  <CardsContainerHome />
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.main-content {
  padding-top: 80px; /* Ajusta el padding según la altura de tu navbar */
  padding-bottom: 80px; /* Ajusta el padding según la altura de tu footer */
  min-height: calc(
    100vh - 160px
  ); /* Ajusta la altura mínima para evitar que el contenido quede debajo del footer */
}
</style>
