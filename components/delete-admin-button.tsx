"use client";

import { deleteAdminAction } from "@/actions";
import { useTransition } from "react";

export const DeleteAdminButton = () => {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      className="px-6 py-4 bg-amber-900"
      onClick={() => {
        startTransition(async () => {
          await deleteAdminAction();
        });
      }}
      disabled={isPending}
    >
      DELETE ADMIN
    </button>
  );
};
