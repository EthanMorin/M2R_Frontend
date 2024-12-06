<script setup lang="ts">
const supabase = useSupabaseClient();
async function signInWithGoogle() {
  await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `/confirm`
    }
  })
}
</script>
<template>
	<UButton
		label="Sign in with Google"
		icon="logos:google-icon"
		color="neutral"
		@click="signInWithGoogle()"
		block
		class="mb-5"
	/>
</template>
