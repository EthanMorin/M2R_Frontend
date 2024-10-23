<template>
	<nav class=" py-4 shadow-md">
		<div class="container mx-auto flex justify-between items-center">
			<!-- Logo -->
			<div>
				<nuxt-link to="/">
					<img class="w-32" src="/m2r-logo.png" alt="M2R logo">
				</nuxt-link>
			</div>

			<!-- Search Bar -->
			<div
				class="flex items-center border border-gray-400 rounded-full px-4 py-2"
			>
				<svg
					class="w-5 h-5 text-gray-400"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<path
						d="M23.707 22.293l-6.422-6.422A9.418 9.418 0 0019 9.5C19 4.262 14.738 0 9.5 0S0 4.262 0 9.5 4.262 19 9.5 19a9.418 9.418 0 006.371-2.715l6.422 6.422a1 1 0 001.414-1.414zM9.5 17C5.364 17 2 13.636 2 9.5S5.364 2 9.5 2 17 5.364 17 9.5 13.636 17 9.5 17z"
					/>
				</svg>
				<input
					type="text"
					placeholder="Search"
					class="ml-2 outline-none text-gray-600 placeholder-gray-400 bg-white"
				/>
			</div>

			<!-- Navigation Links -->
			<ul class="flex space-x-6 items-center">
				<li>
					<nuxt-link
						to="/listings"
						class="text-gray-600 hover:text-black"
						activeClass="text-black font-bold"
						>Listings</nuxt-link
					>
				</li>
				<li>
					<nuxt-link
						to="/contact"
						class="text-gray-600 hover:text-black"
						activeClass="text-black font-bold"
						>Contact</nuxt-link
					>
				</li>
			</ul>

			<!-- Buttons -->
			<div class="flex space-x-4">
				<nuxt-link
					to="/button-page"
					class="border border-gray-400 text-gray-600 py-2 px-4 rounded-full hover:bg-gray-100"
				>
					Login
				</nuxt-link>
				<nuxt-link
					to="/contact"
					class="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800"
				>
					Contact An Agent
				</nuxt-link>
			</div>
		</div>
	</nav>
</template>