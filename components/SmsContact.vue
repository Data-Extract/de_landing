<script setup>
import { useSmsStore } from "@/store/SmsStore";
import { faker } from "@faker-js/faker";
const store = useSmsStore();
function addSMS() {
  store.addContact({ name: faker.string.numeric(10), subscribed: false });
  store.increment();
}
</script>

<template>
  <v-col cols="12" md="4">
    <v-card height="300px">
      <v-card-item>
        <v-sheet class="pa-2 sms-background text-white">
          <v-row justify="space-between">
            <v-col>
              <v-card-title class="text-h6">SMS</v-card-title>
            </v-col>
            <v-col class="d-flex justify-end">
              <v-btn class="text-blue" @click="addSMS"> Add </v-btn>
            </v-col>
          </v-row>
        </v-sheet>
      </v-card-item>
      <v-card-text v-if="store.count === 0" class="text-center"
        >Add SMS contacts</v-card-text
      >
      <v-card-text v-else>
        <v-list>
          <v-list-item v-for="(sms, index) in store.list" :key="index">
            <v-list-item-title class="font-weight-bold">
              {{ sms.name }}
            </v-list-item-title>
            <v-icon v-if="sms.subscribed" color="green"
              >mdi-message-plus-outline</v-icon
            >
            <v-icon v-else color="red">mdi-message-alert-outline</v-icon>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<style scoped>
.sms-background {
  background-color: #1e3a8a;
}
</style>
