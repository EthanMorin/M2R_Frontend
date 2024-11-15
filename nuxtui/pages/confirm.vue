<script setup lang="ts">
	const user = useSupabaseUser();
	const userStore = useUserStore();

	watch(
		user,
		() => {
			if (user.value) {
				userStore.setUser(user.value);
				return navigateTo("/listings");
			} else {
				console.log("Authentication failed");
				return navigateTo("/login");
			}
		},
		{ immediate: true }
	);
</script>

<template>
	<div class="flex w-dvw h-dvh justify-center items-center">
		<UContainer>
			<div class="max-w-md mx-auto py-16 text-center">
				<UIcon
					name="i-lucide-loader-2"
					class="animate-spin mx-auto mb-4 size-12 text-primary-600"
				/>
				<h1 class="text-2xl font-bold mb-2">Just a moment...</h1>
				<p class="text-gray-600">We're redirecting you to your destination</p>
			</div>
		</UContainer>
	</div>
</template>
