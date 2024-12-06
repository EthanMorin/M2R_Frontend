<script setup lang="ts">
	import type { Listing } from "~/types/listing";
	import type { Agent } from "~/types/agent";
	const listings = ref<Listing[]>([]);
	const listingData = await useFetch("/api/listings");
	listings.value = listingData.data.value as Listing[];
	const agents = ref<Agent[]>([]);
	agents.value = [
		{
			id: "1",
			name: "Brandon Morin",
			position: "Senior Agent",
			email: "Brandonmorin@realty.com",
			phone: "(435) 275-2775",
			description:
				"Experienced real estate agent with a passion for helping clients find their dream homes.",
			imgPath:
				"https://cdn.chime.me/image/fs/user-info/2023810/9/w640_original_2bf11a11-b748-4f36-813e-e4ddb64fc8e7-png.webp",
		},
		{
			id: "2",
			name: "Jake Warnick",
			position: "Real Estate Agent",
			email: "JaWarnick@realty.com",
			phone: "(801) 555-1234",
			description: "Specializing in luxury properties.",
			imgPath: "https://cdn.discordapp.com/attachments/1263918177369460808/1308259531385737327/Jake_Warnick_7.14.24-36.jpg?ex=6753b4a2&is=67526322&hm=4a789d6d72ecaed0814581c5b966472c719857c75e6111744f48aba57a25e6cc&",
		},
		{
			id: "3",
			name: "Adina Richardson",
			position: "Junior Agent",
			email: "AdinaR@realty.com",
			phone: "(801) 703-8011",
			description:
				"A dedicated junior agent eager to assist clients in their real estate journey.",
			imgPath:
				"https://cdn.chime.me/image/fs/user-info/2024524/12/w640_original_e2b9baaf-556d-420d-8d0f-f172eddab966-png.webp",
		},
	];
	// const agentData = await useFetch("/api/agents");
	// agents.value = agentData.data.value as Agent[];
</script>
<template>
	<div class="min-h-dvh">
		<UContainer class="max-w-7xl mx-auto">
			<div
				class="grid max-w-screen-xl py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
			>
				<div class="mr-auto place-self-center lg:col-span-7">
					<h1
						class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
					>
						Let's find your dream house
					</h1>
					<p
						class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl"
					>
						Morin2Realty is a team of experienced real estate professionals
						specializing in residential properties who are dedicated to
						providing exceptional service and guidance to buyers and sellers. We
						are skilled in market analysis, negotiation, and marketing
						strategies. Committed to delivering successful transactions and
						helping clients achieve their real estate goals. Passionate about
						building long-lasting relationships and exceeding client
						expectations.
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
			<h1 class="font-bold text-3xl text-center mb-10">
				Morin 2 Realty Agents
			</h1>
			<div
				class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center"
			>
				<div v-for="agent in agents" class="flex justify-center">
					<CardAgent :agent="agent" />
				</div>
			</div>
		</UContainer>
	</div>
</template>
