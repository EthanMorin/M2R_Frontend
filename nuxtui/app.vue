<!-- <script setup lang="ts"></script>

<template>
	<NuxtRouteAnnouncer />
	<NuxtLoadingIndicator />
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template> -->
<script setup>
	import { createClient } from "@supabase/supabase-js";
	const supabase = createClient(
		"https://yebehiypmkexspwurhbw.supabase.co",
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InllYmVoaXlwbWtleHNwd3VyaGJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3NzQ1MDgsImV4cCI6MjA0NjM1MDUwOH0.HbzdftuHCqND1sAH70NE3GntNgJ69Qwhg_ou1fY5_68"
	);
	const countries = ref([]);

	async function getCountries() {
		const { data } = await supabase.from("countries").select();
		countries.value = data;
	}

	onMounted(() => {
		getCountries();
	});
</script>

<template>
	<ul>
		<li v-for="country in countries" :key="country.id">{{ country.name }}</li>
	</ul>
</template>
