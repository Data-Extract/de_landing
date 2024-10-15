<template>
  <v-layout row wrap>
    <v-app>
      <!-- Barra de navegación -->
      <NavBar />

      <!-- Contenido principal -->
      <v-main>
        <v-container fluid>
          <slot />
        </v-container>
      </v-main>

      <!-- Footer moderno -->
      <v-footer app>
        <v-container>
          <v-row>
            <v-col class="text-center" cols="12" md="4"> </v-col>
            <v-col class="text-center" cols="12" md="4">
              <div>
                &copy; {{ new Date().getFullYear() }} - {{ $t("appTitle") }}
              </div>
            </v-col>
            <v-col class="text-center" cols="12" md="4">
              <v-row justify="center">
                <v-btn icon>
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-twitter</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-instagram</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-linkedin</v-icon>
                </v-btn>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-footer>
    </v-app>
  </v-layout>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>

<style scoped>
v-footer {
  color: white;
}

v-btn {
  color: white;
}

v-icon {
  font-size: 24px;
}
</style>
