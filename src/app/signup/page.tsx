import Link from 'next/link';
import React from 'react';

export default function Signup() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-primary rounded-xl w-full max-w-lg">
                <div className="p-4 sm:p-7">
                    <div className="text-center">
                        <h3 className="block text-2xl font-bold">Sign up</h3>
                        <p className="mt-2 text-sm">
                            Already have an account? 
                            <Link className="text-secondary decoration-2 hover:underline focus:outline-none focus:underline font-medium" href="/login">
                                 Sign in here
                            </Link>
                        </p>
                    </div>

                    <div className="mt-5">
                        <form>
                            <div className="grid gap-y-4">
                                {/* Form Group */}
                                <div>
                                    <label htmlFor="email" className="block text-sm mb-2">Email address</label>
                                    <div className="relative">
                                        <input type="email" id="email" name="email" className="input input-bordered w-full text-gray-900" required aria-describedby="email-error"/>
                                    </div>
                                    <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                                </div>

                                {/* Form Group */}
                                <div>
                                    <label htmlFor="password" className="block text-sm mb-2">Password</label>
                                    <div className="relative">
                                        <input type="password" id="password" name="password" className="input input-bordered w-full text-gray-900" required aria-describedby="password-error"/>
                                    </div>
                                    <p className="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters required</p>
                                </div>

                                {/* Form Group */}
                                <div>
                                    <label htmlFor="confirm-password" className="block text-sm mb-2">Confirm Password</label>
                                    <div className="relative">
                                        <input type="password" id="confirm-password" name="confirm-password" className="input input-bordered w-full text-gray-900" required aria-describedby="confirm-password-error"/>
                                    </div>
                                    <p className="hidden text-xs text-red-600 mt-2" id="confirm-password-error">Password does not match the password</p>
                                </div>

                                {/* Checkbox */}
                                <div className="flex items-center">
                                    <div className="flex">
                                        <input id="remember-me" name="remember-me" type="checkbox" className="checkbox checkbox-secondary"/>
                                    </div>
                                    <div className="ml-3">
                                        <label htmlFor="remember-me" className="text-sm">I accept the <a className="text-secondary decoration-2 hover:underline focus:outline-none focus:underline font-medium" href="#">Terms and Conditions</a></label>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-secondary w-full">Sign up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
