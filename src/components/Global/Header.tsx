import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className="shadow-md">
      <div className="container navbar bg-base-100">
        <div className="flex-1">
          <Link href="/">
            <img src="/logo.svg" className="w-28 h-auto" alt="" />
          </Link>
        </div>
        <div className="flex gap-2">
          <div className="flex gap-2">
            <Link href="/login" className="btn btn-primary btn-sm">Log in</Link>
            <Link href="/signup" className="btn btn-sm">Signup</Link>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><Link href="/profile">Profile</Link></li>
              <li><a href="/add-post">Add Post</a></li>
              <li><a>My Post</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
