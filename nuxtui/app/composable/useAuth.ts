import type { User } from "@supabase/supabase-js"

export const useAuth = () => {
  const { $supabase } = useNuxtApp()
  const user = useState<User | null>('user', () => null) // Reactive state for user data

  // Function to check and save the authenticated user session
  const checkAuth = async () => {
    const session = await $supabase.auth.getSession()
    user.value = session.data?.session?.user || null // Save user data if logged in
  }

  // Function to log out the user and clear the user state
  const signOut = async () => {
    const { error } = await $supabase.auth.signOut()
    if (error) {
      console.error('Error signing out:', error.message)
    } else {
      user.value = null // Clear user state after logout
    }
  }

  // Initialize authentication check on mount
  onMounted(() => {
    checkAuth()
  })

  // Listen for auth state changes and update the user state
  $supabase.auth.onAuthStateChange((event, session) => {
    user.value = session?.user || null
  })

  return {
    user,
    checkAuth,
    signOut, // Export signOut function for use in components
  }
}
