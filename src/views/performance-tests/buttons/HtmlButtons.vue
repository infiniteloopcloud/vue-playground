<template>
  <div>
    <button v-for="n in 10000" :key="n" class="button error">Test</button>
  </div>
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
