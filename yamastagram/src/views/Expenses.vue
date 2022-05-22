<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>Expenses</h1>
      </v-col>
      <v-col cols="4" v-for="i in 9" :key="i">
        <v-btn>
          {{ i }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
})
export default class Expenses extends Vue {}
</script>

<style scoped>
</style>