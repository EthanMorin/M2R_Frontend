<script setup lang="ts">
	// const userStore = useUserStore();
</script>
<template>
	<div class="border-b">
		<UContainer class="flex justify-between items-center py-4">
			<NuxtLink to="/"
				><img src="/m2r-logo.png" alt="M2R logo" class="w-32"
			/></NuxtLink>
			<div>
				<UInput
					size="xl"
					color="primary"
					icon="material-symbols:search-rounded"
					placeholder="search for listings by address"
					class="rounded-full w-96"
				/>
			</div>
			<div class="flex items-center">
				<ULink variant="link" to="/listings" class="mr-4">Listings</ULink>
				<ULink variant="link" to="/contact" class="mr-4">Contact</ULink>
				<!-- <template v-if="!userStore.isLoggedIn"> -->
					<ULink variant="link" to="/login" class="mr-4">Login</ULink>
					<UButton size="lg" to="/register" color="primary">Register</UButton>
				<!-- </template> -->
				<!-- <template v-else>
					<ULink variant="link" to="/user" class="mr-4">Profile</ULink>
				</template> -->
			</div>
		</UContainer>
	</div>
</template>
