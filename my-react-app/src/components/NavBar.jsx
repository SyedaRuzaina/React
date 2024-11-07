import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <section className="flex justify-between items-center p-4">
            <Link to={'/'} className="flex items-center">
                <img className="w-7" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s" />
                <span className="text-lg font-semibold ml-2">tailwindcss</span>
            </Link>

            <nav class="space-x-6 hidden text-gray-600 sm:flex hover:text-gray-900">

           
                <Link  to={'/docs'} > Docs </Link>

                <Link  to={'/components'} > Components </Link>
                
                <a href="#" className="hover:text-gray-900">Blog</a>

                
                <a href="#" className="hover:text-gray-900">Showcase</a>
                <a href="" className="text-gray-600 hover:text-gray-900"> </a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>

                <img className="w-7" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqj9Ii13d6hx5a9kyLnC5A8A96LDSaSZv_w&s" />

            </nav>

        </section>
    )
}

export default NavBar

