<script setup lang="ts">
	import type { Listing } from "~/types/listing";
	const props = defineProps<{
		listing: Listing;
	}>();
	const {
		status: imgStatus,
		data: imgData,
		error: imgError,
	} = await useLazyFetch(`/api/listing/photos/${props.listing.id}`);
	watch(imgError, (newError) => {
		if (imgError) {
			console.log(imgError.value);
		}
	});
</script>
<template>
	<UCard class="relative h-[300px] w-full rounded-lg overflow-hidden shadow-lg">
		<div class="absolute inset-0 overflow-hidden">
			<UIcon
				v-if="imgStatus === 'pending'"
				name="i-lucide-loader-2"
				class="animate-spin mx-auto mb-4 size-12 text-primary-600"
			/>
			<img
				v-if="imgStatus != 'pending'"
				:src="`${imgData.D.Results[0].UriLarge}`"
				:alt="`${listing.address.streetNumber} ${listing.address.streetDirPrefix} ${listing.address.streetName} ${listing.address.streetSuffix}, ${listing.address.city}, ${listing.address.stateOrProvince} ${listing.address.postalCode}`"
				class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
			/>
		</div>
		<div
			class="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/40 to-transparent text-white p-4 z-10"
		>
			<div class="flex flex-row justify-between">
				<div>
					<div class="text-2xl font-bold">
						${{ listing.listPrice.toLocaleString() }}
					</div>
					<div class="text-sm flex flex-col justify-between h-8 mb-2">
						<div>
							{{ listing.address.streetNumber }}
							{{ listing.address.streetDirPrefix }}
							{{ listing.address.streetName }}
							{{ listing.address.streetSuffix }}
						</div>
						<div>
							{{ listing.address.city }},
							{{ listing.address.stateOrProvince }}
							{{ listing.address.postalCode }}
						</div>
					</div>
				</div>
				<div class="flex justify-center items-center">
					<UButton
						size="lg"
						label="View"
						color="neutral"
						block
						class="w-2xl"
						@click="navigateTo(`/listing/${listing.id}`)"
					/>
				</div>
			</div>
		</div>
	</UCard>
</template>
