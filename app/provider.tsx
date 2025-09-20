"use client";

import React, { useContext, useEffect, useState } from "react";
import Header from "./_components/Header";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { UserDetailsContext } from "./context/UserDetailContext";
import { TripContextType, TripDetailContext } from "./context/TripdetailContext";
import { TripInfo } from "./create-new-trip/_compoents/ChatBox";


function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = useUser();
  const CreateUser = useMutation(api.user.CreateNewUser);
 const [userDetail, setUserDetail] = useState<any>();
const [tripDetailInfo, setTripDetailInfo] = useState<TripInfo | null>(null);

  const CreateNewUser = async () => {
    if (user) {
      const result = await CreateUser({
        email: user?.primaryEmailAddress?.emailAddress ?? "",
        imageUrl: user?.imageUrl ?? "",
        name: user?.fullName ?? "",
      });
      setUserDetail(result);
    }
  };

  useEffect(() => {
    if (user) {
      CreateNewUser();
    }
  }, [user]);

  return (
    <UserDetailsContext.Provider value={{ userDetail, setUserDetail }}>
      <TripDetailContext.Provider value={{ tripDetailInfo, setTripDetailInfo }}>
        <div>
          <Header />
          {children}
        </div>
      </TripDetailContext.Provider>
    </UserDetailsContext.Provider>
  );
}

export default Provider;

export const useUserDetail = () => {
  return useContext(UserDetailsContext);
}
export const useTripDetail = ():TripContextType | undefined => {
  return useContext(TripDetailContext);
}