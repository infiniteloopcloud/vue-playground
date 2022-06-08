<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
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
    <input
      v-for="(input, index) in inputs"
      :key="index"
      v-model="inputs[index]"
      placeholder="Test"
      class="input"
    />
  </div>
</template>

<style scoped>
.input {
  padding: 0.5rem;
  background-color: lightblue;
  border: 1px solid black;
  border-radius: 5px;
}
</style>
