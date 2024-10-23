<script setup>
import { useCommentStore } from "@/store/CommentStore";
const store = useCommentStore();
async function handleSubscription(method, e) {
  if (e.target.checked) {
    await store.subscribe(method);
  } else {
    await store.unsubscribe(method);
  }
  if (method === "email") {
    e.target.checked = store.isEmailSubscribed;
  } else if (method === "sms") {
    e.target.checked = store.isSMSSubscribed;
  } else if (method === "phone") {
    e.target.checked = store.isPhoneSubscribed;
  }
}
</script>

<template>
  <v-container class="containern">
    <v-row justify="center" class="mb-5">
      <v-col cols="12">
        <v-sheet
          class="pa-4 notification-background text-white"
          elevation="3"
          height="50px"
        >
          <h2 class="font weight-bold">Notification Settings</h2>
        </v-sheet>
      </v-col>
    </v-row>
    <v-col cols="12" md="12">
      <v-card height="300">
        <v-card-item>
          <v-card-title>comments</v-card-title>
        </v-card-item>
        <v-card-text>
          Receive nottification when someone comments on your documents or
          mentions you
        </v-card-text>
        <v-row class="switch">
          <v-switch
            v-model="store.isEmailSubscribed"
            @change="handleSubscription('email', $event)"
            label="Email"
          ></v-switch>
          <v-switch
            v-model="store.isSMSSubscribed"
            @change="handleSubscription('sms', $event)"
            label="SMS"
          ></v-switch>
          <v-switch
            v-model="store.isPhoneSubscribed"
            @change="handleSubscription('phone', $event)"
            label="phone"
          ></v-switch>
        </v-row>
      </v-card>
    </v-col>
  </v-container>
</template>

<style scoped>
.containern {
  background-color: rgb(198, 216, 250);
}
.notification-background {
  background-color: #232347;
}

.switch {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 20px;
}

.switch-item {
  margin-bottom: 2px;
  width: 150px;
}
</style>
