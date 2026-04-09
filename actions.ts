"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const ADMIN_COOKIE_NAME = "admin";

export const createAdminAction = async () => {
  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE_NAME, "goncy", { path: "/" });
  revalidatePath("/protected");
  redirect("/protected");
};

export const deleteAdminAction = async () => {
  const cookieStore = await cookies();
  cookieStore.set(ADMIN_COOKIE_NAME, "", { maxAge: 0, path: "/" });
  revalidatePath("/protected");
};

export const getAdmin = async () => {
  const cookieStore = await cookies();
  const adminCookie = cookieStore.get(ADMIN_COOKIE_NAME);
  return adminCookie?.value ?? "";
};
