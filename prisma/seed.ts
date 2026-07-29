import {categories} from './data/categories'
import {products} from './data/products'

import { PrismaClient } from '../app/generated/prisma/client'
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL;

const adapter = new PrismaPg({
  connectionString,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
    try {
        await prisma.category.createMany({data: categories})
        await prisma.product.createMany({data: products})
        console.log('SE INSERTARON CORRECTAMENTE LOS DATOS DE LA SEED !!!')
    } catch (error) {
        console.log(error)
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })