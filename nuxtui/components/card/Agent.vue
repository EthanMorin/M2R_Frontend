<script lang="ts" setup>
	import type { Agent } from "~/types/agent.js";
	defineProps<{
		agent: Agent;
	}>();
</script>

<template>
	<UCard>
		<template #header>
			<img
				class="rounded-full w-52 h-52 object-cover mx-auto"
				:src="agent.imgPath"
				alt="Agent photo"
			/>
		</template>
		<h2 class="text-lg font-bold text-center mt-2">{{ agent.name }}</h2>
		<p class="text-center">{{ agent.position }}</p>
		<p v-if="agent.email" class="text-center">{{ agent.email }}</p>
		<p v-if="agent.phone" class="text-center">{{ agent.phone }}</p>
		<p v-if="agent.description" class="text-center text-gray-600 mt-2">{{ agent.description }}</p>
	</UCard>
</template>
