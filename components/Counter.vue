<template>
  <div>
    <p>valor actual: {{ counter }}</p>
    <p v-if="counter >= 100">
      este es el valor máximo, no podras continuar(100)
    </p>
  </div>

  <div class="button-counter">
    <v-btn @click="incrementar" :disabled="counter >= 100"> Incrementar </v-btn>
  </div>
</template>

<script setup lang="ts">
const counter = useState("counter", () => 0);

const incrementar = () => {
  if (counter.value < 100) {
    counter.value++;
  }
};
</script>

<style scoped>
.button-counter {
  display: flex;
  justify-content: center;
  /* Centrar de manera horizontal */
  align-items: center;
  /* Centrar verticalmente */
  height: 20vh;
  /* Altura de la pantalla del contenedor */
}
</style>
