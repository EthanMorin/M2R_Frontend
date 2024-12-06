<script setup lang="ts">
	import type { Listing } from "~/types/listing";
	const route = useRoute();
	const listing = ref<Listing | null>(null);
	console.log(route.fullPath);
	const {
		status: listingStatus,
		data: listingData,
		error: listingError,
	} = await useLazyFetch(`/api/listing/${route.params.listing_id}`);
	watch([listingData, listingError], ([newData, newError]) => {
		if (listingError) {
			console.log(listingError.value);
		}
		if (newData) {
			listing.value = newData[0];
		}
	});
	const {
		status: imgStatus,
		data: imgData,
		error: imgError,
	} = await useLazyFetch(`/api/listing/photos/${route.params.listing_id}`);
	watch(imgError, (newError) => {
		if (imgError) {
			console.log(imgError.value);
		}
	});

	// const firstUriLarge = imgData.D.Results[0]?.UriLarge;
	// console.log(firstUriLarge);
</script>
<template>
	<Loading v-if="listingStatus === 'pending'" />
	<div
		v-else-if="listingStatus != 'pending' && listing != null"
		class="container mx-auto px-4 py-8"
	>
		<UContainer>
			<UCard>
				<h1 class="text-3xl font-bold mb-4">
					{{ listing?.address.streetNumber }}
					{{ listing?.address.streetDirPrefix }}
					{{ listing?.address.streetName }}
					{{ listing?.address.streetSuffix }}, {{ listing?.address.city }},
					{{ listing?.address.stateOrProvince }}
					{{ listing?.address.postalCode }}
				</h1>
				<p class="text-2xl font-bold mb-6">
					${{ listing?.currentPrice.toLocaleString() }}
				</p>
				<!-- img carousel -->
				<div>
					<pre>{{}}</pre>
					<!-- <UCarousel loop auto-scroll v-slot="{ item }" :items="imgData"> -->
						<img :src="`${ imgData.D.Results[0].UriLarge }`" />
					<!-- </UCarousel> -->
				</div>
				<div class="flex flex-row">
					<div class="flex flex-col">
						<p class="text-xl font-normal mb-6">
							{{ listing?.bedsTotal }} Bedrooms
							{{ listing?.bathsTotal }} Bathrooms
						</p>
						<p class="text-xl font-normal mb-6">
							{{ listing?.lotSizeSquareFeet }} Sq. Ft.
						</p>
						<p class="text-xl font-normal mb-6">
							Built in {{ listing?.yearBuilt }}
						</p>
						<p class="text-xl font-normal mb-6">
							Property Type: {{ listing?.propertyType }}
						</p>
						<p class="text-xl font-normal mb-6">
							Property Subtype: {{ listing?.propertySubType }}
						</p>
						<template v-if="listing?.associationFee">
							<p class="text-xl font-normal mb-6">
								Association Fee: ${{ listing?.associationFee }}
								{{ listing?.associationFeeFrequency }}
							</p>
						</template>
						<template v-if="listing?.taxAmount">
							<p class="text-xl font-normal mb-6">
								Tax Amount: ${{ listing?.taxAmount }} (Year:
								{{ listing?.taxYear }})
							</p>
						</template>
						<p class="text-xl font-normal mb-6">
							Lot Size: {{ listing?.lotSizeAcres }} Acres, Building Area:
							{{ listing?.buildingAreaTotal }} Sq. Ft. Stories:
							{{ listing?.stories }}
							, Garage Spaces: {{ listing?.garageSpaces }}
						</p>
					</div>
				</div>
				<div>
					<!-- description -->
					<p class="text-xl font-normal mb-6">
						{{ listing?.publicRemarks }}
					</p>
					<p class="text-xl font-normal mb-6">
						Inclusions: {{ listing?.inclusions }}
					</p>
				</div>
				<div class="flex items-center">
					<UButton class="mt-3.5" to="/contact" label="Contact" size="xl" />
				</div>
			</UCard>
		</UContainer>
	</div>
</template>
