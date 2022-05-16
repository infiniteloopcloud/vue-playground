<script lang="ts">
import Vue from "vue";
import BaseButton from "@/components/BaseButton.vue";

export default Vue.extend({
  components: { BaseButton },
});
</script>

<template>
  <div>
    <base-button v-for="n in 1000" :key="n">Test</base-button>
  </div>
</template>
