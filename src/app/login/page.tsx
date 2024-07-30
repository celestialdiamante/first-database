import Link from 'next/link';
import React from 'react';

export default function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-primary rounded-xl w-full max-w-lg">
                <div className="p-4 sm:p-7">
                    <div className="text-center">
                        <h3 className="block text-2xl font-bold">Log in</h3>
                        
                    </div>

                    <div className="mt-5">
                        <form>
                            <div className="grid gap-y-4">
                                {/* Form Group */}
                                <div>
                                    <label htmlFor="username" className="block text-sm mb-2">Username or Email</label>
                                    <div className="relative">
                                        <input type="text" id="username" name="username" className="input input-bordered w-full text-gray-900" required aria-describedby="username-error"/>
                                    </div>
                                    <p className="hidden text-xs text-red-600 mt-2" id="username-error">Please include a valid username or email address</p>
                                </div>

                                {/* Form Group */}
                                <div>
                                    <label htmlFor="password" className="block text-sm mb-2">Password</label>
                                    <div className="relative">
                                        <input type="password" id="password" name="password" className="input input-bordered w-full text-gray-900" required aria-describedby="password-error"/>
                                    </div>
                                    <p className="hidden text-xs text-red-600 mt-2" id="password-error">Please enter your password</p>
                                </div>

                                <button type="submit" className="mt-3 btn btn-secondary w-full">Login</button>

                                <div className="flex justify-center mt-6 space-x-2 text-sm">
                                    <Link href="#" className="link link-hover text-secondary">Forgot Password?</Link>
                                    <span>/</span>
                                    <Link href="/signup" className="link link-hover text-secondary">Sign Up</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
