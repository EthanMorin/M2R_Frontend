<script setup lang="ts">
import { tryRequireModule } from 'nuxt/kit';

	const user = useSupabaseUser();
	let isLoggedIn: Boolean = false;
	watch(user, () => {
		isLoggedIn = true;
	});
</script>
<template>
	<div class="border-b">
		<UContainer class="flex justify-between items-center py-4">
			<NuxtLink to="/"
				><img src="/m2r-logo.png" alt="M2R logo" class="w-32"
			/></NuxtLink>
			<UInput
				size="xl"
				color="neutral"
				icon="material-symbols:search-rounded"
				placeholder="search for listings"
				class="rounded-full"
			/>
			<div class="flex items-center">
				<ULink variant="link" to="/listings" class="mr-4">Listings</ULink>
				<ULink variant="link" to="/contact" class="mr-4">Contact</ULink>
				<ULink v-if="!isLoggedIn" variant="link" to="/login" class="mr-4"
					>Login</ULink
				>
				<UButton v-if="!isLoggedIn" size="lg" to="/register" color="primary"
					>Register</UButton
				>
			</div>
			{{ isLoggedIn ? "Logged in as: " + user?.email : "" }}
		</UContainer>
	</div>
</template>
