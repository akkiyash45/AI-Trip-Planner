"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const menuOptions = [
  { name: "Home", path: "/" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact Us", path: "/contact-us" },
];

const Header = () => {
  const { user } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleCreateTrip = () => {
    setLoading(true);
    // Small delay so the spinner shows before page unmounts
    setTimeout(() => {
      router.push("/create-new-trip");
    }, 200);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/20 shadow-md 
      bg-gradient-to-r from-orange-500 via-pink-500 to-red-600">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiaMp-zh-fOCyjW4ocZz0pak8FKhGhk6zYWw&s"
            alt="logo"
            className="h-12 w-auto object-contain drop-shadow-lg"
          />
          <h2 className="font-extrabold text-2xl text-white tracking-tight hover:text-yellow-200 transition-colors">
            AI Trip Planner
          </h2>
        </Link>

        {/* Menu Section */}
        <nav className="hidden md:flex gap-8 items-center">
          {menuOptions.map((menu, index) => (
            <Link key={index} href={menu.path}>
              <h2 className="relative text-lg text-white/90 hover:text-yellow-200 transition-all duration-300 group">
                {menu.name}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
              </h2>
            </Link>
          ))}
        </nav>

        {/* Auth Section */}
        <div className="flex items-center gap-4">
          {!user ? (
            <SignInButton mode="modal">
              <Button className="bg-white text-orange-600 font-semibold px-5 rounded-full shadow-md hover:bg-yellow-100 transition">
                Get Started
              </Button>
            </SignInButton>
          ) : (
            <div className="flex items-center gap-3">
              <Button
                onClick={handleCreateTrip}
                disabled={loading}
                className="bg-white text-orange-600 font-semibold px-7 rounded-full shadow-md hover:bg-yellow-100 transition flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Loading...
                  </>
                ) : (
                  "Create Trip"
                )}
              </Button>
              <UserButton afterSignOutUrl="/" />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
