import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()



const initialPosts: Prisma.PostCreateInput[] = [
    {
        title: 'Post 1',
        slug: 'post-1',
        description: 'description of post 1',
        date: 'date of post 1',
        imgSrc: 'image src of post 1',
        author: {
            connectOrCreate: {
                where: {
                    email: "thecelestialdiamante@gmail.com",
                },
                create: {
                    email: "thecelestialdiamante@gmail.com",
                    hashedPassword: "1234567890",

                },
            },
        },
    },
]

async function main() {
    console.log(`start seeding ...`);

    for (const post of initialPosts) {
        const newPost = await prisma.post.create({
            data: post,
        });
        console.log(`Creatted post with id: ${newPost.id}`);
    }

    console.log(`Seeding finished.`);
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