<script setup lang="ts">
	// const user = useSupabaseUser();
	// const userStore = useUserStore();
	// const isLoading = ref(true);

	definePageMeta({ layout: false });
	const user = useSupabaseUser();
	const signIn = useUserStore();

	watch(
		user,
		async () => {
			if (user.value) {
				await signIn();
				navigateTo("/listings");
			}
		},
		{
			immediate: true,
		}
	);
</script>

<template>
	<Loading></Loading>
</template>
