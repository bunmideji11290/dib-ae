"use client";

import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full min-h-[30px] relative flex items-center justify-between bg-white border-b-2 border-[#4E9A77] p-[20px] py-[15px]">
      <Image src="https://i.imgur.com/e8bNUUF.png" width={200} height={200} className="w-[160px]" alt="logo" />
      <Image src="https://i.imgur.com/yhiJqh8.jpeg" width={200} height={200} className="w-[70px] rounded-b-lg" alt="logo" />
    </div>
  );
}
