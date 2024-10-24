<script setup lang="ts">
	defineProps<{
		listing: { price: number; img: string; listingInfo: string };
	}>();
</script>
<template>
	<div class="flex flex-col items-left p-4 border rounded-lg">
		<img
			class="rounded-lg w-60 h-64"
			:src="listing.img"
			v-if="listing.img != ''"
		/>
		<div
			class="w-60 h-64 bg-gray-300 rounded-full mb-4"
			v-if="listing.img == ''"
		></div>
		<h2 class="mx-4 text-xl font-semibold my-2">${{ listing.price }}</h2>
		<p class="mx-4 text-lg">{{ listing.listingInfo }}</p>
	</div>
</template>
