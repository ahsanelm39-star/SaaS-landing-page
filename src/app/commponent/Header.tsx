"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Logo from '../../../public/images/logosaas.png'
import List from '../../../public/images/menu.svg'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Header () {

    function showMenu(){
        const linkes = document.querySelector('ul')
        const linkesLi = document.querySelectorAll('ul li')
        linkes?.classList.toggle('linkes')
        linkesLi.forEach(li => {
            li.classList.toggle('linkes-li')
        })
        
    }

        useEffect(()=>{
            window.addEventListener('click',(e)=>{
            if(e.target !== document.querySelector('ul') && e.target !== document.querySelector('.list')){
                const linkes = document.querySelector('ul')
                const linkesLi = document.querySelectorAll('ul li')
                linkes?.classList.remove('linkes')
                linkesLi.forEach(li => {
                    li.classList.remove('linkes-li')
                })
            }
        })
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header') as HTMLElement
            if(window.scrollY > 50){
                header.classList.add('show-shadow')
            }else{
                header.classList.remove('show-shadow')
            }
        })
        },[])




    return(
        <header className='sticky top-0 backdrop-blur-sm z-50 header' >
            <div className='flex gap-x-2 justify-center items-center bg-black text-white text-sm text-center py-2'>
                <p className='opacity-70 hidden md:block'>Streamlin your workflow and boost your productivity</p>
                <div className='flex gap-x-2 justify-center items-center cursor-pointer transition-all hover:opacity-80'>
                    <p className='inline-block'>Get Started For Free</p>
                    <FontAwesomeIcon icon={faArrowRight} className='h-3 '/>
                </div>
            </div>
            <nav>
                <div className='container m-auto p-4'>
                    <div className='flex justify-between items-center'>
                        <Image src={Logo} className='h-10 w-10' alt='SaaS logo'/>
                        <div className='flex gap-x-8 items-center'>
                            <ul className='hidden md:flex gap-x-8 text-sm font-medium text-gray-700'>
                                <Link href={"#hero"}><li className=' cursor-pointer hover:text-black transition-all text-lg'>Home</li></Link>
                                <Link href={"#features"}><li className=' cursor-pointer hover:text-black transition-all text-lg'>Features</li></Link>
                                <Link href={"#pricing"}><li className=' cursor-pointer hover:text-black transition-all text-lg'>Pricing</li></Link>
                                <Link href={"#contact"}><li className=' cursor-pointer hover:text-black transition-all text-lg'>Conatct</li></Link>
                            </ul>
                            <Link href={"#contact"}><span className='hidden md:inline-block btn'>Get For Free</span></Link>
                        </div>
                        
                            <Image  src={List} className='list h-8 w-8 md:hidden cursor-pointer' alt='menu' onClick={showMenu}/>
                        
                    </div>
                </div>
            </nav>
        </header>
    )
}