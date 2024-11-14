<script setup lang="ts">
	const props = defineProps<{
		listing: {
			title: string;
			img: string;
			price: number;
			address: string;
			listingInfo: string;
		};
	}>();

	const formattedPrice = computed(
		() => `$${props.listing.price.toLocaleString()}`
	);
</script>
<template>
	<UCard class="relative h-[300px] w-full rounded-lg overflow-hidden shadow-lg">
		<div class="absolute inset-0 overflow-hidden">
			<img
				:src="listing.img"
				:alt="listing.title"
				class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
			/>
		</div>
		<div
			class="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/40 to-transparent text-white p-4 z-10"
		>
			<div class="flex flex-row">
				<div>
					<div class="text-2xl font-bold">{{ formattedPrice }}</div>
					<div class="text-sm">{{ listing.address }}</div>
					<div class="text-sm mt-1 mb-3">{{ listing.listingInfo }}</div>
				</div>
				<div class="flex justify-end items-end">
					<UButton
						size="lg"
						label="View"
						color="neutral"
						block
						class="ml-4"
					/>
				</div>
			</div>
		</div>
	</UCard>
</template>
