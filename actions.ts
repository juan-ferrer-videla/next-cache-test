"use server";

import { revalidatePath } from "next/cache";
import { writeFile, readFile } from "node:fs/promises";

export const createAdminAction = async () => {
  await writeFile("file-storage.txt", "goncy");
  revalidatePath("/protected");
};

export const deleteAdminAction = async () => {
  await writeFile("file-storage.txt", "");
  revalidatePath("/protected");
};

export const getAdmin = async () => {
  const data = await readFile("file-storage.txt");
  return data.toString();
};
