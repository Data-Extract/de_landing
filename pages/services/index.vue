<template>
  <div>
    <h1>
      {{ $t("servicesTitle") }}
    </h1>
    <Pokemon />
  </div>
  <v-container class="containerp">
    <v-row justify="center" class="mb-5">
      <v-col cols="12">
        <v-sheet
          class="pa-4 contact-background text-white"
          elevation="3"
          height="50px"
        >
        <h2 class="font weight-bold">Contact Settings</h2>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row justify="space-around">
       <EmailContacts />
       <SmsContact />
       <PhoneContacts />
       <CommentsNotification />
     </v-row>
  </v-container>
</template>


<style scoped>
.containerp {
  background-color: rgb(198, 216, 250);
}

.contact-background {
  background-color: rgb(35, 35, 71);
}
</style>