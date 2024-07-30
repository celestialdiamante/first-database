"use server"

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";


export async function CreatePost(formData: FormData) {
    try {
        await prisma.post.create({
            data: {
                title: formData.get("title") as string,
                slug: (formData.get("title") as string)
                    .replace(/\s+/g, "-")
                    .toLowerCase(),
                date: formData.get("date") as string,
                description: formData.get("description") as string,
                imgSrc: formData.get("imgSrc") as string,
                // authorId: parseInt(formData.get("authorId") as string, 10),
                author: {
                    connect: {
                        email: "thecelestialdiamante@gmail.com",
                    },
                },
            }
        });
        revalidatePath("/posts");

    } catch (error) {
        console.log("Failed to create post:", error);
    }

}


export async function EditPost(formData: FormData, id: number) {
    await prisma.post.update({
        where: { id },
        data: {
            title: formData.get("title") as string,
            slug: (formData.get("title") as string)
                .replace(/\s+/g, "-")
                .toLowerCase(),
            date: formData.get("date") as string,
            description: formData.get("description") as string,
            imgSrc: formData.get("imgSrc") as string,
            authorId: parseInt(formData.get("authorId") as string, 10),
        }
    });
    revalidatePath("/posts");
}

export async function deletePost(id: number) {
    await prisma.post.delete({ where: { id } });
}