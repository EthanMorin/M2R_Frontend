<script setup lang="ts">
	const supabase = useSupabaseClient();
	const form = ref({
		fullName: "",
		email: "",
		phone: "",
		password: "",
		remember: false,
	});

	const signInWithGoogle = async () => {
		const { error } = await supabase.auth.signInWithOAuth({
			provider: "google",
			options: {
				redirectTo: "http://localhost:3000/confirm",
			},
		});
	};

	const show = ref(false);
	const password = ref("");

	function checkStrength(str: string) {
		const requirements = [
			{ regex: /.{8,}/, text: "At least 8 characters" },
			{ regex: /\d/, text: "At least 1 number" },
			{ regex: /[a-z]/, text: "At least 1 lowercase letter" },
			{ regex: /[A-Z]/, text: "At least 1 uppercase letter" },
		];

		return requirements.map((req) => ({
			met: req.regex.test(str),
			text: req.text,
		}));
	}

	const strength = computed(() => checkStrength(password.value));
	const score = computed(() => strength.value.filter((req) => req.met).length);

	const color = computed(() => {
		if (score.value === 0) return "neutral";
		if (score.value <= 1) return "error";
		if (score.value <= 2) return "warning";
		if (score.value === 3) return "warning";
		return "success";
	});

	const text = computed(() => {
		if (score.value === 0) return "Enter a password";
		if (score.value <= 2) return "Weak password";
		if (score.value === 3) return "Medium password";
		return "Strong password";
	});
</script>
<template>
	<div class="flex w-dvw h-dvh justify-center items-center">
		<UCard class="w-full max-w-md">
			
			<!-- <h1
				class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
			>
				Create your account
			</h1>
			<UFormField label="Your fullname" class="w-full" required>
				<UInput
					v-model="form.fullName"
					placeholder="name@company.com"
					color="primary"
					size="xl"
					class="w-full bg-gray-50"
					required
				/>
			</UFormField>
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
			<UFormField label="Your phone" class="w-full">
				<UInput
					v-model="form.phone"
					placeholder="***-***-****"
					color="primary"
					size="xl"
					class="w-full bg-gray-50"
				/>
			</UFormField>
			<div class="space-y-2">
				<UFormField label="Password" required>
					<UInput
						v-model="password"
						placeholder="Password"
						:color="color"
						:type="show ? 'text' : 'password'"
						:ui="{ trailing: 'pr-0.5' }"
						:aria-invalid="score < 4"
						aria-describedby="password-strength"
						class="w-full"
						required
					>
						<template #trailing>
							<UButton
								color="neutral"
								variant="link"
								size="sm"
								:icon="show ? 'i-lucide-eye-off' : 'i-lucide-eye'"
								aria-label="show ? 'Hide password' : 'Show password'"
								:aria-pressed="show"
								aria-controls="password"
								@click="show = !show"
							/>
						</template>
					</UInput>
				</UFormField>
				<UProgress
					:color="color"
					:indicator="text"
					:model-value="score"
					:max="4"
					size="sm"
				/>
				<p id="password-strength" class="text-sm font-medium">
					{{ text }}. Must contain:
				</p>
				<ul class="space-y-1" aria-label="Password requirements">
					<li
						v-for="(req, index) in strength"
						:key="index"
						class="flex items-center gap-0.5"
						:class="
							req.met
								? 'text-[var(--ui-success)]'
								: 'text-[var(--ui-text-muted)]'
						"
					>
						<UIcon
							:name="req.met ? 'i-lucide-circle-check' : 'i-lucide-circle-x'"
							class="size-4 shrink-0"
						/>
						<span class="text-xs font-light">
							{{ req.text }}
							<span class="sr-only">
								{{ req.met ? " - Requirement met" : " - Requirement not met" }}
							</span>
						</span>
					</li>
				</ul>
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
			<UButton label="Create Account" block color="primary" @click="" />
			<div class="flex items-center justify-center my-4">
				<hr class="w-full border-gray-300" />
				<span class="px-3 text-gray-500 font-medium">or</span>
				<hr class="w-full border-gray-300" />
			</div>
			<UButton
				label="Sign in with Google"
				icon="logos:google-icon"
				color="neutral"
				@click="signInWithGoogle()"
				block
			/>
			<p class="text-sm font-light text-gray-500 dark:text-gray-400">
				Already have an account?
				<nuxt-link
					to="/login"
					class="font-medium text-primary-600 hover:underline dark:text-primary-500"
				>
					Sign In</nuxt-link
				>
			</p> -->
		</UCard>
	</div>
</template>
