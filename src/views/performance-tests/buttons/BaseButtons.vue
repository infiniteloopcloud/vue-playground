<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "@/components/BaseButton.vue";

export default defineComponent({
  components: { BaseButton },
});
</script>

<template>
  <div>
    <base-button v-for="n in 10000" :key="n">Test</base-button>
  </div>
</template>
