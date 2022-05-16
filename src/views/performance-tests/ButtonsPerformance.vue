<template>
  <div>
    <div>
      <router-link to="/performance-tests/buttons/html-buttons" class="link">
        HTML Buttons
      </router-link>
      <router-link
        to="/performance-tests/buttons/component-buttons"
        class="link"
      >
        Component Buttons
      </router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
