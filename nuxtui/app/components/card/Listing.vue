<script lang="ts">
	defineProps<{
		listing: { price: Float32Array; img: string; listingInfo: string };
	}>();
</script>
<template>
  <div class="flex flex-col items-center p-4 border rounded-lg">
    <img :src="listing.img" v-if="listing.img != ''" />
    <div class="w-24 h-24 bg-gray-300 rounded-full mb-4" v-if="listing.img == ''"></div>
    <h2 class="text-xl font-semibold">{{ listing.price }}</h2>
    <p class="mx-4 text-center text-lg">{{ listing.listingInfo }}</p>
  </div>
</template>
