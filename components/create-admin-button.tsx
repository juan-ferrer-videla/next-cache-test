"use client";

import { createAdminAction } from "@/actions";
import { useTransition } from "react";

export const CreateAdminButton = () => {
  const [isPending, startTransition] = useTransition();
  return (
    <button
      className="px-6 py-4 bg-amber-900"
      onClick={() => {
        startTransition(async () => {
          await createAdminAction();
        });
      }}
      disabled={isPending}
    >
      Register Admin
    </button>
  );
};
