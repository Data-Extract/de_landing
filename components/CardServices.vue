<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  title: string;
  subtitle: string;
  imgURL: string;
  description: string;
  id: number;
}>();

const emit = defineEmits(["viewDetails"]);

const handleClick = () => {
  emit("viewDetails", props.id); // Emitir el evento con el id del servicio
};

const loading = ref(false); //
</script>

<template>
  <v-card
    :disabled="loading"
    :loading="loading"
    class="mx-auto"
    max-width="344"
    rel="noopener"
    target="_blank"
  >
    <v-img
      :src="imgURL"
      class="d-flex justify-center align-center"
      cover
    ></v-img>

    <v-card-item>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-subtitle>
        <span class="me-1">{{ subtitle }}</span>
        <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      {{ description }}
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>
    <v-card-actions>
      <v-btn
        variant="outlined"
        color="primary"
        @click="handleClick"
        class="mx-auto text-black"
      >
        Details
      </v-btn>
      <v-btn color="red" @click="handleClick" class="mx-auto text-black">
        Otro
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
