<template>
  <v-sheet class="mx-auto" width="100%">
    <form @submit.prevent="submit">
      <v-col cols="12">
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="name.value.value"
              :counter="50"
              :error-messages="name.errorMessage.value"
              label="Company name"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="personname.value.value"
              :counter="50"
              :error-messages="personname.errorMessage.value"
              label="Person  full name"
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="phone.value.value"
              :counter="10"
              :error-messages="phone.errorMessage.value"
              label="Phone Number"
              type="number"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="email.value.value"
              :error-messages="email.errorMessage.value"
              label="E-mail"
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-textarea
          v-model="details.value.value"
          :counter="50"
          :error-messages="details.errorMessage.value"
          label="Details"
          variant="outlined"
        ></v-textarea>
      </v-col>
      <v-col cols="12" class="text-center">
        <v-btn class="me-4" type="submit" color="primary">
          {{ $t("btnformbusiness") }}</v-btn
        >
        <v-btn class="mi-4" color="primary" @click="handleReset">
          {{ $t("btnformbusinessc") }}
        </v-btn>
        <v-btn class="ms-4" color="primary" @click="reiniciar">
          {{ $t("contactreturn") }}
        </v-btn>
      </v-col>
    </form>
  </v-sheet>
</template>
<script setup>
import { useField, useForm } from "vee-validate";
defineProps({
  reiniciar: {
    type: Function,
    Required: true,
  },
});
const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value) {
      if (!value) {
        return "Company name is required";
      }

      if (value.length < 2) {
        return "Company name must be at least 2 characters";
      }
      if (value?.length <= 50) return true;

      return " Company name must be 50 characters or less";
    },

    personname(value) {
      if (!value) {
        return "Person name is required";
      }

      if (value.length < 2) {
        return "Person name must be at least 2 characters";
      }
      if (value?.length <= 50) return true;

      return "Person name must be 50 characters or less";
    },

    phone(value) {
      if (!value) {
        return "Phone is required";
      }

      if (/^[0-9-]{10,}$/.test(value)) return true;

      return "Phone number must to be at 10 digits.";
    },
    email(value) {
      if (!value) {
        return "email is required";
      }

      if (/^[a-zA-Z0-9._%+-]{1,50}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value))
        return true;
      return "Must be a valid e-mail.";
    },

    details(value) {
      if (!value) {
        return "Details is required";
      }
      if (value?.length <= 500) return true;

      return " Details must be 500 caracters ";
    },
  },
});
const name = useField("name");
const personname = useField("personname");
const phone = useField("phone");
const email = useField("email");
const details = useField("details");

const submit = handleSubmit((values) => {
  console.log(values);
  alert(JSON.stringify(values, null, 2));
});
</script>
