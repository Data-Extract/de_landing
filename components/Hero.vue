<template>
  <v-container fluid class="hero-container">
    <v-row class="fill-height" align="center" justify="center">
      <!-- Columna para la imagen en pantallas pequeñas y contenido en pantallas grandes -->
      <v-col
        cols="12"
        md="6"
        class="d-flex justify-center align-center"
      >
        <v-img
          src="/public/img/hero-image.gif"
          class="hero-image"
          contain
        ></v-img>
      </v-col>
      
      <!-- Columna para el contenido en pantallas pequeñas y la imagen en pantallas grandes -->
      <v-col
        cols="12"
        md="6"
        class="d-flex flex-column text-center text-md-left"
      >
        <h1 class="title">{{ $t("homeTitle") }}</h1>
        <div class="text-justify">
          <h2 class="subtitle">{{ $t("homeSubtitle") }}</h2>
        </div>
        <v-btn
          color="primary"
          to="/contact"
        >
          {{ $t("callToActionHome") }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HeroComponent",
};
</script>

<style scoped>
.hero-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px; /* Espaciado horizontal opcional */
}

.hero-image {
  width: 100%;
  height: auto;
  max-height: 400px; /* Ajusta la altura máxima de la imagen */
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 2.5rem; /* Ajusta el tamaño del título */
  margin-bottom: 8px; /* Espacio entre el título y el subtítulo */
}

.subtitle {
  font-size: 1.5rem; /* Ajusta el tamaño del subtítulo */
  margin-bottom: 16px; /* Espacio entre el subtítulo y el botón */
}

@media (max-width: 600px) {
  .hero-container {
    padding-top: 16px; /* Reduce el espacio en la parte superior en pantallas pequeñas */
    padding-bottom: 16px; /* Reduce el espacio en la parte inferior en pantallas pequeñas */
  }
  .title {
    font-size: 1.8rem; /* Tamaño del título en pantallas pequeñas */
  }
  .subtitle {
    font-size: 1.2rem; /* Tamaño del subtítulo en pantallas pequeñas */
  }
  .hero-image {
    max-height: 200px; /* Ajusta la altura máxima de la imagen en pantallas pequeñas */
  }
}
</style>
