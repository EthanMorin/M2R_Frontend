<script setup lang="ts">
// import { defineAsyncComponent } from 'vue';

const NavBar = defineAsyncComponent(() => import('../components/NavBar.vue'));
const FooterBar = defineAsyncComponent(() => import('../components/FooterBar.vue'));
</script>

<template>
	<NuxtRouteAnnouncer />
	<NuxtLoadingIndicator />
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
