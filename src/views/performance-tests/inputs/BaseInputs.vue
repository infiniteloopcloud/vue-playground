<script lang="ts">
import { defineComponent } from "vue";
import BaseInput from "@/components/BaseInput.vue";

export default defineComponent({
  components: { BaseInput },
  data() {
    const finalData: any = {
      inputs: [],
    };

    for (let i = 0; i < 10000; i++) {
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
