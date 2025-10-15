"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export default function Btn() {

        useEffect(()=>{
            window.addEventListener('scroll', () => {
            const moveUp = document.querySelector('.move-up') as HTMLElement
            moveUp.onclick = () => {
                window.scrollTo({top: 0, behavior: 'smooth'})
            }
            if(window.scrollY > 500){
                moveUp.classList.add('show')
            }else{
                moveUp.classList.remove('show')
            }
        })
        },[])

    return (
        <FontAwesomeIcon icon={faAngleUp} className=' fixed bottom-6 right-6  cursor-pointer bg-gradient-to-r from-[#ddd] to-[#3d699b] p-2 rounded-lg font-bold text-xl  z-40  border border-[#25252530] move-up'/>
    )
}