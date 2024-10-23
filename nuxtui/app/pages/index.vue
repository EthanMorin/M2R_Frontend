<script setup lang="ts">
	const agents = ref([
		{
			name: "Brandon Morin",
			img: "https://cdn.chime.me/image/fs/user-info/2023810/9/w600_original_2bf11a11-b748-4f36-813e-e4ddb64fc8e7-png.webp",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolorum sunt pariatur ex deleniti quisquam rem ullam, velit repudiandae sapiente?",
			id: 1,
		},
		{
			name: "Jane Doe",
			img: "",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolorum sunt pariatur ex deleniti quisquam rem ullam, velit repudiandae sapiente?",
			id: 2,
		},
		{
			name: "John Smith",
			img: "",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolorum sunt pariatur ex deleniti quisquam rem ullam, velit repudiandae sapiente?",
			id: 3,
		},
	]);

	const listings = ref([]);
</script>
<template>
	<!-- Hero Section -->
	<section class="bg-white py-8">
		<div
			class="container mx-auto flex flex-col md:flex-row items-center justify-around"
		>
			<!-- Text and Buttons Section -->
			<div class="flex flex-col mb-8 md:mb-0">
				<h1 class="text-3xl font-bold text-gray-800">Morin 2 Realty</h1>
				<h2 class="text-xl text-gray-500 mb-4">Realtors for You</h2>

				<!-- Placeholder for paragraph text -->
				<div class="space-y-2 mb-6">
					<div class="mr-10">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
						dolorum sunt pariatur ex deleniti quisquam rem ullam, velit
						repudiandae sapiente?
					</div>
				</div>

				<!-- Buttons -->
				<div class="space-x-4">
					<button
						class="bg-gray-800 text-white font-semibold py-2 px-6 rounded-full hover:bg-gray-900"
					>
						Contact
					</button>
					<button
						class="border border-gray-400 text-gray-600 font-semibold py-2 px-6 rounded-full hover:bg-gray-100"
					>
						Listings
					</button>
				</div>
			</div>

			<!-- Image Placeholder Section -->
			<div class="w-full md:w-1/2">
				<img
					class="rounded-xl"
					src="https://photos.zillowstatic.com/fp/d61ea3a9d530f8b3e90031cbb0fc441e-p_e.jpg"
				/>
			</div>
		</div>
	</section>
	<hr />
	<!-- Call To Action -->
	<section>
		<h1>Let’s Find Your Next Home Together</h1>
	</section>
	<hr />
	<!-- Featured Listings Section -->
	<section v-if="(listings.length = 0)">
		<div class="flex flex-col items-center text-center mb-8">
			<h1 class="font-bold text-3xl">Featured Listings</h1>
			<p class="text-lg text-gray-500">Display featured listing cards here</p>
		</div>
	<hr />
	</section>
	<!-- Agents section -->
	<section>
		<div class="my-12">
			<h1 class="font-bold text-3xl text-center mb-6">Morin 2 Realty Agents</h1>
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-40">
				<div v-for="agent in agents">
					<CardAgent :agent="agent" />
				</div>
			</div>
		</div>
	</section>
</template>
