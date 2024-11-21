<script setup lang="ts">
const router = useRouter()
</script>
<template>
  <UButton
    icon="i-heroicons-arrow-left"
    label="Go Back" 
    @click="() => router.back()"
    class="mb-4"
  />
</template>