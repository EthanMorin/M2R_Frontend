<script setup lang="ts">
	const user = useSupabaseUser();

	watch(
		user,
		() => {
			if (user.value) {
				return navigateTo("/listings");
			} else {
				console.log("Authentication failed");
			}
		},
		{ immediate: true }
	);
</script>

<template>
	<div>
		<p>Redirecting...</p>
	</div>
</template>
