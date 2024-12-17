const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    try{
    for(let i = 1; i <=20; i++) {
        await prisma.product.create({
            data:{
                name: `Product ${i}`,
                description: `Description for product ${i}`,
                price: Math.random() *100,
            },
        });
    }
}catch (error) {
    console.error('error seeding:', error);
} finally{ 
    await prisma.$disconnect();
}
}
main()