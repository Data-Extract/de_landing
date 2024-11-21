<script setup lang="ts">
const radios = useState("radios", () => null);
const reiniciar = () => {
  radios.value = null;
};
</script>
<template>
  <div>
    <v-container class="align-start" fluid>
      <h1 class="alineart">
        {{ $t("contactTitle") }}
      </h1>
      <v-alert
        v-if="radios === null"
        class="align-alert"
        type="info"
        variant="outlined"
      >
        {{ $t("contactDescription") }}
      </v-alert>
    </v-container>
    <v-container fluid>
      <v-radio-group v-model="radios" class="eradio radios-c">
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
      <v-row v-if="radios === 'Persona'" justify="center">
        <v-col cols="12" md="8">
          <FormPerson :reiniciar="reiniciar" />
        </v-col>
      </v-row>
      <v-row v-if="radios === 'Empresa'" justify="center">
        <v-col cols="12" md="8">
          <FormBusiness :reiniciar="reiniciar" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style scoped>
.align-start {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.alineart {
  margin: 0;
  padding: 0;
}

.align-alert {
  margin-top: 2px;
  margin-bottom: 0px;
  width: 100%;
}

.radios-c {
  margin-top: 0;
  margin-bottom: 0px;
}

.eradio {
  color: black;
  margin-top: 0px;
  font-weight: bold;
}
</style>
