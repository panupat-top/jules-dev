'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { usePathname } from 'next/navigation'; // To highlight active link (optional)

const Navigation = () => {
  const { user } = useAuth();
  const pathname = usePathname();

  // Basic styling for active link (optional)
  const linkStyle = (path: string) => {
    return pathname === path ? { fontWeight: 'bold', textDecoration: 'underline' } : {};
  };

  return (
    <nav style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '15px', padding: 0 }}>
        <li>
          <Link href="/" style={linkStyle('/')}>
            Landing
          </Link>
        </li>
        <li>
          <Link href="/home" style={linkStyle('/home')}>
            Home
          </Link>
        </li>
        {user ? (
          <>
            <li>
              <Link href="/profile" style={linkStyle('/profile')}>
                Profile
              </Link>
            </li>
            {/* Logout button could also be here, or stay in Profile page */}
          </>
        ) : (
          <>
            <li>
              <Link href="/login" style={linkStyle('/login')}>
                Login
              </Link>
            </li>
            <li>
              <Link href="/register" style={linkStyle('/register')}>
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
