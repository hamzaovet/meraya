import { defineConfig } from "prisma/config";
import "dotenv/config";

const rawUrl =
  process.env.DATABASE_URL ||
  "postgresql://neondb_owner:npg_BdJcAzL70bfl@ep-rapid-bird-bhvq94od-pooler.c-10.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: rawUrl,
  },
});
