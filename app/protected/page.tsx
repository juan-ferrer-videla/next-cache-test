import { getAdmin } from "@/actions";
import { DeleteAdminButton } from "@/components/delete-admin-button";
import { redirect } from "next/navigation";
import { Suspense } from "react";

const ProtectContent = async () => {
  const isAdmin = !!(await getAdmin());
  console.log("log from protected route", "is authorized?", isAdmin);
  if (!isAdmin) {
    redirect("/register");
  }
  return (
    <>
      <DeleteAdminButton />
      <p>After deleting it should redirect to Register route</p>
    </>
  );
};

const Protected = async () => {
  return (
    <>
      <h1 className="text-lg font-medium mb-3">Protected</h1>
      <Suspense fallback="loading...">
        <ProtectContent />
      </Suspense>
    </>
  );
};

export default Protected;
