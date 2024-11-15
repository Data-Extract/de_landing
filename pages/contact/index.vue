<script setup lang="ts">
const radios = useState("radios", () => null);
</script>

<template>
  <div>
    <h1>
      {{ $t("contactTitle") }}
    </h1>
    <v-container fluid>
      <v-radio-group v-model="radios">
        <h2>
          {{ $t("contactDescription") }}
        </h2>
        <v-radio v-if="radios !== 'Empresa'" value="Persona">
          <template v-slot:label>
            <h4>{{ $t("contactoption") }}</h4>
          </template>
        </v-radio>
        <v-radio v-if="radios !== 'Persona'" value="Empresa">
          <template v-slot:label>
            <h4>{{ $t("contactoptione") }}</h4>
          </template>
        </v-radio>
      </v-radio-group>
      <FormBusiness v-if="radios === 'Empresa'" />
      <FormPerson v-if="radios === 'Persona'" />
    </v-container>
  </div>
</template>
