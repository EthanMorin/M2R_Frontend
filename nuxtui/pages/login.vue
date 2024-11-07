<script setup lang="ts">
	const supabase = useSupabaseClient();
	const form = reactive({ email: "", password: "", remember: false });
	const signInWithEmail = async () => {
		const { error } = await supabase.auth.signInWithPassword({
			email: form.email,
			password: form.password,
		});
		if (error != null) {
			console.log(error);
		}
	};

	const signInWithGoogle = async () => {
		const { error } = await supabase.auth.signInWithOAuth({
			provider: "google",
			options: {
				redirectTo: "http://localhost:3000/confirm",
			},
		});
		if (error != null) {
			console.log(error);
		}
	};
</script>
<template>
	<section class="bg-gray-50 dark:bg-gray-900 drop-shadow-md">
		<div
			class="flex flex-col items-center justify-center px-6 py-6 mx-auto md:h-screen lg:py-0"
		>
			<div
				class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
			>
				<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
					<h1
						class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
					>
						Create your account
					</h1>
					<UFormField label="Your email" class="w-full" required>
						<UInput
							v-model="form.email"
							placeholder="name@company.com"
							color="primary"
							size="xl"
							class="w-full bg-gray-50"
							required
						/>
					</UFormField>
					<UFormField label="Password" class="w-full" required>
						<UInput
							type="password"
							v-model="form.password"
							placeholder="••••••••••••••••"
							color="primary"
							size="xl"
							class="w-full bg-gray-50"
							required
						/>
					</UFormField>
					<UFormField>
						<UCheckbox
							v-model="form.remember"
							value="true"
							label="Remember me"
						/>
					</UFormField>
					<UButton
						label="Sign in"
						block
						color="primary"
						@click="signInWithEmail()"
					/>
					<USeparator label="or" />
					<UButton
						label="Sign in with Google"
						icon="logos:google-icon"
						color="neutral"
						@click="signInWithGoogle()"
						block
					/>
					<p class="text-sm font-light text-gray-500 dark:text-gray-400">
						Need an account?
						<nuxt-link
							to="/register"
							class="font-medium text-primary-600 hover:underline dark:text-primary-500"
						>
							Sign Up</nuxt-link
						>
					</p>
				</div>
			</div>
		</div>
	</section>
</template>
