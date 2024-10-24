<template>
	<div class="">
		<form action="" class="mt-56 mb-96">
			<div class="flex flex-col items-center">
				<h1 class="text-3xl font-bold text-gray-800">Contact Us</h1>
				<div class="w-1/2">
					<label for="name" class="text-gray-600">Name</label>
					<input
						type="text"
						id="name"
						class="w-full p-2 border border-gray-300 rounded-lg"
					/>
				</div>
				<div class="w-1/2">
					<label for="email" class="text-gray-600">Email</label>
					<input
						type="email"
						id="email"
						class="w-full p-2 border border-gray-300 rounded-lg"
					/>
				</div>
				<div class="w-1/2">
					<label for="message" class="text-gray-600">Message</label>
					<textarea
						id="message"
						class="w-full p-2 border border-gray-300 rounded-lg"
					></textarea>
				</div>
				<button
					class="bg-gray-800 text-white font-semibold py-2 px-6 rounded-full hover:bg-gray-900 mt-4"
				>
					Submit
				</button>
			</div>
		</form>
	</div>
</template>
