"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import exploreData from "./components/explorer/Explore";

export default function Home() {
  const [filter, setFilter] = useState<string | null>(null);

  const filteredData = filter
    ? exploreData.filter((house) => house.tag === filter)
    : exploreData;

  return (
    <main className="flex min-h-screen flex-col items-center p-4 bg-gray-100">
      <div className="w-full max-w-5xl bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <span>
            <h1 className="text-2xl">Where do</h1>
            <h1 className="text-2xl font-bold">you want to go?</h1>
          </span>
          <Image src="/logo.png" alt="Logo" width={48} height={48} />
        </div>

        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Discover location"
            className="w-full px-4 py-2 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Explore Cities</h3>
          <div className="flex space-x-2 overflow-x-scroll">
            {filteredData.map((house) => (
              <Link key={house.id} href={`/${house.id}`}>
                <div className="flex-shrink-0 w-48 bg-white rounded-lg shadow-md cursor-pointer">
                  <Image
                    src={house.imageUrl}
                    alt={house.title}
                    width={192}
                    height={108}
                    className="w-full h-32 rounded-t-lg"
                  />
                  <div className="p-2">
                    <h4 className="text-sm font-semibold">{house.title}</h4>
                    <p className="text-xs text-gray-500">{house.distance} | {house.city}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center">
          <h3 className="text-lg font-semibold mb-2">Categories</h3>
          <div className="flex justify-center space-x-4">
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setFilter('mountain')}
            >
              <div className="bg-gray-100 rounded-full p-3">
                <Image
                  src="/mountain.png"
                  alt="Mountain"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>
              <span className="text-sm mt-2">Mountain</span>
            </div>
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setFilter('beach')}
            >
              <div className="bg-gray-100 rounded-full p-3">
                <Image
                  src="/beach.png"
                  alt="Beach"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>
              <span className="text-sm mt-2">Beach</span>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => setFilter(null)}
          >
            <span className="text-sm mt-2">All</span>
          </div>
        </div>
      </div>
    </main>
  );
}
