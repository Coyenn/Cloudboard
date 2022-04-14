import { PrismaClient } from '@prisma/client'

async function editService(newServiceData) {
	const prisma = new PrismaClient();
	await prisma.$connect();

    prisma.service.update(
        {
            where: {
                id: newServiceData.id
            },
            data: {
                name: newServiceData.name,
                link: newServiceData.link,
                imageURL: newServiceData.imageURL,
                tag: newServiceData.tag,
            }
        }
    ).catch((e) => {
		console.error(e);
	})

	await prisma.$disconnect();
}

export default async function handler(req, res) {
	await editService(req.body);

	res.status(200).end();
}