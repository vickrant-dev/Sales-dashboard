import avatarImage from '../assets/avatar-img.png'
import { Bell, Menu, Moon, Search, Settings2 } from 'lucide-react'
import '../App.css'

export default function Navbar() {

    return (
        <>
            <div
                id="main-container"
                className="flex items-center justify-between py-5 border-b border-base-300"
            >
                <div id="left" className="flex items-center gap-5">
                    <label className="input">
                        <svg
                            className="h-[1.5em] opacity-50"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input
                            type="search"
                            className="grow pt-0.25"
                            placeholder="Search"
                        />
                        <kbd className="kbd kbd-sm">⌘</kbd>
                        <kbd className="kbd kbd-sm">K</kbd>
                    </label>
                </div>
                <div id="right" className='flex items-center gap-6 text-neutral-300'>
                    <Moon size={21} className='cursor-pointer' />
                    <Settings2 size={21} className='cursor-pointer' />
                    <Bell size={21} className='cursor-pointer' />
                    <div id="user" className='flex items-center cursor-pointer'>
                        <img src={avatarImage} alt="avatar-img" className='bg-base-300 rounded-3xl p-0.75'  width="45px" />
                        <div id="user-info" className='flex flex-col ml-2.5' >
                            <p className='text-md text-neutral-100 font-semibold'>Vickrant</p>
                            <p className='text-sm text-neutral-400'>Admin</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}