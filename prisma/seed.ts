import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const users = [
    { name: "Juan", email: "juan@example.com", languages: ["Spanish", "English"], age: 25 },
    { name: "María", email: "maria@example.com", languages: ["Spanish", "French"], age: 30 },
    { name: "Carlos", email: "carlos@example.com", languages: ["Spanish", "Italian"], age: 28 },
    { name: "Ana", email: "ana@example.com", languages: ["English", "German"], age: 35 },
    { name: "Pedro", email: "pedro@example.com", languages: ["Spanish"], age: 22 },
    { name: "Laura", email: "laura@example.com", languages: ["English", "Japanese"], age: 27 },
    { name: "Miguel", email: "miguel@example.com", languages: ["Spanish", "Portuguese"], age: 31 },
    { name: "Sofia", email: "sofia@example.com", languages: ["English", "Chinese"], age: 26 },
    { name: "Diego", email: "diego@example.com", languages: ["Spanish"], age: 19 },
    { name: "Lucia", email: "lucia@example.com", languages: ["Spanish", "Russian"], age: 29 },
    { name: "Fernando", email: "fernando@example.com", languages: ["English", "French", "German"], age: 40 },
    { name: "Isabel", email: "isabel@example.com", languages: ["Spanish", "Korean"], age: 24 },
    { name: "Roberto", email: "roberto@example.com", languages: ["Spanish"], age: 17 },
    { name: "Elena", email: "elena@example.com", languages: ["English", "Italian"], age: 33 },
    { name: "Francisco", email: "francisco@example.com", languages: ["Spanish", "Dutch"], age: 38 },
  ];

  for (const user of users) {
    await prisma.userLanguage.create({
      data: user,
    });
  }

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });