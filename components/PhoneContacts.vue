<script setup>
import { usePhoneStore } from "@/store/PhoneStore";
import { faker } from "@faker-js/faker";
const store = usePhoneStore();
function addPhone() {
  store.addContact({ name: faker.string.numeric(10), subscribed: false });
  store.increment();
}
</script>

<template>
  <v-col cols="12" md="4">
    <v-card height="300px">
      <v-card-item>
        <v-sheet class="pa-2 phone-background text-white">
          <v-row justify="space-between">
            <v-col>
              <v-card-title class="text-h6">phone</v-card-title>
            </v-col>
            <v-col class="d-flex justify-end">
              <v-btn class="text-blue" @click="addPhone"> Add </v-btn>
            </v-col>
          </v-row>
        </v-sheet>
      </v-card-item>
      <v-card-text v-if="store.count === 0" class="text-center"
        >Add Phone contacts
      </v-card-text>
      <v-card-text v-else>
        <v-list>
          <v-list-item v-for="(phone, index) in store.list" :key="index">
            <v-list-item-title class="font-weight-bold">
              {{ phone.name }}
            </v-list-item-title>
            <v-icon v-if="phone.subscribed" color="green">
              mdi-cellphone
            </v-icon>
            <v-icon v-else color="red">mdi-cellphone-off</v-icon>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<style scoped>
.phone-background {
  background-color: #1e3a8a;
}
</style>
