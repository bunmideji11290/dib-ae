'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Image from 'next/image';
import { mockAccounts } from '../mockData/MockData';
import Header from '../header/Header';

const mockData = [
  {
    title: "Everyone's Welcome",
    imgLogo: 'https://i.imgur.com/iGDc59b.png'
  },
  {
    title: 'Smart Services',
    imgLogo: 'https://i.imgur.com/jSCNm6t.png'
  },
  {
    title: 'Easy & Fast Bill Payments',
    imgLogo: 'https://i.imgur.com/oh3QSbT.png'
  },
  {
    title: 'Simple Sign Up',
    imgLogo: 'https://i.imgur.com/Cz0mETp.png'
  },
  {
    title: 'Faster Transfers ',
    imgLogo: 'https://i.imgur.com/LyH9wm5.png'
  },
  {
    title: 'Secure & Trusted',
    imgLogo: 'https://i.imgur.com/7Gd4TOV.png'
  }
];

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userAccount = mockAccounts.find(account => account.holder.username === username);
    if (!userAccount) {
      setError('User not found');
      return;
    }
    if (userAccount.holder.password !== password) {
      setError('Invalid password');
      return;
    }
    // Store user data in localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(userAccount));
    router.push('/dashboard');
  };

  return (
    <div className="">
      <Header />
      <div className="h-screen bg-white">
        <div className="">
          <div className="">{error && <p className="text-[20px] my-7 text-center flex items-center justify-center text-red-400">{error}</p>}</div>
          <div className="bg-[#f7f7f7] mx-auto flex flex-col justify-center items-center rounded-s max-w-[400px] p-7 px-4">
            <div className="border w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-white">
              <Image src="https://i.imgur.com/eiMpe8j.png" width={19} height={24} className="w-[19px] h-[24px]" alt="key" />
            </div>
            <form onSubmit={handleLogin} className="w-full">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <input
                    type="text"
                    value={username}
                    className="p-4 py-3 rounded-[10px] placeholder:text-[#525252] text-[#525252] bg-transparent border border-gray-300 outline-none"
                    placeholder="USER NAME"
                    onChange={e => setUsername(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <input
                    type="password"
                    value={password}
                    className="p-4 py-3 rounded-[10px] placeholder:text-[#525252] text-[#525252] bg-transparent border border-gray-300 outline-none"
                    placeholder="PASSWORD"
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <p className="my-6 text-base">
                By logging in I accept the T&C, Salary In Advance Key Fact Statement, and agree to waive the cooling off period with immediate commitment to relevant Terms & Conditions.
              </p>

              <div className="flex flex-col gap-2">
                <button type="submit" className="p-4 py-2 border border-[#4E9A77] bg-white hover:bg-[#4E9A77] text-[#4E9A77] hover:text-white font-semibold w-full rounded-[5px]">
                  LOGIN
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="bg-[#f2f2f2] p-5 mt-3">
          <h2 className="text-center text-2xl text-[#404040] font-[500]">Why Choose DIB Online</h2>
          <div className="grid grid-cols-2 gap-5 mt-8">
            {mockData.map((data, i) => (
              <div key={i} className="flex flex-col items-center justify-center">
                <div className="rounded-full w-[80px] h-[80px] flex items-center justify-center border-2 border-[#bebebe]">
                  <Image src={data.imgLogo} width={35} height={35} className="w-[35px] h-[35px]" alt="key" />
                </div>
                <p className="max-w-max text-center text-lg text-[#666]">{data.title}</p>
              </div>
            ))}
          </div>
        </div>
        <footer className="mt-5 p-5 pb-10 flex flex-col gap-2 justify-center items-center">
          <Image src="https://i.imgur.com/3RVt3C2.png" width={45} height={45} className="w-[45px] h-[45px]" alt="key" />
          <p className="max-w-max text-center text-lg text-[#666]">
            Copyright © 2025 Dubai Islamic Bank Public Joint Stock Company, licensed and regulated by the Central Bank of the UAE. All Rights Reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
