<script setup lang="ts">
	defineProps<{
		agent: { name: string; img: string; desc: string; id: number };
	}>();
</script>
<template>
	<div class="px-20 py-10 flex flex-col items-center p-4 border-2 rounded-lg">
		<img class="rounded-lg w-60 h-64" :src="agent.img" v-if="agent.img != ''" />
		<div class="w-24 h-24 bg-gray-300 rounded-full mb-4" v-if="agent.img == ''"></div>
		<h2 class="text-xl font-semibold mt-5">{{ agent.name }}</h2>
		<p class="mx-4 text-center text-lg">{{ agent.desc }}</p>
	</div>
</template>
