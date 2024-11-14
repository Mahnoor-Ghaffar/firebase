'use client'
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { app } from '@/app/firebase';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React from 'react';

const auth = getAuth(app);

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Signed in:', user);
      alert('Login successful! Welcome back, ' + user.email);
      router.push('/about');
    } catch (error: any) {
      console.error('Error signing in:', error.code, error.message);
      alert('Error:wrong email or password ');
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('User signed out');
      alert('Logged out successfully');
      router.push('/login');
    } catch (error: any) {
      console.error('Error logging out:', error.message);
    }
  };

  return (
    <section className="bg-[var(--pink-bg)]">
      <div className="w-full text-center">
        <h1 className="text-[25px] leading-none text-[var(--font-color)] font-extrabold sm:text-5xl sm:leading-tight mb-5 pt-11">
          Login
        </h1>
      </div>
      
      <div className="w-full flex justify-center">
        <form onSubmit={handleLogin} className="w-[90%] sm:w-[30%] lg:w-[30%] py-11 rounded-lg">
          <div className="mb-7 mt-4">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2 px-2 border border-gray-400 rounded-md shadow-md"
              required
              placeholder="Email"
            />
          </div>

          <div className="mb-7">
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-2 px-2 border border-gray-400 shadow-md rounded-md"
              required
              placeholder="Password"
            />
          </div>

          <div className="flex gap-4 justify-end lg:justify-end mt-4">
            <button
              type="submit"
              className="text-white bg-[var(--button-color)] font-medium px-3 rounded-md 
              py-2 text-center hover:bg-[var(--button-hover)] hover:drop-shadow-md transition duration-300 
              ease-in-out w-[150px] shadow-md">
              Login
            </button>

            <button
          onClick={handleLogout}
          className="text-white bg-red-500 font-medium px-3 rounded-md 
          py-2 text-center hover:bg-red-600 hover:drop-shadow-md transition duration-300 
          ease-in-out w-[150px] shadow-md">
          Logout
        </button>
          </div>

          <p className="mt-20 text-center">
            Don’t have an account? <Link href="/signup" className='hover:underline text-[var(--font-color)]'>Sign Up</Link>
          </p>
        </form>
      </div>
      
      <div className="w-full text-center mt-10">
        
      </div>
    </section>
  );
};

export default Login;
