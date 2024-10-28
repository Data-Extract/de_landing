<script setup lang="ts">
import EmailContacts from "~/components/EmailContacts.vue";
</script>

<template>
  <div>
    <h1>
      {{ $t("contactTitle") }}
    </h1>
    <p>
      {{ $t("counterTitle") }}
    </p>
    <Counter />
  </div>
</template>
