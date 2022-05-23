<template>
  <v-container>
    <h1 style="text-align: center">Expenses</h1>

    <div class="buttons">
      <v-btn color="yellow" v-for="i in 9" :key="i">
        {{ i }}
      </v-btn>
    </div>

    <div style="text-align: center; margin: 0 0 10px">
      <v-btn color="green" style="width: 300px" @click.stop="registExpenses">
        register
      </v-btn>
    </div>

    <div style="text-align: center; margin: 0 0 10px">
      <v-btn color="green" style="width: 300px" @click.stop="clearExpenses">
        clear
      </v-btn>
    </div>

    <div style="text-align: center; margin: 0 0 10px">
      <h3 v-for="bill in bills" :key="bill">{{bill.bill}}</h3>
    </div>

    <v-btn class="addButton" icon large @click.stop="showAddBillPage=true">
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <add-bill v-bind:show="showAddBillPage"></add-bill>

  </v-container>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
//import AddBill from '@/components/AddBill.vue'

type Bill = {
    bill: string;
}

@Options({
  components: {},
})

export default class Expenses extends Vue {
  // お勘定
  private bills: Bill[] = [];

  private showAddBillPage = false;

  public created() {
    this.getBills();
  }

  private getBills() {
    let storageData = window.localStorage.getItem("testKey");
    if (storageData == null) storageData = "[]";
    this.bills = JSON.parse(storageData);
  }

  private registExpenses() {
    let date = new Date().toString();
    this.bills.push({bill: date});
    window.localStorage.setItem("testKey", JSON.stringify(this.bills));
    
    console.log(this.bills);
  }

  private clearExpenses() {
    window.localStorage.clear();
    this.getBills();
  }

}
</script>

<style lang="scss" scoped>
.buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 300px;
  margin: 0 auto 0;
  button {
    width: 30%;
    margin: 0 0 10px;
    font-size: 15px;
  }
}

.addButton {
  background-color: olivedrab;
  color: white;
  position:fixed;
  right:50px;
  bottom:50px;
}
</style>