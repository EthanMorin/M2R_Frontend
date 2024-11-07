<script setup lang="ts">
const user = useSupabaseUser()
</script>
<template>
  <pre>{{ user }}</pre>
  <NuxtLoadingIndicator />
</template>