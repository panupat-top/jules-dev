import React from 'react';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to the Application</h1>
      <nav>
        <ul>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LandingPage;
