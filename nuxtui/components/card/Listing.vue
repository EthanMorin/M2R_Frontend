<script setup lang="ts">
	const props = defineProps<{
		listing: {
			title: string;
			img: string;
			price: number;
			listingInfo: string;
		};
	}>();

	const formattedPrice = computed(() => {
		return `$${(props.listing.price / 100).toFixed(2)}`;
	});
</script>
<template>
	<UCard>
		<h3>{{ listing.title }}</h3>
		<img :src="listing.img" alt="image of listing" />
		<p>{{ formattedPrice }}</p>
		<p>{{ listing.listingInfo }}</p>
	</UCard>
</template>
