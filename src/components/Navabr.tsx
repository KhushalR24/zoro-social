"use client";
import Link from "next/link";
import MobileMenu from "../components/MobileMenu";
import Image from "next/image";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navabr = () => {
  return (
    <div className="flex items-center justify-between h-24 ">
      {/* Left */}
      <div className="md:hidden lg:block w-[20%]">
        <Link className=" font-bold text-xl text-green-600 " href="/">
          ZoroSocial
        </Link>
      </div>
      {/* Center */}
      <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
        <div className="flex gap-6 text-gray">
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/home.png"
              alt="home"
              width={16}
              height={16}
              className=" w-4 h-4"
            />
            <span>HomePage</span>
          </Link>
          <Link href="" className="flex gap-2 items-center">
            <Image
              src="/friends.png"
              alt="Friends"
              width={16}
              height={16}
              className=" w-4 h-4"
            />
            <span>Friends</span>
          </Link>
          <Link href="" className="flex gap-2 items-center">
            <Image
              src="/stories.png"
              alt="Stories"
              width={20}
              height={20}
              className=" w-5 h-5"
            />
            <span>Stories</span>
          </Link>
        </div>
        <div className=" hidden xl:flex p-2 bg-slate-100 items-center rounded-xl">
          <input type="text" placeholder="Search..." className="outline-none bg-transparent" />
          <Image src="/search.png" alt="search" width={16} height={16} />
        </div>
      </div>
      {/* Right */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end ">
        <ClerkLoading>
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-green-500 motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !blackspace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Image
                src="/people.png"
                alt=""
                width={30}
                height={30}
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src="/messages.png"
                alt=""
                width={20}
                height={20}
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src="/notification.png"
                alt=""
                width={20}
                height={20}
              />
            </div>
            <UserButton/>
          </SignedIn>
          <SignedOut>
          <div className="flex items-center gap-2 text-sm">
              <Image
                src="/login.png"
                alt=""
                width={20}
                height={20}
              />
              <Link href="/sign-in"> Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded> 
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navabr;
