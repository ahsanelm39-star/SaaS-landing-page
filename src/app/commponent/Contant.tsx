import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Star from "../../../public/images/star.png"
import Spring from "../../../public/images/spring.png"

export default function  Contant () {
    return (
        <section id="contact" className="py-15 relative overflow-x-clip bg-gradient-to-b from-[#ffffff] to-[#d9e7ff]">
            <div className="container m-auto px-4 flex justify-center">
                <div className=" text-center md:w-[600px] ">
                    <h2 className="section-title md:text-4xl lg:text-5xl"> Sign up for free today</h2>
                    <p className="section-description">Celeprate the joy of accomplishment with an app designed to track your progress and motivate your offerts</p>
                    <div className="flex gap-x-4 mt-[30px] items-cente justify-center">
                            <button className="btn">Get for free</button>
                            <div className="flex gap-x-2 items-center cursor-pointer hover:opacity-80 transition-all">
                                <button className="cursor-pointer">Learn more</button>
                                <FontAwesomeIcon icon={faArrowRight}  className='w-4 h-4'/>
                            </div>
                        </div>
                </div>
            </div>
            <Image src={Star} alt="star" width={360} height={360} className="absolute -top-[80px] -left-60 hidden md:block xl:left-0"/>
            <Image src={Spring} alt="spring" width={360} height={360} className="absolute -bottom-20 -right-50 hidden md:block xl:right-0"/>
        </section>
    )
}