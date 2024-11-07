<script setup lang="ts">
import CardServices from "./CardServices.vue";
import { defineEmits } from "vue";

interface Servicio {
  titulo: string;
  subtitulo: string;
  imgURL: string;
  id: number;
  descripcion: string;
}

const props = defineProps<{
  servicios: Servicio[];
}>();

const emit = defineEmits(["viewDetails"]);

const viewDetails = (id: number) => {
  emit("viewDetails", id); // emito el evento con el id del servicio
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col
        v-for="servicio in servicios"
        :key="servicio.id"
        cols="7"
        sm="5"
        md="4"
      >
        <CardServices
          :title="servicio.titulo"
          :subtitle="servicio.subtitulo"
          :imgURL="servicio.imgURL"
          :descripcion="servicio.descripcion"
          :id="servicio.id"
          @viewDetails="viewDetails"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
