import { supabase } from "./createClient";

export const getCurrentUserId = async () => {
    const { data: { session }, error } = await supabase.auth.getSession();
    
    if (error) {
      console.error('Error fetching session:', error);
      return;
    }
    const userId = session?.user?.id;    
    return userId;
  }