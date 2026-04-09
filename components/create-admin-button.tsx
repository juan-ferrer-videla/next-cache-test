import { createAdminAction } from "@/actions";

export const CreateAdminButton = () => {
  return (
    <form action={createAdminAction}>
      <button className="px-6 py-4 bg-amber-900">Register Admin</button>
    </form>
  );
};
