import { useState } from 'react';
import { close, logo, menu } from "../assets"
import { navLinks } from '../constants'


export default function NavBar() {
    const [open, setOpen] = useState(false)
    return (
        <nav className='flex justify-between items-center w-full py-6'>
            <img src={logo} alt="brand" className='w-[124px] h-[32px]' />
            mdmdldldldd
            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                {
                    navLinks.map((el, index) => {
                        return (
                            <li key={el.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} `}>
                                <a href={`#${el.id}`}>
                                    {el.title}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <div className='sm:hidden flex justify-end items-center flex-1'>
                <img src={open ? close : menu} alt="brand" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setOpen((prev) => !prev)} />
                <div className={`${open ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-[-20px] right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className='list-none flex flex-col justify-end items-center flex-1 '>
                        {
                            navLinks.map((el, index) => {
                                return (
                                    <li key={el.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'} `}>
                                        <a href={`#${el.id}`}>
                                            {el.title}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>

                </div>
            </div>

        </nav>
    )
}
