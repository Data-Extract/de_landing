<script setup>
import { useEmailStore } from "@/store/EmailStore";
import { faker } from "@faker-js/faker";
const store = useEmailStore();
function addEmail() {
  store.addContact({ name: faker.internet.email(), subscribed: false });
  store.increment();
}
</script>

<template>
  <v-col cols="12" md="4">
    <v-card height="300px">
      <v-card-item>
        <v-sheet class="pa-2 email-background text-white">
          <v-row justify="space-between">
            <v-col>
              <v-card-title class="text-h6">Email</v-card-title>
            </v-col>
            <v-col class="d-flex justify-end">
              <v-btn class="text-blue" @click="addEmail"> Add </v-btn>
            </v-col>
          </v-row>
        </v-sheet>
      </v-card-item>
      <v-card-text v-if="store.count === 0" class="text-center"
        >Add email contacts
      </v-card-text>
      <v-card-text v-else>
        <v-list>
          <v-list-item v-for="(email, index) in store.list" :key="index">
            <v-list-item-title class="font-weight-bold">
              {{ email.name }}
            </v-list-item-title>
            <v-icon v-if="email.subscribed" color="green"
              >mdi-email-plus-outline</v-icon
            >
            <v-icon v-else color="red">mdi-email-remove-outline</v-icon>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-col>
  <v-row> </v-row>
</template>

<style scoped>
.email-background {
  background-color: #1e3a8a;
}
</style>
