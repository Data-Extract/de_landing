<template>
  <div class="status-icon">
    <div :class="statusClass"></div>
    <p>{{ status.message || "Loading..." }}</p>
  </div>
  <Hero />
  <CardsContainerHome />
  <!-- Show status inside the <p> tag -->
  <p>{{ status.message }}</p>
</template>

<script setup>
import { getStatus } from '@/services/api';

const status = ref({ message: '' });

const fetchResources = async () => {
  try {
    const data = await getStatus();
    status.value = data;
    console.log("Data: ", data);
  } catch (error) {
    console.error('Error fetching resources:', error);
    status.value = { message: 'Error fetching status' };
  }
};

const statusClass = computed(() => {
  return status.value.message === "Status: Ok" ? "circle green" : "circle red";
});

onMounted(() => {
  fetchResources();
});
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
  padding-top: 80px;
  padding-bottom: 80px;
  min-height: calc(
    100vh - 160px
  );
}
</style>
