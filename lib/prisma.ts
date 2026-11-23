import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

function createPrismaClient(): PrismaClient {
  const pool = new Pool({
    connectionString:
      process.env.DATABASE_URL ||
      "postgresql://neondb_owner:npg_BdJcAzL70bfl@ep-rapid-bird-bhvq94od-pooler.c-10.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
    max: 10,
  });
  const adapter = new PrismaPg(pool);
  return new PrismaClient({ adapter } as any);
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
