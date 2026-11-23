import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../lib/generated/client";
import * as dotenv from "dotenv";
dotenv.config();

const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    "postgresql://neondb_owner:npg_BdJcAzL70bfl@ep-rapid-bird-bhvq94od-pooler.c-10.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter } as any);

async function main() {
  console.log("🌿 Seeding Meraya database...");

  // ── ADMIN USERS ──────────────────────────
  const users = [
    { username: "maestro", password: "123456789", pinCode: "157230", name: "مايسترو", role: "OWNER" },
    { username: "meraya1", password: "meraya@2026", pinCode: "246810", name: "مدير النظام", role: "ADMIN" },
    { username: "reception", password: "reception@1", pinCode: "135790", name: "الاستقبال", role: "RECEPTIONIST" },
  ];
  for (const u of users) {
    await (prisma as any).user.upsert({ where: { username: u.username }, update: {}, create: u });
    console.log(`  ✓ User: ${u.username}`);
  }

  // ── SETTINGS ─────────────────────────────
  const settings = [
    { key: "hero_tagline", value: "بعد الصالون، المراية أول ما تبص فيها — تجربة صالون على أصابعك" },
    { key: "stat_salons", value: "50+" },
    { key: "stat_bookings", value: "1000+" },
    { key: "stat_rating", value: "4.9" },
  ];
  for (const s of settings) {
    await (prisma as any).setting.upsert({ where: { key: s.key }, update: { value: s.value }, create: s });
  }
  console.log("  ✓ Settings seeded");

  // ── SAMPLE MENS SALON ────────────────────
  const mensSalon = await (prisma as any).salon.upsert({
    where: { slug: "barber-elite" },
    update: {},
    create: {
      name: "Barber Elite",
      nameAr: "صالون إليت للرجال",
      slug: "barber-elite",
      gender: "MENS",
      description: "أرقى صالون حلاقة رجالي - قصات عصرية وتشطيب احترافي",
      phone: "01011223344",
      whatsapp: "01011223344",
      address: "15 شارع النيل، المعادي، القاهرة",
      city: "القاهرة",
      openTime: "09:00",
      closeTime: "23:00",
      workDays: "sat,sun,mon,tue,wed,thu",
      rating: 4.8,
      reviewCount: 127,
      isActive: true,
      isFeatured: true,
    },
  });

  // Men's Services
  const mensServices = [
    { name: "Men's Haircut", nameAr: "قصة شعر رجالي", price: 150, duration: 30, gender: "MENS" },
    { name: "Beard Trim & Shape", nameAr: "تهذيب وتشكيل اللحية", price: 100, duration: 20, gender: "MENS" },
    { name: "Full Grooming Package", nameAr: "باكدج العناية الكاملة", price: 300, duration: 60, discountPrice: 250, gender: "MENS" },
    { name: "Hair Wash & Dry", nameAr: "غسيل وتجفيف شعر", price: 80, duration: 15, gender: "MENS" },
  ];
  for (const svc of mensServices) {
    await (prisma as any).service.create({
      data: { ...svc, salonId: mensSalon.id, isActive: true },
    });
  }

  // Men's Staff
  await (prisma as any).staffMember.create({
    data: {
      salonId: mensSalon.id,
      name: "أستاذ خالد",
      title: "حلاق أول",
      gender: "MALE",
      specialties: "قص,لحية,فيديه",
      rating: 4.9,
      isActive: true,
    },
  });

  // Men's Review
  await (prisma as any).review.create({
    data: {
      salonId: mensSalon.id,
      customerName: "أحمد محمد",
      rating: 5,
      comment: "أفضل صالون جربته على الإطلاق، شغل محترف ونظيف.",
      gender: "MALE",
      isApproved: true,
    },
  });

  console.log(`  ✓ Mens Salon: ${mensSalon.nameAr} (${mensServices.length} services)`);

  // ── SAMPLE WOMENS SALON ──────────────────
  const womensSalon = await (prisma as any).salon.upsert({
    where: { slug: "miroir-ladies" },
    update: {},
    create: {
      name: "Miroir Ladies Salon",
      nameAr: "صالون ميروار للسيدات",
      slug: "miroir-ladies",
      gender: "WOMENS",
      description: "صالون كوافير راقي للسيدات - تلوين وكيرات وتسريحات وتجميل شامل",
      phone: "01099887766",
      whatsapp: "01099887766",
      address: "8 شارع البحر الأعظم، المهندسين، الجيزة",
      city: "الجيزة",
      openTime: "10:00",
      closeTime: "22:00",
      workDays: "sat,sun,mon,tue,wed,thu",
      rating: 4.9,
      reviewCount: 203,
      isActive: true,
      isFeatured: true,
    },
  });

  const womensServices = [
    { name: "Haircut & Blow Dry", nameAr: "قصة وسشوار", price: 200, duration: 45, gender: "WOMENS" },
    { name: "Hair Color", nameAr: "صباغة شعر كاملة", price: 500, duration: 90, discountPrice: 450, gender: "WOMENS" },
    { name: "Keratin Treatment", nameAr: "كيراتين برازيلي", price: 1200, duration: 180, gender: "WOMENS" },
    { name: "Bridal Package", nameAr: "باكدج العروسة الكامل", price: 2500, duration: 300, discountPrice: 2000, gender: "WOMENS" },
    { name: "Manicure & Pedicure", nameAr: "مانيكير وباديكير", price: 300, duration: 60, gender: "WOMENS" },
  ];
  for (const svc of womensServices) {
    await (prisma as any).service.create({
      data: { ...svc, salonId: womensSalon.id, isActive: true },
    });
  }

  await (prisma as any).staffMember.create({
    data: {
      salonId: womensSalon.id,
      name: "أستاذة رانيا",
      title: "كوافيرة أولى",
      gender: "FEMALE",
      specialties: "صباغة,كيراتين,تسريح",
      rating: 5.0,
      isActive: true,
    },
  });

  await (prisma as any).review.create({
    data: {
      salonId: womensSalon.id,
      customerName: "سارة أحمد",
      rating: 5,
      comment: "صالون ولا أروع، الكيراتين اتعمل بشكل احترافي والنتيجة خيالية!",
      gender: "FEMALE",
      isApproved: true,
    },
  });

  console.log(`  ✓ Womens Salon: ${womensSalon.nameAr} (${womensServices.length} services)`);
  console.log("\n✅ Meraya database seeded successfully!");
  await pool.end();
}

main().catch((e) => { console.error("❌ Seed error:", e); process.exit(1); });
