<template>
  <div class="home">
    <img class="homeImage" alt="pingu" src="../assets/pingu.jpg">
    <HelloWorld msg="こんにちは"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>

<style scoped>
.homeImage {
  /*border-radius: 20px;*/
  width: 100%;
  max-width: 400px;
  margin: 0px, 10%px;
}
</style>