<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant="false"
    :clipped="true"
    fixed
    app
  >
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar
    :clipped-left="true"
    fixed
    app
    color="teal-darken-4"
    image="https://picsum.photos/1920/1080?random"
  >
    <template v-slot:image>
      <v-img
        gradient="to top right, rgba(13,71,161,.8), rgba(0,191,165,.8)"
      ></v-img>
    </template>

    <template v-slot:prepend>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </template>

    <a to="/">
      <v-img
        src="/public/img/spider.png"
        alt="Logo"
        class="app-logo"
        max-height="40"
      />
      <v-app-bar-title class="d-xs-none">{{ $t("appTitle") }}</v-app-bar-title>
    </a>

    <v-spacer></v-spacer>

    <!-- Botón de WhatsApp -->
    <div class="con-whapp">
      <v-btn
        icon
        :href="'https://wa.me/573177866110'"
        target="_blank"
        color="green"
      >
        <v-icon>mdi-whatsapp</v-icon>
      </v-btn>
      <span>{{ $t("whatsappMessage") }}</span>
    </div>

    <div class="switch-container">
      <div class="switch-wrapper">
        <v-switch
          v-model="isEnglish"
          hide-details
          flat
          density="compact"
          @change="toggleLocale"
        ></v-switch>
        <span class="switch-label">{{
          isEnglish ? "English" : "Español"
        }}</span>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
import { useI18n } from "vue-i18n";

export default {
  data() {
    return {
      isEnglish: this.$i18n.locale === "en", // Inicializa según el idioma actual
      drawer: false,
    };
  },
  computed: {
    items() {
      return [
        { icon: "mdi-home-outline", title: this.$t("home"), to: "/" },
        { icon: "mdi-information-variant-circle-outline", title: this.$t("about"), to: "/about" },
        { icon: "mdi-toolbox-outline", title: this.$t("services"), to: "/services" },
        {
          icon: "mdi-message-text-outline",
          title: this.$t("contact"),
          to: "/contact",
        },
      ];
    },
  },
  methods: {
    toggleLocale() {
      const newLocale = this.isEnglish ? "en" : "es";
      this.$i18n.setLocale(newLocale);
    },
  },
  watch: {
    "$i18n.locale"(newLocale) {
      this.isEnglish = newLocale === "en";
    },
  },
};
</script>

<style scoped>
.app-logo {
  max-height: 40px;
}

.switch-container {
  display: flex;
  justify-content: flex-end;
  padding-right: 16px;
}

.switch-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.switch-label {
  font-size: 14px;
  margin-top: -10px; /* Espacio entre el switch y el label */
}

.con-whapp {
  display: flex;
  align-items: center;
  gap: 0px; /* Espacio entre el botón y el texto */
  margin-right: 20px;
}

.con-whapp span {
  margin-top: -px; /* Ajusta el espacio para que estén más pegados */
  font-size: 14px; /* Opcional: Ajusta el tamaño de la fuente */
}
</style>
