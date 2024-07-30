import React from 'react';
import { CreatePost } from '@/actions/actions';

export default function AddPost() {
    return (
        <>
            <form action={CreatePost} className="mt-10">
                <div className="mx-auto w-10/12 flex flex-col text-gray-800 rounded-xl bg-primary p-6 shadow-lg max-w-2xl">

                    <h3 className="text-center font-bold text-2xl my-5 text-gray-800">Add New Post</h3>

                    {/* <input name="authorId" className="input input-bordered mb-4" placeholder="Author ID" type="number" required /> */}
                    <input name="title" className="input input-bordered mb-4" placeholder="Title" type="text" />
                    <input name="imgSrc" className="input input-bordered mb-4" placeholder="Image Source" type="text" />
                    <input name="date" className="input input-bordered mb-4" placeholder="Date" type="text" />
                    <textarea name="description" className="textarea textarea-bordered h-60 mb-4" placeholder="Description"></textarea>

                    <div className="flex justify-end">
                        <button type="button" className="btn btn-outline mr-2">Cancel</button>
                        <button type="submit" className="btn btn-secondary">Post</button>
                    </div>
                </div>
            </form>
        </>
    );
}
