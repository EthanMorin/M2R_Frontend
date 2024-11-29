<script lang="ts" setup>
	import type {Agent} from "~/types/agent.js"
	defineProps<{
		agent: Agent;
	}>();
</script>
<template>
	<UCard>
		<template #header>
			<img class="rounded-full" :src="agent.imgPath" />
		</template>
		<h2>{{ agent.name }}</h2>
		<p>{{ agent.position }}</p>
		<p v-if="agent.email">{{ agent.email }}</p>
		<p v-if="agent.phone">{{ agent.phone }}</p>
		<p v-if="agent.description">{{ agent.description }}</p>
	</UCard>
</template>
