"use server";

import { eq } from "drizzle-orm";
import { db } from "./db";
import { admins } from "./db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createAdminAction = async () => {
  await db
    .insert(admins)
    .values({ name: "goncy", id: 1 })
    .catch((error) => {
      console.warn(error);
    });
  revalidatePath("/protected");
  redirect("/protected");
};

export const deleteAdminAction = async () => {
  await db
    .delete(admins)
    .where(eq(admins.id, 1))
    .catch((error) => {
      console.warn(error);
    });
  revalidatePath("/protected");
};

export const getAdmin = async () => {
  return await db.query.admins.findFirst({ where: eq(admins.id, 1) });
};
