"use client";

import { useParams } from 'next/navigation';
import exploreData from '../components/explorer/Explore';
import Image from 'next/image';
import React from 'react';

const HouseDetail = () => {
  const params = useParams();
  const id = params.id as string;
  const house = exploreData.find((house) => house.id.toString() === id);

  if (!house) {
    return <div>House not found</div>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">
        <Image
          src={house.imageUrl}
          alt={house.title}
          width={800}
          height={400}
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="mt-6">
          <h1 className="text-2xl font-bold">{house.title}</h1>
          <p className="text-lg text-gray-600">{house.city}</p>
          <p className="text-lg font-semibold">{house.price} €</p>
          <p className="text-gray-600">{house.adress}, {house.city}</p>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
            Reserve now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HouseDetail;
