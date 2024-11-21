<script setup lang="ts">
	const user = useSupabaseUser();
	const userStore = useUserStore();
	const isLoading = ref(true);

	watch(
		user,
		async (newUser) => {
			if (newUser) {
				userStore.setUser(newUser);
				isLoading.value = false;
				console.log("User is authenticated");
				// return navigateTo("/listings");
			} else if (newUser === null) {
				isLoading.value = false;
				console.log("User is not authenticated");
				// return navigateTo("/login");
			}
		},
		{ immediate: true }
	);

	// Add a timeout fallback just in case
	onMounted(() => {
		setTimeout(() => {
			if (isLoading.value) {
				isLoading.value = false;
				console.log("User is not authenticated, redirecting to login, timeout");
				// navigateTo("/login");
			}
		}, 10000); // 10 second fallback
	});
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
				<p class="text-gray-600" v-if="isLoading">
					We're confirming your authentication...
				</p>
				<p class="text-gray-600" v-else>
					Redirecting you to your destination
				</p>
			</div>
		</UContainer>
	</div>
</template>
