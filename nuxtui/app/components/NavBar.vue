<script setup lang="ts"></script>
<template>
	<div class="border-b">
		<UContainer class="flex justify-between items-center py-4">
			<NuxtLink to="/"
				><img src="/m2r-logo.png" alt="M2R logo" class="w-32"
			/></NuxtLink>
			<UInput
				size="lg"
				color="neutral"
				icon="material-symbols:search-rounded"
				placeholder="search for listings"
				class="rounded-full"
			/>
			<div class="flex items-center">
				<ULink variant="link" to="/listings" class="mr-4">Listings</ULink>
				<ULink variant="link" to="/contact" class="mr-4">Contact</ULink>
				<ULink variant="link" to="/login" class="mr-4">Login</ULink>
				<UButton size="lg" color="primary" to="/register">Register</UButton>
			</div>
		</UContainer>
	</div>
</template>
