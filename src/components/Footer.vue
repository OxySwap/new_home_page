<template>
  <v-footer fixed class="white">
    <v-row>
      <v-spacer></v-spacer>
      <v-card flat tile width="100%" class="lighten-1 text-center">
        <v-card-text>
          <v-tooltip bottom v-for="urlInfo in urlInfos" :key="urlInfo.id">
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="mx-4 white–text" icon v-bind="attrs" v-on="on">
                <a style="text-decoration: none" :href="urlInfo.url">
                  <v-icon size="24px">
                    {{ urlInfo.icon }}
                  </v-icon>
                </a>
              </v-btn>
            </template>
            <span>{{ urlInfo.txt }}</span>
          </v-tooltip>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white">
          {{ new Date().getFullYear() }} — <strong>OxySwap</strong>
        </v-card-text>
      </v-card>
      <v-spacer></v-spacer>
    </v-row>
  </v-footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer",

  components: {},

  methods: {},

  data: () => ({
    currentIndex: 0,
    homeUrl: "",
    appUrl: "",
    miningPoolUrl: "",
  }),
});
</script>
