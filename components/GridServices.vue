<script setup lang="ts">
interface Servicio {
  titulo: string;
  subtitulo: string;
  imgURL: string;
}

const props = defineProps<{
  servicios: Servicio[];
}>();
</script>

<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(servicio, index) in servicios"
        :key="index"
        cols="7"
        sm="5"
        md="4"
      >
        <v-card>
          <v-img :src="servicio.imgURL" height="100"> </v-img>
          <v-card-title>{{ servicio.titulo }}</v-card-title>
          <v-card-subtitle>{{ servicio.subtitulo }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
