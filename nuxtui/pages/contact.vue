<script setup lang="ts">
	const form = ref({ message: "" });
</script>

<template>
	<div class="flex flex-col items-center justify-center w-dvw min-h-dvh">
		<UCard class="w-dvw p-6 max-w-5xl">
			<UFormField label="Your message" class="w-full my-4" required>
				<UInput
					v-model="form.message"
					color="primary"
					size="xl"
					class="w-full bg-gray-50"
					required
				/>
			</UFormField>
      <UButton label="Send"/>
		</UCard>
	</div>
</template>
