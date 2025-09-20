"use client"

import React, { useEffect, useState } from 'react';
import { Hotel } from './ChatBox';
import { ExternalLink, Star } from 'lucide-react';
import Link from 'next/link'; 
import { Button } from '@/components/ui/button';
import axios from 'axios';

type props = {
  hotel: Hotel;
}

function HotelCard({ hotel }: props) {

  const [photoUrl, setPhotoUrl] = useState<string>();

  useEffect(() => {
  hotel && GetGooglePlaceDetail();
}, [hotel])

const GetGooglePlaceDetail = async () => {
  const result = await axios.post('/api/google-place-detail', {
    placeName: hotel?.hotel_name
  });
  setPhotoUrl(result.data);
}
  return (
    <div>
      <div className='flex flex-col gap-1'>
        <img
          src={photoUrl}
          alt='hotel-image'
          style={{ width: '400px', height: '200px' }}
          className='rounded-xl shadow object-cover mb-2'
        />
        <h2 className='font-semibold text-lg'>{hotel.hotel_name}</h2>
        <h2 className='text-gray-500'> {hotel.hotel_address}</h2>
        <div className='flex justify-between items-center'>
          <p className='flex gap-2 text-green-600'> {hotel.price_per_night} per night</p>
          <p className='text-yellow-500 flex gap-2'> {hotel.rating} <Star /></p>
        </div>
        <p className='line-clamp-2 text-gray-500'>{hotel.description}</p>
        <Link
        href={'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(hotel.hotel_name)}
        target="_blank"
        passHref
      >
        <Button variant="outline" className="mt-2 hover:bg-gray-300">
          🌐 View on Map <ExternalLink size={16} />
        </Button>
      </Link>
      </div>
    </div>
  )
}

export default HotelCard;           