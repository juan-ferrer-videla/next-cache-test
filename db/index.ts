import { config } from "dotenv";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "@/db/schema";

config({ path: ".env" }); // or .env.local

export const db = drizzle({
  connection: {
    url: "http://localhost:8080",
  },
  schema,
});
