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
    urlInfos: [
      {
        id: 0,
        icon: "mdi-github",
        url: "https://github.com/OxySwap",
        txt: "Github",
      },
      {
        id: 1,
        icon: "mdi-file",
        url:
          "https://etherscan.io/address/0xbc86d4d7e63b8f942da454281b838a109e12d71a#code",
        txt: "UniswapV2Factory",
      },
      {
        id: 2,
        icon: "mdi-file",
        url:
          "https://etherscan.io/address/0x1409e2a1cb402ad0a029117d2fa4722a461f66f5#code",
        txt: "UniswapV2Router02",
      },
    ],
  }),
});
</script>
