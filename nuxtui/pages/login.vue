<script setup lang="ts">
	const supabase = useSupabaseClient();
	const form = reactive({ email: "", password: "" });
	const signInWithEmail = async () => {
		const { error } = await supabase.auth.signInWithPassword({
			email: form.email,
			password: form.password,
		});
	};
	const signInWithGoogle = async () => {
		const { error } = await supabase.auth.signInWithOAuth({
			provider: "google",
			options: {
				redirectTo: "http://localhost:3000/confirm",
			},
		});
	};
</script>
<template>
	<UContainer>
		<UFormField label="Email" name="email">
			<UInput v-model="form.email" />
		</UFormField>
		<UDivider label="OR" />
		<UFormField label="Password" name="password">
			<UInput v-model="form.password" />
		</UFormField>
		<UButton label="Login" color="primary" block />
	</UContainer>
</template>
