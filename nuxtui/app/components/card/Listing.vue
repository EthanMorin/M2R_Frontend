<script setup lang="ts">
	defineProps<{
		listing: { price: number; img: string; listingInfo: string };
	}>();
</script>

<template>
	<div class="flex flex-col items-center p-4 border rounded-lg">
		<img
			class="rounded-lg w-60 h-64 mx-auto"
			:src="listing.img"
			v-if="listing.img != ''"
		/>
		<div
			class="w-60 h-64 bg-gray-300 rounded-full mb-4 mx-auto"
			v-if="listing.img == ''"
		></div>
		<h2 class="text-xl font-semibold my-2">${{ listing.price }}</h2>
		<p class="text-lg">{{ listing.listingInfo }}</p>
	</div>
</template>
