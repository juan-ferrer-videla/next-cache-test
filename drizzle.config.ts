import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";
config({ path: ".env" });
export default defineConfig({
  schema: "./db/schema.ts",
  out: "./migrations",
  dialect: "turso",
  dbCredentials: {
    url: "http://localhost:8080",
  },
});
