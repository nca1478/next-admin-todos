"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/api/auth/signin");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div>
        <h1 className="text-3xl">Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl">Profile Page</h1>
      <hr className="pt-3" />

      <div className="flex flex-col">
        <span>
          <span className="font-bold">Name: </span>
          {session?.user?.name ?? "No Name"}
        </span>
        <span>
          <span className="font-bold">Email: </span>
          {session?.user?.email ?? "No Email"}
        </span>
        <span>
          <span className="font-bold">Imagen: </span>
          {session?.user?.image ?? "No Image"}
        </span>
        <span>
          <span className="font-bold">Id: </span>
          {session?.user?.id ?? "No UUID"}
        </span>
        <span className="capitalize">
          <span className="font-bold">Roles: </span>
          {session?.user?.roles?.join(",") ?? ["no-roles"]}
        </span>
      </div>
    </div>
  );
}
