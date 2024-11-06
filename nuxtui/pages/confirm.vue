<script setup lang="ts">
	const user = useSupabaseUser();

	watch(user, () => {
		if (user.value) {
			return navigateTo("/listings");
		}
	});
</script>

<template>
	<pre>{{ user }}</pre>
	<div>loading...</div>
</template>
