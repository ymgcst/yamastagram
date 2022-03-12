<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/pingu.jpg">
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
