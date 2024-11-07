<script setup lang="ts">
	const supabase = useSupabaseClient();
	const form = reactive({ email: "", password: "" });
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
	<section class="bg-gray-50 dark:bg-gray-900">
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
					<form class="space-y-4 md:space-y-6" action="#">
						<div>
							<label
								for="email"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>Your email</label
							>
							<input
								type="email"
								name="email"
								id="email"
								class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="name@company.com"
								required="true"
							/>
						</div>
						<div>
							<label
								for="password"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>Password</label
							>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="••••••••"
								class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required="true"
							/>
						</div>
						<div class="flex items-center justify-between">
							<div class="flex items-start">
								<div class="flex items-center h-5">
									<input
										id="remember"
										aria-describedby="remember"
										type="checkbox"
										class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
										required="false"
									/>
								</div>
								<div class="ml-3 text-sm">
									<label for="remember" class="text-gray-500 dark:text-gray-300"
										>Remember me</label
									>
								</div>
							</div>
						</div>
						<UButton
							label="Sign in"
							block
							color="primary"
							@click="signInWithEmail()"
						/>
						<div class="flex items-center justify-center my-4">
							<hr class="w-full border-gray-300" />
							<span class="px-3 text-gray-500 font-medium">or</span>
							<hr class="w-full border-gray-300" />
						</div>
						<UButton
							label="Sign in with Google"
							icon="logos:google-icon"
							color="neutral"
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
					</form>
				</div>
			</div>
		</div>
	</section>
</template>
