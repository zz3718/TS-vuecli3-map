<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <div id="mapView" class="mapView"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import Map from '@/mixins/map'

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  data () {
    return {
      minixs: [Map]
    }
  }
  // minixs: [Map]
  mounted () {
    // this.map('mapView')
    console.log(Map)
  }
}
</script>
