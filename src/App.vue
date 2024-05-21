<template>
  <div :class="$style.spinner_background">
    <h1>Rsbuild with Vue</h1>
    <p>Start building amazing things with Rsbuild.</p>
  </div>
</template>

<style lang="postcss" module>
.spinner_background {
  @apply opacity-75 bg-red-600;
}
.spinner_foreground {
  @apply opacity-25;
}
</style>
