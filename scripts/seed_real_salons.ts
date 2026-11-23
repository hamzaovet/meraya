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
  console.log("✂️ Seeding Real Salons: صالون صدام (فرعين) + دقن الباشا (رجالي وحريمي)...");

  // Clean old test salons if any
  await (prisma as any).review.deleteMany({});
  await (prisma as any).appointmentItem.deleteMany({});
  await (prisma as any).appointment.deleteMany({});
  await (prisma as any).service.deleteMany({});
  await (prisma as any).staffMember.deleteMany({});
  await (prisma as any).galleryImage.deleteMany({});
  await (prisma as any).salon.deleteMany({});

  // 1. صالون صدام - الفرع الرئيسي
  const saddamMain = await (prisma as any).salon.create({
    data: {
      name: "Saddam Barbershop - Main Branch",
      nameAr: "صالون صدام - الفرع الرئيسي (مدينة نصر)",
      slug: "saddam-main",
      gender: "MENS",
      description: "صالون صدام الأصلي، أيقونة الحلاقة الرجالية والعناية الملكية. أحدث القصات العصرية، رسم اللحية بالموس الإيطالي، وعلاجات الشعر بالبروتين والذهب.",
      phone: "01018671000",
      whatsapp: "01018671000",
      address: "شارع عباس العقاد، بجوار الحديقة الدولية، مدينة نصر، القاهرة",
      city: "القاهرة",
      openTime: "10:00",
      closeTime: "01:00",
      workDays: "sat,sun,mon,tue,wed,thu,fri",
      rating: 4.9,
      reviewCount: 342,
      isActive: true,
      isFeatured: true,
      services: {
        create: [
          { name: "Saddam Signature Haircut", nameAr: "قصة واستشوار صدام الملكية", price: 180, duration: 35, gender: "MENS", isActive: true },
          { name: "Royal Beard Styling & Steam", nameAr: "تحديد ورسم اللحية بالبخار والزيوت", price: 130, duration: 25, gender: "MENS", isActive: true },
          { name: "VIP Grooming Package", nameAr: "باكدج العريس الملكي VIP (شعر + ذقن + ماسك ذهب + سنفرة)", price: 650, discountPrice: 500, duration: 90, gender: "MENS", isActive: true },
          { name: "Gold HydraFacial Skin Cleaning", nameAr: "جلسة تنظيف بشرة هيدرافيشال وماسك الذهب", price: 250, duration: 45, gender: "MENS", isActive: true },
          { name: "Protein & Keratin Hair Treatment", nameAr: "جلسة بروتين وكيراتين برازيلي معالج", price: 450, duration: 60, gender: "MENS", isActive: true },
          { name: "Moroccan Bath & Massage", nameAr: "حمام مغربي أصلي + مساج استرخائي", price: 350, duration: 60, gender: "MENS", isActive: true },
        ],
      },
      staff: {
        create: [
          { name: "المعلم صدام", title: "كبير المصففين ومؤسس الصالون", gender: "MALE", specialties: "قص ملكي,تحديد لحية,عرسان", rating: 5.0, isActive: true },
          { name: "كابتن مينا", title: "مصفف محترف", gender: "MALE", specialties: "قصات عصرية,استشوار,صبغة", rating: 4.9, isActive: true },
          { name: "كابتن محمود", title: "أخصائي عناية بالبشرة واللحية", gender: "MALE", specialties: "تنظيف بشرة,بخار,حمام مغربي", rating: 4.8, isActive: true },
        ],
      },
      reviews: {
        create: [
          { customerName: "م/ أحمد الشريف", rating: 5, comment: "شغل صدام ملوش حل.. دايماً بيطلعني مظبوط على الفرازة، والنظافة والتعقيم 10 على 10.", gender: "MALE", isApproved: true },
          { customerName: "عمر فاروق", rating: 5, comment: "الباكدج الملكي بتاع العريس كان تحفة في فرحي، تسلم إيد المعلم صدام.", gender: "MALE", isApproved: true },
          { customerName: "كريم حسام", rating: 5, comment: "أفضل حلاقة ذقن في مصر بدون مبالغة، راحة تامة ومعاملة في قمة الذوق.", gender: "MALE", isApproved: true },
        ],
      },
    },
  });
  console.log(`  ✓ Created: ${saddamMain.nameAr}`);

  // 2. صالون صدام - فرع التجمع الخامس
  const saddamTagamoa = await (prisma as any).salon.create({
    data: {
      name: "Saddam Barbershop - New Cairo",
      nameAr: "صالون صدام - فرع التجمع الخامس",
      slug: "saddam-tagamoa",
      gender: "MENS",
      description: "فرع النخبة بالتجمع الخامس. تجربة VIP فاخرة تجمع بين الحلاقة الإيطالية وأعلى مستويات الرفاهية والاسترخاء للرجال ورجال الأعمال.",
      phone: "01018671000",
      whatsapp: "01018671000",
      address: "شارع التسعين الشمالي، مول النخبة، التجمع الخامس، القاهرة الجديدة",
      city: "القاهرة الجديدة",
      openTime: "11:00",
      closeTime: "02:00",
      workDays: "sat,sun,mon,tue,wed,thu,fri",
      rating: 5.0,
      reviewCount: 218,
      isActive: true,
      isFeatured: true,
      services: {
        create: [
          { name: "VIP Executive Haircut", nameAr: "قصة شعر كبار الشخصيات VIP", price: 250, duration: 40, gender: "MENS", isActive: true },
          { name: "Beard Sculpting & Hot Towel", nameAr: "نحت اللحية بالفوطة الساخنة والمساج", price: 170, duration: 30, gender: "MENS", isActive: true },
          { name: "Full VIP Grooming Lounge", nameAr: "جلسة لاونج VIP متكاملة (شعر + لحية + باديكير + عناية بالبشرة)", price: 800, discountPrice: 650, duration: 110, gender: "MENS", isActive: true },
          { name: "Caviar Scalp Treatment", nameAr: "جلسة علاج وتغذية فروة الرأس بالكافيار", price: 380, duration: 45, gender: "MENS", isActive: true },
          { name: "Gentlemen's Spa Manicure & Pedicure", nameAr: "باديكير ومانيكير سبا رجالي فاخر", price: 220, duration: 40, gender: "MENS", isActive: true },
        ],
      },
      staff: {
        create: [
          { name: "كابتن أحمد صدام", title: "مدير الفرع وكبير المصففين", gender: "MALE", specialties: "ستايلنج VIP,استشوار,علاجات كافيار", rating: 5.0, isActive: true },
          { name: "كابتن سامي", title: "مصفف أول", gender: "MALE", specialties: "قصات أوروبية,نحت لحية", rating: 4.9, isActive: true },
        ],
      },
      reviews: {
        create: [
          { customerName: "د. هاني عادل", rating: 5, comment: "مكان فوق الممتاز، هدوء ودقة في المواعيد، وشغل أحمد صدام عالي جداً.", gender: "MALE", isApproved: true },
          { customerName: "ياسين النجار", rating: 5, comment: "أحسن تجربة حلاقة في التجمع، خدمة 7 نجوم وضيافة محترمة.", gender: "MALE", isApproved: true },
        ],
      },
    },
  });
  console.log(`  ✓ Created: ${saddamTagamoa.nameAr}`);

  // 3. دقن الباشا - الفرع الرجالي
  const bashaMens = await (prisma as any).salon.create({
    data: {
      name: "Deqn El Basha - Men's Salon",
      nameAr: "دقن الباشا - صالون الحلاقة الرجالي",
      slug: "deqn-el-basha-mens",
      gender: "MENS",
      description: "دقن الباشا.. عنوان الأناقة والرجولة. التخصص الأول في نحت وتحديد اللحية والعناية الفائقة بالشعر، مع أفضل خامات العناية المستوردة.",
      phone: "01018671000",
      whatsapp: "01018671000",
      address: "شارع جامعة الدول العربية، المهندسين، الجيزة",
      city: "الجيزة",
      openTime: "10:30",
      closeTime: "01:30",
      workDays: "sat,sun,mon,tue,wed,thu,fri",
      rating: 4.9,
      reviewCount: 289,
      isActive: true,
      isFeatured: true,
      services: {
        create: [
          { name: "El Basha Classic Beard Sculpt", nameAr: "رسم وتحديد لحية الباشا الملكية", price: 140, duration: 25, gender: "MENS", isActive: true },
          { name: "Modern Haircut & Styling", nameAr: "قص واستشوار مودرن", price: 160, duration: 30, gender: "MENS", isActive: true },
          { name: "Basha Royal Package", nameAr: "باقة الباشا الملكية (حلاقة كاملة + ماسك طمي مغربي + سنفرة كولاجين)", price: 450, discountPrice: 380, duration: 75, gender: "MENS", isActive: true },
          { name: "Black Charcoal Mask & Peeling", nameAr: "ماسك الفحم النشط وإزالة الرؤوس السوداء", price: 150, duration: 30, gender: "MENS", isActive: true },
          { name: "Beard Dye & Natural Coloring", nameAr: "صبغة لحية طبيعية خالية من الأمونيا", price: 120, duration: 20, gender: "MENS", isActive: true },
        ],
      },
      staff: {
        create: [
          { name: "الباشا إبراهيم", title: "كبير مصففي اللحية والشعر", gender: "MALE", specialties: "رسم لحية,موس حار,ماسك فحم", rating: 5.0, isActive: true },
          { name: "كابتن حسام", title: "مصفف محترف", gender: "MALE", specialties: "قصات عصرية,فوليو فيد", rating: 4.8, isActive: true },
        ],
      },
      reviews: {
        create: [
          { customerName: "طارق سراج", rating: 5, comment: "اسم على مسمى، بتدخل وتخرج باشا فعلاً! اللحية اتظبطت بالمللي.", gender: "MALE", isApproved: true },
          { customerName: "مصطفى فهمي", rating: 5, comment: "معاملة راقية وشغل محترم جداً، الأسعار مناسبة لجودة الخدمة.", gender: "MALE", isApproved: true },
        ],
      },
    },
  });
  console.log(`  ✓ Created: ${bashaMens.nameAr}`);

  // 4. دقن الباشا - بيوتي سنتر للسيدات
  const bashaWomens = await (prisma as any).salon.create({
    data: {
      name: "Deqn El Basha - Ladies Beauty Center & Spa",
      nameAr: "دقن الباشا - بيوتي سنتر التجميل للسيدات",
      slug: "deqn-el-basha-womens",
      gender: "WOMENS",
      description: "بيوتي سنتر دقن الباشا للسيدات.. عالم الجمال والدلال الخاص بكِ. خبراء محترفون في الميك آب، تسريحات السواريه والعرائس، أحدث ألوان الصبغات، وعلاجات الشعر والبشرة بأحدث التقنيات العالمية.",
      phone: "01018671000",
      whatsapp: "01018671000",
      address: "شارع مصدق، الدقي (وقريب من الشيخ زايد)، الجيزة",
      city: "الجيزة",
      openTime: "11:00",
      closeTime: "22:00",
      workDays: "sat,sun,mon,tue,wed,thu,fri",
      rating: 5.0,
      reviewCount: 412,
      isActive: true,
      isFeatured: true,
      services: {
        create: [
          { name: "Soiree & Bridal Makeup", nameAr: "ميك آب سواريه احترافي بالكنتور والرموش", price: 850, duration: 60, gender: "WOMENS", isActive: true },
          { name: "Balayage & Ombre Hair Coloring", nameAr: "صبغة بلياج وأومبري بأحدث صيحات الموضة", price: 950, duration: 90, gender: "WOMENS", isActive: true },
          { name: "Brazilian Protein & Botox Treatment", nameAr: "جلسة بروتين وبوتوكس برازيلي لفرد وتغذية الشعر", price: 1200, discountPrice: 950, duration: 120, gender: "WOMENS", isActive: true },
          { name: "Deep Cleansing Dermapen & Glow Session", nameAr: "تنظيف بشرة عميق بجهاز الديرمابن وسيروم النضارة", price: 450, duration: 50, gender: "WOMENS", isActive: true },
          { name: "Hard Gel & Acrylic Nails with Art", nameAr: "تركيب هارد جيل وأظافر أكريليك مع ديزاين", price: 350, duration: 60, gender: "WOMENS", isActive: true },
          { name: "Royal Spa Pedicure & Manicure", nameAr: "جلسة باديكير ومانيكير سبا مع مقشر الورد وشمع البرافين", price: 280, duration: 45, gender: "WOMENS", isActive: true },
          { name: "Hair Styling & Glamour Blowout", nameAr: "سشوار وبابيليس وتسريحة ويفي هوليوود", price: 220, duration: 40, gender: "WOMENS", isActive: true },
        ],
      },
      staff: {
        create: [
          { name: "مدام رانيا", title: "كبيرة خبراء التجميل والعناية بالبشرة", gender: "FEMALE", specialties: "تنظيف بشرة,ديرمابن,بروتين", rating: 5.0, isActive: true },
          { name: "ميك آب آرتيست يسرا", title: "خبيرة ميك آب سواريه وعرائس", gender: "FEMALE", specialties: "ميك آب,كنتور,رموش طبيعية", rating: 5.0, isActive: true },
          { name: "كوافير مروة", title: "أخصائية صبغات وتسريحات شعر", gender: "FEMALE", specialties: "بلياج,أومبري,ويفي,سشوار", rating: 4.9, isActive: true },
        ],
      },
      reviews: {
        create: [
          { customerName: "نورهان الشاذلي", rating: 5, comment: "الميك آب طلع يجنن في خطوبتي وثابت لآخر اليوم، ويسرا إيدها تتلف في حرير!", gender: "FEMALE", isApproved: true },
          { customerName: "سارة عبد العزيز", rating: 5, comment: "البروتين خلى شعري حرير وطبيعي جداً بدون أي ريحة مضايقة، المكان نضيف وأنوثي وراقي.", gender: "FEMALE", isApproved: true },
          { customerName: "مي عصام", rating: 5, comment: "أحلى باديكير وهارد جيل عملته، الديزاين كان بالضبط زي الصورة اللي وريتهالهم.", gender: "FEMALE", isApproved: true },
        ],
      },
    },
  });
  console.log(`  ✓ Created: ${bashaWomens.nameAr}`);

  // Update Settings
  await (prisma as any).setting.upsert({
    where: { key: "stat_salons" },
    update: { value: "4 صالونات رائدة" },
    create: { key: "stat_salons", value: "4 صالونات رائدة" },
  });
  await (prisma as any).setting.upsert({
    where: { key: "stat_bookings" },
    update: { value: "1,260+ حجز" },
    create: { key: "stat_bookings", value: "1,260+ حجز" },
  });
  await (prisma as any).setting.upsert({
    where: { key: "stat_rating" },
    update: { value: "4.95 ⭐" },
    create: { key: "stat_rating", value: "4.95 ⭐" },
  });

  console.log("✅ All real salons seeded with full services, staff, and authentic reviews!");
}

main()
  .catch((e) => {
    console.error("Error seeding real salons:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
