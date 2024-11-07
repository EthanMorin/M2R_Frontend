<script lang="ts" setup>
	defineProps<{
		agent: {
			name: string;
			img: string;
			email: string;
			phone?: string;
			desc?: string;
		};
	}>();
</script>
<template>
	<UCard>
		<template #header>
			<img class="rounded-full" :src="agent.img" />
		</template>
		<h2>{{ agent.name }}</h2>
		<p>{{ agent.phone }}</p>
		<p>{{ agent.email }}</p>
		<p>{{ agent.desc }}</p>
	</UCard>
</template>
