<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo_fringerprint.png')"
          class="my-3"
          contain
          height="80"
        />
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo_txt.png')"
          class="my-3"
          contain
          height="80"
        />
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-spacer />
      <v-col class="mb-4" cols="8">
        <p class="subheading font-weight-regular">
          {{ $t("homepage.intro1") }}
        </p>
        <p class="subheading font-weight-regular">
          {{ $t("homepage.intro2") }}
        </p>
      </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HomePage",

  data: () => ({}),
});
</script>
