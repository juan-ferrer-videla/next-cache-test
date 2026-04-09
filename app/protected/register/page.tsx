import { getAdmin } from "@/actions";
import { CreateAdminButton } from "@/components/create-admin-button";
import { Suspense } from "react";

const RegisterContent = async () => {
  const admin = await getAdmin();

  return (
    <>
      {admin ? (
        <>
          <p>woops, it does not work on the first try, try it again</p>
          <p>admin: {admin}</p>
        </>
      ) : (
        <p>After creating it should redirect to Protected route</p>
      )}
      <p className="mt-3">{admin ? "AUTHORIZED" : "UNAUTHORIZED"}</p>
    </>
  );
};

const Register = () => {
  return (
    <>
      <h1 className="text-lg font-medium mb-3">Register</h1>
      <CreateAdminButton />

      <Suspense fallback="loading...">
        <RegisterContent />
      </Suspense>
    </>
  );
};

export default Register;
