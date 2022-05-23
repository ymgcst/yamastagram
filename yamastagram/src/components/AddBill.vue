<template>
  <v-bottom-sheet v-model="showPage" fullscreen></v-bottom-sheet>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class AddBill extends Vue {

  //@PropSync("show", {default: false})
  public showPage = false;

  public created() {
    console.log("aa");
    return;
  }

}
</script>

<style lang="scss" scoped>
</style>