<template>
  <div>
    <h1 class="section-title">Our Featured Services</h1>
    <v-row dense justify="center" align="center">
      <v-col cols="12" md="3" sm="6" xs="12">
        <CardServices
          :title="'Data Consulting'"
          :subtitle="$t('dataConsultingDescriptionTitle')"
          :imgURL="'https://firebasestorage.googleapis.com/v0/b/dataextractco.appspot.com/o/dataconsulting-home.gif?alt=media&token=2c1ab8b6-d4fa-4293-beea-4741bb2e1aa7'"
          :description="$t('dataConsultingDescriptionText')"
        />
      </v-col>
      <v-col cols="12" md="3" sm="6" xs="12">
        <CardServices
          :title="'Web Scraping'"
          :subtitle="$t('webScrapingDescriptionTitle')"
          :imgURL="'https://firebasestorage.googleapis.com/v0/b/dataextractco.appspot.com/o/webscraping-home.gif?alt=media&token=8c24861f-1ac6-4447-92bc-db8347214645'"
          :description="$t('webScrapingDescriptionText')"
        />
      </v-col>
      <v-col cols="12" md="3" sm="6" xs="12">
        <CardServices
          :title="'Bussines Intelligence'"
          :subtitle="$t('biDescriptionTitle')"
          :imgURL="'https://firebasestorage.googleapis.com/v0/b/dataextractco.appspot.com/o/bi-home.gif?alt=media&token=ae918c15-bc2b-443b-abac-db8a85c3fe9f'"
          :description="$t('biDescriptionText')"
        />
      </v-col>
      <v-col cols="12" md="3" sm="6" xs="12">
        <CardServices
          :title="'Cloud storage'"
          :subtitle="$t('cloudStorageDescriptionTitle')"
          :imgURL="'https://firebasestorage.googleapis.com/v0/b/dataextractco.appspot.com/o/storage-home.gif?alt=media&token=f0262eca-fa3c-428c-a7a5-76cf12c25173'"
          :description="$t('cloudStorageDescriptionText')"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script setup></script>

<style scoped>
.section-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 24px;
}

@media (max-width: 768px) {
  .v-col {
    margin-bottom: 16px; /* Espacio entre las cards en pantallas pequeñas */
  }
}
</style>
