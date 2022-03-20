import { PrismaClient } from '@prisma/client'

async function createNewService(newServiceData) {
	const prisma = new PrismaClient();
	await prisma.$connect();

	prisma.service.create({
		data: {
			name: newServiceData.name,
			link: newServiceData.link,
			imageURL: newServiceData.imageURL,
			tag: newServiceData.tag,
		}
	}).catch((e) => {
		console.error(e);
	})

	await prisma.$disconnect();
}

export default async function handler(req, res) {
	console.log(req.body);
	await createNewService(req.body);

	res.status(200).end();
}