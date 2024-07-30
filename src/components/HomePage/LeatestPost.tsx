import Link from 'next/link';
import React from 'react';
import prisma from '../../lib/db';

// const posts = [
//     {
//         title: "Exploring the Modern Luxury Bedroom Designs",
//         date: "February 19, 2021",
//         description: "Dive into the latest trends in luxury bedroom designs that combine modern aesthetics with classic elements for a timeless look.",
//         imgSrc: "/post/luxury-classic-modern-bedroom.jpg"
//     },
//     {
//         title: "How to Choose the Perfect Color Palette for Your Bedroom",
//         date: "January 21, 2021",
//         description: "Learn how to select the ideal color palette that reflects your style and enhances the tranquility of your bedroom space.",
//         imgSrc: "/post/luxury-classic-modern-bedroom.jpg"
//     },
//     {
//         title: "Top 10 Must-Have Bedroom Accessories for 2021",
//         date: "January 22, 2021",
//         description: "Discover the must-have accessories for your bedroom that will elevate its style and functionality in 2021.",
//         imgSrc: "/post/luxury-classic-modern-bedroom.jpg"
//     },
//     {
//         title: "Creating a Cozy Reading Nook in Your Bedroom",
//         date: "January 23, 2021",
//         description: "Transform a corner of your bedroom into a cozy reading nook with these simple and creative ideas.",
//         imgSrc: "/post/luxury-classic-modern-bedroom.jpg"
//     },
//     {
//         title: "The Benefits of Using Natural Materials in Bedroom Decor",
//         date: "January 24, 2021",
//         description: "Explore the benefits of incorporating natural materials into your bedroom decor for a healthier and more serene environment.",
//         imgSrc: "/post/luxury-classic-modern-bedroom.jpg"
//     },
//     {
//         title: "Innovative Storage Solutions for Small Bedrooms",
//         date: "January 25, 2021",
//         description: "Maximize space and minimize clutter with these innovative storage solutions designed specifically for small bedrooms.",
//         imgSrc: "/post/luxury-classic-modern-bedroom.jpg"
//     },
// ];

export default async function LatestPost() {
    const post = await prisma.post.findMany({
        // where: {
        //     published: true,
        // },
    });
    const user = await prisma.user.findUnique({
        where: {
            email: "thecelestialdiamante@gmail.com",
        },
        include: {
            posts:true,
        },
    });
    return (
        <section>
            <div className="container mx-auto p-6 space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {post.map((post) => (
                        <Link key={post.id} rel="noopener noreferrer" href={`/post/${post.slug}`} className="group bg-neutral-focus rounded-lg shadow-lg hover:bg-neutral-hover transition duration-300 ease-in-out">
                            <img role="presentation" className="object-cover rounded-t-lg" src={post.imgSrc} alt={post.title} />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold">{post.title}</h3>
                                <span className="text-xs text-gray-400">{post.date}</span>
                                <p>{post.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="flex justify-center">
                    <button type="button" className="btn btn-outline btn-secondary">Load more posts...</button>
                </div>
            </div>
        </section>
    );
}
