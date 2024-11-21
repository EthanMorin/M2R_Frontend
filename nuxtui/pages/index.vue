<script setup lang="ts">
	import type { Listing } from "~/types/listing";
	var listings: Listing[] = [];
	const listingData = await useFetch("/api/listings");
	listings = listingData.data.value;

	const agents = ref([
		{
			name: "Brandon Morin",
			img: "https://cdn.chime.me/image/fs/user-info/2023810/9/w600_original_2bf11a11-b748-4f36-813e-e4ddb64fc8e7-png.webp",
			phone: "",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolorum sunt pariatur ex deleniti quisquam rem ullam, velit repudiandae sapiente?",
		},
		{
			name: "Adina Richards",
			img: "https://cdn.chime.me/image/fs/user-info/2024524/12/w640_original_e2b9baaf-556d-420d-8d0f-f172eddab966-png.webp",
			phone: "",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolorum sunt pariatur ex deleniti quisquam rem ullam, velit repudiandae sapiente?",
		},
	]);
</script>

<template>
	<UContainer class="max-w-7xl mx-auto">
		<div
			class="grid max-w-screen-xl py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
		>
			<div class="mr-auto place-self-center lg:col-span-7">
				<h1
					class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
				>
					Let's find your next house
				</h1>
				<p
					class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl"
				>
					Rachel and Brandon Morin are a team of experienced real estate
					professionals specializing in residential properties who are dedicated
					to providing exceptional service and guidance to buyers and sellers.
					We are skilled in market analysis, negotiation, and marketing
					strategies. Committed to delivering successful transactions and
					helping clients achieve their real estate goals. Passionate about
					building long-lasting relationships and exceeding client expectations.
				</p>
				<UButton size="xl" to="/listings">View Listings</UButton>
			</div>
			<div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
				<img
					src="https://wereintherockies.com/wp-content/uploads/2022/11/St.-George-Utah.jpg"
					alt="mockup"
					class="rounded-2xl"
				/>
			</div>
		</div>
	</UContainer>
	<!-- Testamonial -->
	<UContainer class="my-20">
		<UCard>
			<UCarousel
				v-slot="{ item }"
				loop
				auto-scroll
				:items="listings"
				:ui="{ item: 'basis-1/3' }"
			>
				<CardListing :listing="item" class="drop-shadow-2xl" />
			</UCarousel>
		</UCard>
	</UContainer>
	<UContainer class="my-20">
		<h1 class="font-bold text-3xl text-center mb-10">Morin 2 Realty Agents</h1>
		<div
			class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center"
		>
			<div v-for="agent in agents" class="flex justify-center">
				<CardAgent :agent="agent" />
			</div>
		</div>
	</UContainer>
</template>
