<template>
  <div>
    <div>
      <router-link to="/performance-tests/buttons" class="link">
        Buttons
      </router-link>
      <router-link to="/performance-tests/inputs" class="link">
        Inputs
      </router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
.link {
  padding: 1rem;
  border: 1px solid black;
  display: inline-block;
}
</style>
