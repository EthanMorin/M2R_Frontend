<script setup lang="ts">
  const user = useSupabaseUser()
	const listings = ref([
		{
			title: "A Very Cool House",
			price: 100000.0,
			img: "https://ap.rdcpix.com/8c340fd63850ea7a2ccc49c23b4e68f5l-m2537335415rd-w960_h720.webp",
			listingInfo:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolorum sunt pariatur ex deleniti quisquam rem ullam, velit repudiandae sapiente?",
		},
		{
			title: "A Even Cooler House",
			price: 200000.0,
			img: "https://ap.rdcpix.com/837e330d170d55384a036ce2ba08c59cl-m1776296915rd-w960_h720.webp",
			listingInfo:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolorum sunt pariatur ex deleniti quisquam rem ullam, velit repudiandae sapiente?",
		},
		{
			title: "The Coolest House",
			price: 300000.0,
			img: "https://ap.rdcpix.com/3d9bd2203a8cd325a9707de748a83b41l-m744231667rd-w960_h720.webp",
			listingInfo:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolorum sunt pariatur ex deleniti quisquam rem ullam, velit repudiandae sapiente?",
		},
		{
			title: "Da Coolest House",
			price: 300000.0,
			img: "https://ap.rdcpix.com/3d9bd2203a8cd325a9707de748a83b41l-m744231667rd-w960_h720.webp",
			listingInfo:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolorum sunt pariatur ex deleniti quisquam rem ullam, velit repudiandae sapiente?",
		},
		{
			title: "The Coolest House",
			price: 300000.0,
			img: "https://ap.rdcpix.com/3d9bd2203a8cd325a9707de748a83b41l-m744231667rd-w960_h720.webp",
			listingInfo:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolorum sunt pariatur ex deleniti quisquam rem ullam, velit repudiandae sapiente?",
		},
	]);
</script>
<template>
	<div class="my-12">
		<h1 class="font-bold text-3xl text-center mb-6">Listings</h1>
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-40">
			<div v-for="listing in listings">
				<UCard>
					<template #header>
						<h3>{{ listing.title }}</h3>
						<img :src="listing.img" alt="image of listing" />
					</template>
					<p>{{ listing.price }}</p>
					<p>{{ listing.listingInfo }}</p>
				</UCard>
			</div>
		</div>
	</div>
  <pre>{{ user }}</pre>
</template>
