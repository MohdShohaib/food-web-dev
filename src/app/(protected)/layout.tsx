'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/src/redux/store';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);
    const router = useRouter();

    // Check if user is a admin
    // useEffect(() => {
    //     if (!isAuthenticated) {
    //         router.replace('/login');
    //     }
    // }, [isAuthenticated, router]);

    // if (!isAuthenticated) {
    //     return null; // Prevent flash of wrong content
    // }

  return <div className="min-h-screen">{children}</div>

} 