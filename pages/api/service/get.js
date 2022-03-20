import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();
}

main();

export default async function handler(req, res) {
  const services = await prisma.service.findMany();

  res.status(200).json(services);
}
