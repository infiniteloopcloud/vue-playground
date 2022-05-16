<script lang="ts">
import Vue from "vue";
import BaseInput from "@/components/BaseInput.vue";

export default Vue.extend({
  components: { BaseInput },
  data() {
    const finalData: any = {
      inputs: [],
    };

    for (let i = 0; i < 1000; i++) {
      finalData.inputs[i] = "";
    }

    return finalData;
  },
});
</script>

<template>
  <div>
    <base-input
      v-for="(input, index) in inputs"
      :key="index"
      v-model="inputs[index]"
    ></base-input>
  </div>
</template>
