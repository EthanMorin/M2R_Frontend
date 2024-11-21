<script setup lang="ts">
	import type { Listing } from "~/types/listing";
	var listings: Listing[] = [];
	const data = await useFetch("/api/listings");
	listings = data.data.value;
</script>
<template>
	<div class="w-dvw min-h-dvh my-12">
		<h1 class="font-bold text-3xl text-center mb-6">Listings</h1>
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-40">
			<div v-for="listing in listings">
				<CardListing :listing="listing" class="drop-shadow-2xl" />
			</div>
		</div>
	</div>
</template>
