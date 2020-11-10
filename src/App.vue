<template>
  <v-app>
    <v-app-bar app color="white">
      <div class="d-flex align-center">
        <a style="text-decoration: none" :href="homeUrl">
          <v-img
            style="cursor: pointer"
            alt="OxySwap Logo"
            class="d-none d-sm-block mr-1"
            contain
            src="@/assets/logo.png"
            width="100"
          />
          <v-img
            style="cursor: pointer"
            alt="OxySwap Logo"
            class="d-sm-none mr-1"
            contain
            src="@/assets/logo_small.png"
            width="30"
          />
        </a>
      </div>

      <v-spacer class="d-none d-sm-block"></v-spacer>

      <v-row>
      <v-btn :href="homeUrl" text>
        <span class="h2">{{ $t("homepage.index") }}</span>
      </v-btn>
      <v-btn :href="appUrl" target="_blank" text>
        <span class="h2">{{ $t("homepage.app") }}</span>
      </v-btn>
      <v-btn :href="miningPoolUrl" target="_blank" text>
        <span class="h1">{{ $t("homepage.miningpool") }}</span>
      </v-btn>
      </v-row>

      <v-spacer class="d-none d-sm-block"></v-spacer>

      <v-col cols="3">
        <v-radio-group
          class="d-none d-sm-block v_input"
          v-model="currentIndex"
          row
          @change="onLangChange"
        >
          <v-radio v-for="lang in langs" :key="lang.id" :value="lang.id" dense>
            <template v-slot:label>
              <v-img :src="lang.img" width="25px"></v-img>
            </template>
          </v-radio>
        </v-radio-group>
        <v-radio-group
          class="d-sm-none v_input_s"
          v-model="currentIndex"
          row
          @change="onLangChange"
        >
          <v-radio v-for="lang in langs" :key="lang.id" :value="lang.id" dense>
            <template v-slot:label>
              <v-img :src="lang.img" width="15px"></v-img>
            </template>
          </v-radio>
        </v-radio-group>
      </v-col>

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

<style lang="less" scoped>

.v_input {
  height: 20px;
  line-height: 20px;
}

.v_input_s {
  height: 50px;
  line-height: 50px;
}

.flex-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

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

    this.onLangChange(0);
  },

  methods: {
    onLangChange: function (index: any) {
      if (0 <= index && index < 2) {
        this.currentLang = this.langs[index];
        this.currentIndex = index;
      } else {
        this.currentLang = this.langs[0];
        this.currentIndex = 0;
      }
      this.$i18n.locale = this.currentIndex == 0 ? "en" : "zh";
    },
  },

  data: () => ({
    langs: [
      {
        id: 0,
        text: "English",
        img: require("@/assets/english.png"),
      },
      {
        id: 1,
        text: "中文",
        img: require("@/assets/chinese.png"),
      },
    ],
    currentLang: {},
    currentIndex: 0,
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
