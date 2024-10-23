<script lang="ts">
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
				<div
					class="border border-gray-300 rounded-lg w-full h-64 flex items-center justify-center"
				>
					<svg
						class="w-20 h-20 text-gray-200"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
					>
						<path
							d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zM9.5 11.5l-3.5 4.5h11l-4-5.5-3 4zm9.5 6H5v-2l4-5.5 3 4L16 9.5 19 17v1.5z"
						/>
					</svg>
				</div>
			</div>
		</div>
	</section>

	<!-- Featured Listings Section -->
	<section>
		<div class="flex flex-col items-center text-center mb-8">
			<h1 class="font-bold text-3xl">Featured Listings</h1>
			<p class="text-lg text-gray-500">Display featured listing cards here</p>
		</div>
	</section>

	<!-- Agents section -->
	<section>
		<div class="my-12">
			<h1 class="font-bold text-3xl text-center mb-6">Morin 2 Realty Agents</h1>
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-40">
				<!-- Agent 1 -->
				<AgentCard/>
				<!-- Agent 2 -->
				<div class="flex flex-col items-center p-4 border rounded-lg">
					<!-- Add agent image -->
					<div class="w-24 h-24 bg-gray-300 rounded-full mb-4"></div>
					<h2 class="text-lg font-semibold">Adina Morin</h2>
				</div>

				<!-- Agent 3 -->
				<div class="flex flex-col items-center p-4 border rounded-lg">
					<!-- Add agent image -->
					<div class="w-24 h-24 bg-gray-300 rounded-full mb-4"></div>
					<h2 class="text-lg font-semibold">Jake Warnick</h2>
				</div>
			</div>
		</div>
	</section>
</template>
