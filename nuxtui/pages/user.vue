<script setup lang="ts">
	// Add interface for user type
	interface User {
		id: string;
		email: string;
		user_metadata: {
			avatar_url: string;
			full_name: string;
		};
		app_metadata: {
			provider: string;
		};
		last_sign_in_at: string;
		created_at: string;
	}

	const userStore = useUserStore();
	const user = computed<User | null>(() => userStore.getUser);

	const handleLogout = async () => {
		const supabase = useSupabaseClient();
		await supabase.auth.signOut();
		userStore.clearUser();
		navigateTo("/login");
	};
</script>

<template>
	<UContainer>
		<div class="max-w-2xl mx-auto py-8">
			<div v-if="user" class="space-y-6">
				<div class="flex items-center gap-4">
					<img
						:src="user.user_metadata.avatar_url"
						:alt="user.user_metadata.full_name"
						class="w-20 h-20 rounded-full"
					/>
					<div>
						<h1 class="text-2xl font-bold">
							{{ user.user_metadata.full_name }}
						</h1>
						<p class="text-gray-600">{{ user.email }}</p>
					</div>
				</div>

				<div class="space-y-4">
					<div class="border rounded-lg p-4">
						<h2 class="font-semibold mb-2">Account Details</h2>
						<div class="grid grid-cols-2 gap-2 text-sm">
							<div>
								<p class="text-gray-600">User ID</p>
								<p>{{ user.id }}</p>
							</div>
							<div>
								<p class="text-gray-600">Last Sign In</p>
								<p>{{ new Date(user.last_sign_in_at).toLocaleDateString() }}</p>
							</div>
							<div>
								<p class="text-gray-600">Account Created</p>
								<p>{{ new Date(user.created_at).toLocaleDateString() }}</p>
							</div>
							<div>
								<p class="text-gray-600">Provider</p>
								<p class="capitalize">{{ user.app_metadata.provider }}</p>
							</div>
						</div>
					</div>
					<UButton
						color="primary"
						label="Logout"
						@click="handleLogout"
						class="w-full"
					/>
				</div>
			</div>
			<div v-else class="text-center py-12">
				<p class="text-gray-600">Please log in to view your profile</p>
				<UButton to="/login" color="primary" class="mt-4">Login</UButton>
			</div>
		</div>
		<div v-if="user" class="space-y-4">
			<div class="border rounded-lg p-4">
				<h2 class="font-semibold mb-2">Favorited Listings</h2>
				<div
					v-if="favoritedListings?.length"
					class="grid grid-cols-1 md:grid-cols-2 gap-4"
				>
					<div
						v-for="listing in favoritedListings"
						:key="listing.id"
						class="border rounded-lg p-4"
					>
						<NuxtLink
							:to="`/listings/${listing.id}`"
							class="block hover:opacity-90"
						>
							<img
								:src="listing.images[0]"
								:alt="listing.title"
								class="w-full h-48 object-cover rounded-lg mb-2"
							/>
							<h3 class="font-medium">{{ listing.title }}</h3>
							<p class="text-gray-600">${{ listing.price.toLocaleString() }}</p>
						</NuxtLink>
					</div>
				</div>
				<div v-else class="text-center py-8 text-gray-600">
					<p>No favorited listings yet</p>
					<UButton to="/listings" color="primary" class="mt-2"
						>Browse Listings</UButton
					>
				</div>
			</div>
		</div>
	</UContainer>
</template>
