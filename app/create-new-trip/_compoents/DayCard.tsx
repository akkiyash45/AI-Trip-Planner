"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import axios from 'axios';

// Assuming Activity is defined elsewhere, but for this component, we'll keep the type as is.
type Activity = {
    place_name: string;
    place_address: string;
    place_details: string;
    time_travel_each_location: string;
    ticket_pricing: string;
    best_time_to_visit: string;
};

type Props = {
    activity: Activity;
};

function DayCard({ activity }: Props) {
    const [photoUrl, setPhotoUrl] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const GetGooglePlaceDetail = async () => {
            if (!activity?.place_name) return;
            setIsLoading(true);
            try {
                const result = await axios.post('/api/google-place-detail', {
                    placeName: activity.place_name + ":" + activity.place_address
                });
                setPhotoUrl(result.data);
            } catch (error) {
                console.error("Failed to fetch place photo:", error);
                setPhotoUrl(null); // In case of error, set to null
            } finally {
                setIsLoading(false);
            }
        };

        GetGooglePlaceDetail();
    }, [activity]);

    return (
        <div className="border p-4 rounded-lg shadow">
            <h3 className="font-bold text-lg">{activity.place_name}</h3>

            {/* Conditional rendering for loading state and image */}
            {isLoading ? (
                <div className="w-full h-48 bg-gray-200 animate-pulse rounded-xl shadow mt-1"></div>
            ) : photoUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    src={photoUrl}
                    alt={activity.place_name}
                    width={400}
                    height={200}
                    className="rounded-xl shadow object-cover w-full h-auto mt-1"
                />
            ) : (
                <div className="w-full h-48 bg-gray-300 rounded-xl shadow flex items-center justify-center text-gray-500 mt-1">
                    No image available
                </div>
            )}

            <p className="text-gray-600 mt-2">{activity.place_details}</p>
            <p className="text-sm mt-1">
                <b>Travel Time:</b> {activity.time_travel_each_location}
            </p>
            <p className="text-sm">
                <b>Ticket Price:</b> {activity.ticket_pricing}
            </p>
            <p className="text-sm text-blue-500">
                <b>Best Time to Visit:</b> {activity.best_time_to_visit}
            </p>

            <Link
                href={'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(activity.place_name)}
                target="_blank"
                passHref
            >
                <Button variant="outline" className="mt-2 hover:bg-gray-300">
                    🌐 View on Map <ExternalLink size={16} />
                </Button>
            </Link>
        </div>
    );
}

export default DayCard;