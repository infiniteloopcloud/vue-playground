<script lang="ts">
import { defineComponent } from "vue";

export type ButtonType = "success" | "error" | "warning";

export default defineComponent({
  props: {
    buttonType: { type: String, default: "success" },
  },
});
</script>

<template>
  <button :class="['button', buttonType]"><slot></slot></button>
</template>

<style scoped>
.button {
  padding: 1rem;
  color: white;
  border: 1px solid black;
  background-color: gray;
}

.success {
  background-color: green;
}

.warning {
  background-color: orange;
}

.error {
  background-color: red;
}
</style>
