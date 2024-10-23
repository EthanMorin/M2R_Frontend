<script lang="ts">
	const { agent } = defineProps(['agent']);
</script>
<template>
	<div class="flex flex-col items-center p-4 border rounded-lg">
		<img :src="agent.img" v-if="agent.img != ''" />
		<div
			class="w-24 h-24 bg-gray-300 rounded-full mb-4"
			v-if="agent.img == ''"
		>Image not loading</div>
		<h2 class="text-lg font-semibold">{{ agent.name }}</h2>
		<p>{{ agent.desc }}</p>
	</div>
</template>
