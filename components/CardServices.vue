<template>
  <v-card :disabled="loading" :loading="loading" >

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

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-actions>
      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ description }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Default Title'
    },
    imgURL: {
      type: String,
      default: 'https://cdn.vuetifyjs.com/images/cards/cooking.png' // Valor por defecto
    },
    subtitle: {
      type: String,
      default: "Subtitle por defecto"
    },
    description: {
      type: String,
      default: "Descripción por defecto"
    }
  },
  data: () => ({
    loading: false,
    selection: 1,
    show: false,
  }),

  methods: {
    reserve() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>
