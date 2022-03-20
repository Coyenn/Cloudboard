import { PrismaClient } from '@prisma/client'


export default async function handler(req, res) {
  const prisma = new PrismaClient();

  await prisma.$connect();
  await prisma.service.delete({
    where: {
      id: req.body.id,
    }
  }).finally(() => {
    res.status(200).end();
  })

  await prisma.$disconnect();
}
