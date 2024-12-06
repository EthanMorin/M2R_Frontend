import type { Database } from "~/types/database.types.js";

export const useUserStore = defineStore("profile", () => {
  const id = useCookie("id")
  const fullname = useCookie("fullname")
  const favoritedListings = useCookie("favorited_listings")

  // async function signIn() {
  //   clearUser();
  //   const supabase = useSupabaseClient<Database>();
  //   const user = useSupabaseUser();

  //   if (user.value) {
  //     const { data, error } = await supabase.from("user").select('user_id, full_name').eq('id', user.value.id).single()
  //     if (error) {
  //       return;
  //     }
  //     id.value = data.user_id
  //     fullname.value = data.full_name
  //   }
  // }

  async function signIn() {
    clearUser();
    fullname.value = 'Ethan Morin'
  }

  function clearUser() {
    id.value = ''
    fullname.value = ''
    favoritedListings.value = ''
  }

  async function signOut() {
    const supabase = useSupabaseClient<Database>();
    await supabase.auth.signOut();
    clearUser();
    navigateTo("/login")
  }
  return {
    id,
    fullname,
    signIn,
    signOut,
    favoritedListings
  }
})