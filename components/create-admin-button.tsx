"use client";

import { createAdminAction } from "@/actions";
import { useTransition } from "react";
import { useRouter } from "next/navigation";

export const CreateAdminButton = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <button
      className="px-6 py-4 bg-amber-900"
      onClick={() => {
        startTransition(async () => {
          await createAdminAction();
          router.refresh();
          router.push("/protected");
        });
      }}
      disabled={isPending}
    >
      Register Admin
    </button>
  );
};
