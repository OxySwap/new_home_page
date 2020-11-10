<template>
  <v-app>
    <v-app-bar app color="white">
      <div class="d-flex align-center">
        <v-img
          alt="OxySwap Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo.png"
          transition="scale-transition"
          width="120"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn :href="homeUrl" target="_blank" text>
        <span class="h1 mr-0">{{ $t("homepage.index") }}</span>
      </v-btn>
      <v-btn :href="appUrl" target="_blank" text>
        <span class="h1 mr-0">{{ $t("homepage.app") }}</span>
      </v-btn>
      <v-btn :href="miningPoolUrl" target="_blank" text>
        <span class="h1 mr-0">{{ $t("homepage.miningpool") }}</span>
      </v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <HomePage />
    </v-main>

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
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HomePage from "./components/HomePage.vue";

export default Vue.extend({
  name: "App",

  components: {
    HomePage,
  },

  mounted: function () {
    const location = window.location;
    const protocol = location.protocol;
    const hostname = location.hostname;
    let baseUrl = "";
    if (hostname.indexOf("www") >= 0 && hostname.indexOf(".") >= 0) {
      baseUrl = hostname.substring(hostname.indexOf(".") + 1);
    } else {
      baseUrl = hostname;
    }
    this.homeUrl = protocol + "//www." + baseUrl;
    this.appUrl = protocol + "//app." + baseUrl;
    this.miningPoolUrl = protocol + "//miningpool." + baseUrl;
  },

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
    homeUrl: "",
    appUrl: "",
    miningPoolUrl: "",
  }),
});
</script>
