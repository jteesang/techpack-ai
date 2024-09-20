import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { supabase } from '@/app/utils/createClient';
import { Session, User } from '@supabase/supabase-js';

interface UserContextType {
    session: Session | null;
    user: User | null;
    loading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [session, setSession] = useState<Session | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSession = async () => {
            const { data } = await supabase.auth.getSession();
            setSession(data.session);
            setLoading(false);
        };

        fetchSession();

        const { data: authListener } = supabase.auth.onAuthStateChange(async (_event, session) => {
            setSession(session);
            if (session) {
                // const { data: userData } = await supabase.from('users').select('*').eq('id', session.user.id).single();
                setUser(session?.user);
            } else {
                setUser(null);
            }
        });

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);

    return (
        <UserContext.Provider value={{ session, user, loading }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
