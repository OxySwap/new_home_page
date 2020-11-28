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
    <v-row> <v-spacer />
    <video autoplay width="192" height="108" controls>
      <source src="https://gateway.pinata.cloud/ipfs/QmU1GSqu4w29Pt7EEM57Lhte8Lce6e7kuhRHo6rSNb2UaC" type="video/mp4">
      Your browser does not support the video tag.
    </video> <v-spacer /></v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue"

//import Hls from "hls.js"
//import HlsjsIpfsLoader from "hlsjs-ipfs-loader"

export default Vue.extend({
  name: "HomePage",

  mounted: function() {
    /*
    Hls.DefaultConfig.loader = HlsjsIpfsLoader;
    Hls.DefaultConfig.debug = false;
    if (Hls.isSupported()) {
      const video = document.getElementById("video");
      const hls = new Hls();
      hls.config.ipfs = Vue.prototype.$ipfs;
      hls.config.ipfsHash = "Qma41f3RCi8QZr8BtJb9gXme6zD34Z256SDvAuEBCmSxfu";
      hls.loadSource("master.m3u8");
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => video.play());
    }
    */
  },

  data: () => ({}),
});
</script>
