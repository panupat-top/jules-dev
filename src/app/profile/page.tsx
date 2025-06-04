'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { faker } from '@faker-js/faker';

interface ExtendedUserDetails {
  address: string;
  phone: string;
  company: string;
  avatar: string;
}

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [extendedDetails, setExtendedDetails] = useState<ExtendedUserDetails | null>(null);

  useEffect(() => {
    if (!user) {
      router.push('/login');
    } else {
      // Generate faker data only when user exists
      setExtendedDetails({
        address: `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.zipCode()}`,
        phone: faker.phone.number(),
        company: faker.company.name(),
        avatar: faker.image.avatar(),
      });
    }
  }, [user, router]);

  const handleLogout = () => {
    logout();
    router.push('/'); // Redirect to landing page after logout
  };

  if (!user || !extendedDetails) {
    // Show loading/redirect message until user and extendedDetails are available
    return <p>Loading profile or redirecting to login...</p>;
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <div>
        <img src={extendedDetails.avatar} alt="User Avatar" style={{ width: 100, height: 100, borderRadius: '50%' }} />
      </div>
      <p>Welcome, {user.name}!</p>
      <p>Email: {user.email}</p>
      <p>Phone: {extendedDetails.phone}</p>
      <p>Address: {extendedDetails.address}</p>
      <p>Company: {extendedDetails.company}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ProfilePage;
