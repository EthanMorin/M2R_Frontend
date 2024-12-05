<script setup lang="ts">
	import type { Listing } from "~/types/listing";
	const route = useRoute();
	const listing = ref<Listing | null>(null);
	console.log(route.fullPath);
	const {
		status,
		data: listingData,
		error,
	} = await useLazyFetch(`/api/listing/${route.params.listing_id}`);
	watch([listingData, error.value], ([newData, newError]) => {
		if (newData && newData.length > 0) {
			listing.value = newData[0];
		}
	});
</script>
<template>
	<Loading v-if="status === 'pending'" />
	<div v-else-if="status != 'pending' && listing != null">
		<UContainer class="w-dvw h-dvh">
			<Ucard>
				<h1 class="text-2xl font-bold mb-2">
					{{ listing?.address.streetNumber }}
					{{ listing?.address.streetDirPrefix }}
					{{ listing?.address.streetName }} {{ listing?.address.streetSuffix }},
					{{ listing?.address.city }}, {{ listing?.address.stateOrProvince }}
					{{ listing?.address.postalCode }}
				</h1>
			</Ucard>
		</UContainer>
	</div>
</template>
