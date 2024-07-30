import prisma from '@/lib/db'
import React from 'react'

export default async function PostPage({ params }: any) {
    const post = await prisma.post.findUnique({
        where: {
            slug: params.slug,
        },
        // where: {
        //     id: parseInt(params.post_id),
        // },
    });
  
    return (
        <section>
            <div className="container mx-auto p-6">
                <a rel="noopener noreferrer" href="#" className="block gap-3 mx-auto lg:grid lg:grid-cols-12 bg-neutral-focus rounded-lg shadow-lg">
                    <img src={post?.imgSrc} alt={post?.title} className="object-cover w-full h-64 rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg lg:col-span-7" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold lg:text-4xl">{post?.title}</h3>
                        <span className="text-xs text-gray-400">{post?.date}</span>
                        <p>{post?.description}</p>
                    </div>
                </a>
            </div>
        </section>
    )
}
