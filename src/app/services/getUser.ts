// /app/queries/userQueries.ts

import { UserDetails } from '@/app/types';
import { getUserTechpacks, supabase } from '@/app/services/db';

export async function fetchUsersByRole(): Promise<UserDetails[]> {
    let userId = "9090e772-c7c4-4f10-89e3-17aeebd5013e"
    const { data, error } = await getUserTechpacks(userId);
    
    if (error) {
        console.error('Error fetching users:', error);
        return [];
    }
    
    return data as UserDetails[]; // Type assertion for safety
}
