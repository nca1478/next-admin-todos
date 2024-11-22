"use client";

import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session } = useSession();

  return (
    <div>
      <h1 className="text-3xl">Profile Page</h1>
      <hr className="pt-3" />

      <div className="flex flex-col">
        <span>Name: {session?.user?.name ?? "No Name"}</span>
        <span>Email: {session?.user?.email ?? "No Email"}</span>
        <span>Imagen: {session?.user?.image ?? "No Image"}</span>
      </div>
    </div>
  );
}
