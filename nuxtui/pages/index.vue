<script setup lang="ts">
	// const user = useSupabaseUser()
	const agents = ref([
		{
			name: "Brandon Morin",
			img: "https://cdn.chime.me/image/fs/user-info/2023810/9/w600_original_2bf11a11-b748-4f36-813e-e4ddb64fc8e7-png.webp",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolorum sunt pariatur ex deleniti quisquam rem ullam, velit repudiandae sapiente?",
			id: 1,
		},
		{
			name: "Adina Richards",
			img: "https://cdn.chime.me/image/fs/user-info/2024524/12/w640_original_e2b9baaf-556d-420d-8d0f-f172eddab966-png.webp",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolorum sunt pariatur ex deleniti quisquam rem ullam, velit repudiandae sapiente?",
			id: 2,
		},
		{
			name: "Jake Warnick",
			img: "",
			phone: "",
			email: "",
			desc: "",
			id: 3,
		},
	]);

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
				<UButton size="xl">View Listings</UButton>
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
				<UCard>
					<template #header>
						<h3>{{ item.title }}</h3>
						<img :src="item.img" alt="image of listing" />
					</template>
					<p>{{ item.price }}</p>
					<p>{{ item.listingInfo }}</p>
				</UCard>
			</UCarousel>
		</UCard>
	</UContainer>
	<UContainer class="my-20">
		<h1 class="font-bold text-3xl text-center mb-10">Morin 2 Realty Agents</h1>
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
			<div v-for="agent in agents">
				<UCard>
					<template #header>
						<img class="rounded-full" :src="agent.img" />
					</template>
					<h2>{{ agent.name }}</h2>
					<p>{{ agent.phone }}</p>
					<p>{{ agent.email }}</p>
					<p>{{ agent.desc }}</p>
				</UCard>
			</div>
		</div>
	</UContainer>
</template>
