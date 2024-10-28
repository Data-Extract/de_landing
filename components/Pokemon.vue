<script setup lang="ts">
interface Pokemon {
  name: string;
  url: string;
}

interface PokemonResponse {
  results: Pokemon[];
}
const { data, error } = await useAsyncData<PokemonResponse>(async () => {
  return $fetch("https://pokeapi.co/api/v2/pokemon/\?limit\=100\&offset\=0");
});
</script>

<template>
  <v-container>
    <v-row v-if="error || !data">
      <h1>Ha ocurrido un error</h1>
    </v-row>
    <v-row v-else>
      <v-col
        v-for="(pokemon, index) in data.results"
        :key="index"
        cols="12"
        md="6"
        lg="4"
      >
        <v-card class="card">
          <v-card-title class="text-h6 title">
            Nombre: {{ pokemon.name }}
          </v-card-title>
          <v-card-text class="text-p id">
            ID: <a :href="pokemon.url" target="_blank">{{ pokemon.url }}</a>
          </v-card-text>
          <v-card-actions class="actions">
            <v-btn class="btn"> Detalles</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.card {
  margin: 0 auto;
  max-width: 400px;
  background-color: #fdfdff;
}

.title {
  font-weight: bold;
}

.id {
  font-weight: bold;
}
.actions {
  display: flex;
  justify-content: center;
}

.btn {
  background-color: #1867c0;
}
</style>
