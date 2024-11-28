import { Hero } from '../.nuxt/components';
<template>
  <div class="status-icon">
    <div :class="statusClass"></div>
    <p>{{ status?.message || "Loading..." }}</p>
    <p v-if="error" class="error-message"></p>
  </div>
  <Hero />
  <CardsContainerHome />
  <!-- Show status inside the <p> tag -->
  <p>{{ status?.message }}</p>
</template>

<script setup>
const { $api } = useNuxtApp();

const status = ref(null);

try {
  const { data: status } = await $api.status.getStatus();

  status.value = data;
  console.log(data);
} catch (err) {}

const fetchStatus = async () => {
  try {
    const data = await $api.status.getStatus();
    status.value = data;
    console.log("Data: ", data);
  } catch (error) {
    console.error("Error: ", error);
  }
};

onMounted(() => {
  fetchStatus();
});

const statusClass = computed(() => {
  return status?.message === "status: ok" ? "circle green" : "circle red";
});

//  export default {
//    name: "HomePage",
//  };
</script>

<style scoped>
.status-icon {
  display: flex;
  align-items: center;
  gap: 10px; /* Espacio entre el icono y el texto */
}

/* Estilo general para el ícono circular */
.circle {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: inline-block;
}
/* Colores para los estados */
.green {
  background-color: #4caf50; /* Verde */
}
.red {
  background-color: #f44336; /* Rojo */
}
.main-content {
  padding-top: 80px; /* Ajusta el padding según la altura de tu navbar */
  padding-bottom: 80px; /* Ajusta el padding según la altura de tu footer */
  min-height: calc(
    100vh - 160px
  ); /* Ajusta la altura mínima para evitar que el contenido quede debajo del footer */
}
</style>
