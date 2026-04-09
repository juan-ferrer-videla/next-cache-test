import { deleteAdminAction } from "@/actions";

export const DeleteAdminButton = () => {
  return (
    <form action={deleteAdminAction}>
      <button className="px-6 py-4 bg-amber-900">DELETE ADMIN</button>
    </form>
  );
};
