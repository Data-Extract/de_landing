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

    <v-btn
      color="primary"
      @click="handleViewDetails"
      class="mx-auto text-black"
    >
      Details
    </v-btn>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Default Title",
    },
    imgURL: {
      type: String,
      default: "https://cdn.vuetifyjs.com/images/cards/cooking.png", // Valor por defecto
    },
    subtitle: {
      type: String,
      default: "Subtitle por defecto",
    },
    description: {
      type: String,
      default: "Descripción por defecto",
    },

    id: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    loading: false,
    selection: 1,
    show: false,
  }),

  methods: {
    handleViewDetails() {
      // evento para manejar el clic del boton
      this.$emit("viewDetails", this.id);
    }, // El componente GriService es quien lo maneja
  },
};
</script>
