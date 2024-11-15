<script setup lang="ts">
	const listings = ref([
		{
			title: "A Very Cool House",
			price: 100000,
			img: "https://ap.rdcpix.com/8c340fd63850ea7a2ccc49c23b4e68f5l-m2537335415rd-w960_h720.webp",
			listingInfo:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolorum sunt pariatur ex deleniti quisquam rem ullam, velit repudiandae sapiente?",
			address: "123 Main St",
			details: {
				beds: 3,
				baths: 2,
				sqft: 2000,
				yearBuilt: 2020,
				propertyType: "Single Family"
			}
		},
		{
			title: "A Even Cooler House",
			price: 200000,
			img: "https://ap.rdcpix.com/837e330d170d55384a036ce2ba08c59cl-m1776296915rd-w960_h720.webp",
			listingInfo:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolorum sunt pariatur ex deleniti quisquam rem ullam, velit repudiandae sapiente?",
			address: "456 Elm St",
			details: {
				beds: 4,
				baths: 3,
				sqft: 2500,
				yearBuilt: 2021,
				propertyType: "Single Family"
			}
		},
		{
			title: "The Coolest House",
			price: 300000,
			img: "https://ap.rdcpix.com/3d9bd2203a8cd325a9707de748a83b41l-m744231667rd-w960_h720.webp",
			listingInfo:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolorum sunt pariatur ex deleniti quisquam rem ullam, velit repudiandae sapiente?",
			address: "789 Oak St",
			details: {
				beds: 5,
				baths: 4,
				sqft: 3000,
				yearBuilt: 2022,
				propertyType: "Single Family"
			}
		},
		{
			title: "Da Coolest House",
			price: 300000,
			img: "https://ap.rdcpix.com/3d9bd2203a8cd325a9707de748a83b41l-m744231667rd-w960_h720.webp",
			listingInfo:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolorum sunt pariatur ex deleniti quisquam rem ullam, velit repudiandae sapiente?",
			address: "101 Pine St",
			details: {
				beds: 6,
				baths: 5,
				sqft: 3500,
				yearBuilt: 2023,
				propertyType: "Single Family"
			}
		},
		{
			title: "The Coolest House",
			price: 300000,
			img: "https://ap.rdcpix.com/3d9bd2203a8cd325a9707de748a83b41l-m744231667rd-w960_h720.webp",
			listingInfo:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolorum sunt pariatur ex deleniti quisquam rem ullam, velit repudiandae sapiente?",
			address: "202 Maple St",
			details: {
				beds: 7,
				baths: 6,
				sqft: 4000,
				yearBuilt: 2024,
				propertyType: "Single Family"
			}
		},
	]);
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
